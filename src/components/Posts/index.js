import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import './index.less'
const prefixCls = 'post'
const Posts = ({ postData, history }) => {
  const openPostInfo = id => {
    history.push(`/p/${id}`)
  }

  const { author, title, createdAt, _id } = postData
  return (
    <div className={`${prefixCls}`} onClick={id => openPostInfo(_id)}>
      <div className={`${prefixCls}-avatar`}>
        <img src="" alt="" />
      </div>
      <div className={`${prefixCls}-content`}>
        <span className={`${prefixCls}-content-author`}>{author}</span>
        <div className={`${prefixCls}-content-title`}>
          {title.length > 36 ? title.slice(0, 26) + '...' : title}
        </div>
      </div>
      <div className={`${prefixCls}-date`}>
        {new Date(createdAt).toLocaleDateString()}
      </div>
    </div>
  )
}
Posts.propTypes = {
  postData: PropTypes.object
}
export default withRouter(Posts)
