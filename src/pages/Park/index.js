import React, { Component } from 'react'
import './index.less'
// import Post from '../Post/index'
import Login from '../../components/Login'
import PushModal from 'components/Push'
import { Button } from 'antd-mobile'
import { connect } from 'react-redux'
import actions from '../../redux/actions'
import { getUserInfo } from 'api/user'
import { getAllPosts } from 'api/post'
import ListView from 'components/ListView'
import Posts from 'components/Posts'
const prefixCls = 'Park'

class Park extends Component {
  state = {
    pushShow: false,
    posts: [],
    refresh: false
  }
  componentDidMount() {
    this.getPost()
    this.getUserInfo()
  }

  getPost = page => {
    this.setState({ refresh: true })
    getAllPosts(page).then(res => {
      const { posts } = res.data
      this.setState({ posts, refresh: false })
    })
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
        this.setState({ username })
      })
    }
  }

  collspasePush = () => {
    this.setState({ pushShow: !this.state.pushShow })
  }
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.posts !== this.state.posts;
  // }
  render() {
    const { posts, refresh } = this.state
    const { username } = this.props.userInfo
    return (
      <div className={`${prefixCls}`}>
        <div ref={tab => (this.tab = tab)}>
          <div className={`${prefixCls}-title`} onClick={this.start}>
            话题广场
          </div>
          <div className={`${prefixCls}-layer`}>
            <div className={`${prefixCls}-welcome`}>
              {username ? `Hi~${username}。` : '如要发帖请先登陆。'}
              今天的日期是：
              {new Date().toLocaleDateString()}
            </div>
            {username ? (
              <div
                style={{
                  justifyContent: 'flex-end',
                  height: 35,
                  width: 80
                }}
              >
                <Button
                  type="primary"
                  style={{
                    fontSize: 12,
                    height: '100%',
                    lineHeight: '35px'
                  }}
                  onClick={this.collspasePush}
                >
                  发帖
                </Button>
              </div>
            ) : (
              <Login />
            )}
          </div>
        </div>
        {/* {posts && posts.map((item, index) => <Posts postData={item} />)}*/}
        <PushModal
          show={this.state.pushShow}
          collspasePush={this.collspasePush}
          onPushEnd={this.getPost}
        />
        <ListView
          tabHeigth={this.tab && this.tab.clientHeight}
          postsData={posts}
          getPost={this.getPost}
          listRefresh={refresh}
          ListItem={Posts}
        />
      </div>
    )
  }
}
export default connect(
  state => state,
  actions
)(Park)
