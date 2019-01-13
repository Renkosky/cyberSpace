import React, { Component } from 'react'
import { Button, Modal } from 'antd-mobile'
import { login } from '../../api/login'
import './Login.css'
import actions from '../../redux/actions'
import { connect } from 'react-redux'

const prompt = Modal.prompt
class Login extends Component {
  userLogin = (username, password) => {
    const { storeUserInfo } = this.props
    let userInfo = {
      username,
      password
    }
    console.log(storeUserInfo)

    login(userInfo).then(res => {
      const { token, _id } = res.data
      localStorage.setItem('token', token)
      localStorage.setItem('id', _id)
      storeUserInfo({ username, id: _id })
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
              (username, password) => this.userLogin(username, password),
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
export default connect(
  state => state,
  actions
)(Login)
