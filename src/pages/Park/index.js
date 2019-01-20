import React, { Component } from 'react'
import './index.less'
import Post from '../Post/index'
import Login from '../../components/Login'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import { getUserInfo } from '../../api/user'
const prefixCls = 'Park'
class Park extends Component {
  state = {
    username: ''
  }
  componentDidMount() {
    if (!this.props.userInfo.username && localStorage.getItem('token')) {
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
    }
  }
  render() {
    // const { username } = this.state
    const { username } = this.props.userInfo
    return (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-title`}>话题广场</div>
        <div className={`${prefixCls}-layer`}>
          <div className={`${prefixCls}-welcome`}>
            {username ? `Hi~${username}。` : '如要发帖请先登陆。'}
            今天的日期是：
            {new Date().toLocaleDateString()}
          </div>
          <Login />
        </div>

        <Post />
      </div>
    )
  }
}
export default connect(
  state => state,
  actions
)(Park)
