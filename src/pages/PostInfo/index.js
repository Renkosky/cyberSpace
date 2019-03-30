import React, { Component } from 'react'
import PostDetail from 'components/PostDetail'
import { getPostInfo } from 'api/post'
import ListView from 'components/ListView'
import { NavBar, Icon, TextareaItem, List, Toast, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import { createForm } from 'rc-form'
import { postComment } from 'api/post'
import { getUserInfo } from 'api/user'
import actions from '../../redux/actions'

class PostInfo extends Component {
  state = { posts: [], refresh: false }
  componentDidMount() {
    this.getPostDetail()
    this.getUserInfo()
  }
  getUserInfo = () => {
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
      })
    }
  }
  getPostDetail = () => {
    this.setState({ refresh: true })
    const { id } = this.props.match.params
    getPostInfo(id).then(res => {
      const { postInfo } = res.data
      this.setState({
        posts: [postInfo].concat(postInfo.comments),
        refresh: false
      })
    })
  }
  newComment = () => {
    const { validateFields } = this.props.form
    const { id } = this.props.match.params
    validateFields((error, value) => {
      if (error) {
        return
      }
      if (!value.content) {
        return Toast.fail('请输入回复内容')
      }
      const { username, _id } = this.props.userInfo
      const { content } = value
      let comment = {
        pid: id,
        uid: _id,
        author: username,
        content
      }
      postComment(comment).then(res => {
        if (res.data.code === 0) {
          Toast.success(res.data.message)
        } else {
          Toast.fail(res.data.message)
        }
      })
    })
  }

  render() {
    const { getFieldProps } = this.props.form
    return (
      <div>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => window.history.back()}
          rightContent={[
            <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
            <Icon key="1" type="ellipsis" />
          ]}
        >
          话题
        </NavBar>
        <ListView
          tabHeigth={200}
          postsData={this.state.posts}
          getPost={this.getPostDetail}
          listRefresh={this.state.refresh}
          ListItem={PostDetail}
        />
        <List>
          <TextareaItem
            autoHeight
            clear
            {...getFieldProps('content', {})}
            placeholder="请输入回复内容"
            rows={5}
            count={100}
          />
        </List>
        <Button type="primary" onClick={this.newComment}>
          回复
        </Button>
      </div>
    )
  }
}
const PostInfoWrapper = createForm()(PostInfo)

export default connect(
  state => state,
  actions
)(PostInfoWrapper)
