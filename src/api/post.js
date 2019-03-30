import axios from 'axios'

export const pushPost = post => {
  return axios.post('/newPost', post)
}

export const getAllPosts = page => {
  return axios.post('/getAllPosts', page)
}

export const getPostInfo = id => {
  return axios.get(`/getPostInfo/${id}`)
}

export const postComment = comment => {
  return axios.post('/postComment', comment)
}
