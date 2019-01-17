import React, { Component } from 'react'
import './index.less'
import Post from '../Post/index'
import Login from '../../components/Login'
import { connect } from 'react-redux'
import {getUserInfo} from  '../../api/user'
const prefixCls = 'Park'
class Park extends Component {
  state = {}
componentDidMount(){

    getUserInfo().then(res=>{
      console.log(res);
    })
}
  render() {
    return (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-layer`}>
          <div className={`${prefixCls}-welcome`}>
            {this.props.userInfo.username
              ? `Hi~${this.props.userInfo.username}。`
              : '如要发帖请先登陆。'}
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
export default connect(state => state)(Park)
