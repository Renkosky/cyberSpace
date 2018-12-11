import React, { Component } from 'react'
import { Button, List, InputItem } from 'antd-mobile'
import { createForm } from 'rc-form'
class Register extends Component {
  state = {}

  register = () => {
    const { validateFields } = this.props.form
    validateFields((error, value) => {
      console.log(error, value)
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
            <InputItem
              type="email"
              {...getFieldProps('email')}
              placeholder="邮箱"
            />
          </List>
          <Button
            type="primary"
            style={{ margin: '10% 0' }}
            onClick={this.register}
          >
            注册
          </Button>
        </div>
      </div>
    )
  }
}
const RegisterWrapper = createForm()(Register)
export default RegisterWrapper
