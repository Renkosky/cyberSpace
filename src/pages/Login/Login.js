import React, { Component } from 'react'
import { Button, List, InputItem, WhiteSpace } from 'antd-mobile'
import { userTest } from '../../api/login'
import { withRouter } from 'react-router-dom'
import './Login.css'
import { createForm } from 'rc-form'
class Login extends Component {
  componentDidMount() {
    userTest().then(res => {
      console.log(res.data)
    })
  }
  render() {
    const { getFieldProps } = this.props.form
    return (
      <div className="wrapper">
        <div className="layer">
          <div className="title">欢迎</div>
          <List>
            <InputItem {...getFieldProps('username')} placeholder="用户名" />
            <InputItem
              type="password"
              {...getFieldProps('password')}
              placeholder="密码"
            />
          </List>
          <Button type="primary" style={{ margin: '10% 0' }}>
            登录
          </Button>
          <Button
            type="primary"
            style={{ margin: '10% 0' }}
            onClick={() => this.props.history.push('/signup')}
          >
            注册
          </Button>
        </div>
      </div>
    )
  }
}
const LoginWrapper = createForm()(Login)
export default withRouter(LoginWrapper)
