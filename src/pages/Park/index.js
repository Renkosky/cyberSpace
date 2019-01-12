import React, { Component } from 'react'
import './index.less'
import Post from '../Post/index'
import Login from '../../components/Login'
const prefixCls = 'Park'
class Park extends Component {
  state = {}
  render() {
    return (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-layer`}>
          <div className={`${prefixCls}-welcome`}>
            Hi~ xxx 今天的日期是：{new Date().toLocaleDateString()}
          </div>
          <Login />
        </div>

        <Post />
      </div>
    )
  }
}

export default Park
