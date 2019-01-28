import React, { Component } from 'react'
import { getUserInfo } from '../../api/user'
import { connect } from 'react-redux'
import { Button, Toast } from "antd-mobile";
import Login from 'components/Login'
import actions from '../../redux/actions'
import './index.less'
const preFixCls = 'me'
const keymap = {
  username: '用户名',
  email: '邮箱',
  createTime: '注册时间',
  _id: 'id'
}
class Me extends Component {
  getUser() {
    getUserInfo().then(res => {
      const { username, _id, email, createTime } = res.data.userInfo
      const { storeUserInfo } = this.props
      storeUserInfo({
        username,
        _id,
        createTime: new Date(createTime).toLocaleDateString(),
        email
      })
    })
  }

  componentDidMount() {
    if (!this.props.userInfo.username && localStorage.getItem('token'))
      this.getUser()
  }

  logOut = ()=>{
      const { storeUserInfo } = this.props
      storeUserInfo({})
      window.localStorage.setItem("login_token", "");
      Toast.success("登出成功");      
  }
  state = { userInfo: {} }
  render() {
    const { userInfo } = this.props

    return <div className={`${preFixCls}`}>
        <div className={`${preFixCls}-profile`}>
          <div className={`${preFixCls}-profile-avator`} />
          <div style={{ padding: "20%" }} />
          <div className={`${preFixCls}-profile-info`}>
            {userInfo.username ? Object.keys(userInfo).map((key, index) => {
                return <span key={index}>
                    {keymap[key]}: {userInfo[key].slice(0, 20)}
                  </span>;
              }) : <p style={{ textAlign: "center", width: "100%" }}>
                你还尚未登陆哟
              </p>}
          </div>
        </div>
        <div className={`${preFixCls}-myPost`}>我的帖子</div>
        {this.props.username ? <Button type="warning" onClick={this.logOut}>
            登出
          </Button> : <Login/>}
      </div>;
  }
}
export default connect(
  state => state,
  actions
)(Me)
