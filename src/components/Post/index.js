import React, { Component } from "react";
import PropTypes from "prop-types";
import "./index.less";
const prefixCls = "post";
const Post = ({ postData }) => {
  const { author, title, createdAt } = postData;
  return (
    <div className={`${prefixCls}`}>
      <div className={`${prefixCls}-avatar`}>
        <img src="" alt="" />
      </div>
      <div className={`${prefixCls}-content`}>
        <span className={`${prefixCls}-content-author`}>{author}</span>
        <div className={`${prefixCls}-content-title`}>{title}</div>
      </div>
      <div className={`${prefixCls}-date`}>
        {new Date(createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};
Post.propTypes = {
  postData: PropTypes.object
};
export default Post;
