import React, { Component } from 'react'
import './index.less'
import Post from '../Post/index'
const prefixCls = 'Park'
class Park extends Component {
  state = {}
  render() {
    return (
      <div className={`${prefixCls}`}>
        <Post />
      </div>
    )
  }
}

export default Park
