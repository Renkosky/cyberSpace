import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import './index.less'
const prefixCls = 'postDetail'
const PostDetail = ({ postData, history }) => {
  const { author, title, createdAt, _id, content } = postData
  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-avatar`}>
        <img src="" alt="" />
        <div>{author}</div>
      </div>
      <div className={`${prefixCls}-content`}>
        <span className={`${prefixCls}-content-author`}>
          {title && title.length > 36 ? title.slice(0, 26) + '...' : title}
        </span>
        <div className={`${prefixCls}-content-title`}>{content}</div>
      </div>
      <div className={`${prefixCls}-date`}>
        {new Date(createdAt).toLocaleDateString()}
      </div>
    </div>
  )
}
PostDetail.propTypes = {
  postData: PropTypes.object
}
export default withRouter(PostDetail)
