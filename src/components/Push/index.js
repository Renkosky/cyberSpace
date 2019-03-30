import React from 'react'
import {
  Button,
  Modal,
  List,
  InputItem,
  TextareaItem,
  Toast
} from 'antd-mobile'
import { createForm } from 'rc-form'
import { connect } from 'react-redux'
import { pushPost } from 'api/post'
import './index.less'
const preFixCls = 'Posts'
const Push = ({ show, collspasePush, form, userInfo, onPushEnd }) => {
  const { getFieldProps, validateFields } = form

  const newPost = () => {
    validateFields((error, value) => {
      if (error) {
        return
      }
      if (!value.title) {
        return Toast.fail('请输入帖子标题')
      }
      const { username, _id } = userInfo
      const { title, content } = value
      let post = {
        uid: _id,
        author: username,
        title,
        content
      }
      pushPost(post).then(res => {
        if (res.data.code === 0) {
          Toast.success(res.data.message)
          onPushEnd()
          collspasePush()
        } else {
          Toast.fail(res.data.message)
        }
      })
    })
  }

  return (
    <div>
      <Modal
        popup
        visible={show}
        onClose={collspasePush}
        animationType="slide-up"
        closable
      >
        <List renderHeader={() => '发帖'}>
          <InputItem
            {...getFieldProps('title')}
            clear
            placeholder="请输入帖子标题"
          >
            标题
          </InputItem>

          <TextareaItem
            autoHeight
            clear
            {...getFieldProps('content', {})}
            placeholder="请输入帖子内容"
            rows={5}
            count={100}
          />
        </List>
        <Button type="primary" style={{ margin: '10% 0' }} onClick={newPost}>
          发帖
        </Button>
      </Modal>
    </div>
  )
}

const PushModal = createForm()(Push)
export default connect(state => state)(PushModal)
