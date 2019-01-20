import React, { Component } from 'react'
import { Button, Modal } from 'antd-mobile'
import { login } from '../../api/login'
import './Login.css'
import actions from '../../redux/actions'
import { connect } from 'react-redux'
import { Link, withRouter, Router } from 'react-router-dom'
import { getUserInfo } from '../../api/user'

const prompt = Modal.prompt
class Login extends Component {
  userLogin = (username, password) => {
    let userInfo = {
      username,
      password
    }
    login(userInfo).then(res => {
      const { token, _id } = res.data
      localStorage.setItem('token', token)
      // localStorage.setItem('id', _id)
      getUserInfo().then(res => {
        const { username, _id, email, createTime } = res.data.userInfo
        const { storeUserInfo } = this.props
        storeUserInfo({
          username,
          _id,
          createTime: new Date(createTime).toLocaleDateString(),
          email
        })

        // this.setState({ username })
      })
    })
  }

  render() {
    return this.props.userInfo.username ? (
      <div style={{ justifyContent: 'flex-end', height: 35, width: 80 }}>
        <Button
          type="primary"
          style={{ fontSize: 12, height: '100%', lineHeight: '35px' }}
        >
          发帖
        </Button>
      </div>
    ) : (
      <div style={{ justifyContent: 'flex-end', height: 35, width: 80 }}>
        <Button
          style={{ fontSize: 12, height: '100%', lineHeight: '35px' }}
          onClick={() =>
            prompt(
              ' 登录',
              '',
              [
                {
                  text: '确定',
                  onPress: (username, password) =>
                    this.userLogin(username, password)
                },
                { text: '取消', onPress: () => {} },
                {
                  text: '注册',
                  onPress: () => this.props.history.push('/signup')
                }
              ],

              'login-password',
              null,
              ['用户名', '密码']
            )
          }
        >
          登录
        </Button>
      </div>
    )
  }
}
export default withRouter(
  connect(
    state => state,
    actions
  )(Login)
)
