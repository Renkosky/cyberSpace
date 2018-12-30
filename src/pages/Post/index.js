import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.less'
const prefixCls = 'post'
class Post extends Component {
  state = {}
  render() {
    const { postData } = this.props
    return (
      <div className={`${prefixCls}`}>
        <div className={`${prefixCls}-avatar`}>
          <img src="" alt="" />
        </div>
        <div className={`${prefixCls}-content`}>
          <span className={`${prefixCls}-content-author`}>author</span>
          <div className={`${prefixCls}-title`}>帖子标题</div>
        </div>
      </div>
    )
  }
}
Post.propTypes = {
  postData: PropTypes.object
}
export default Post
