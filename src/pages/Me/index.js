import React, { Component } from 'react'
import { getUserById } from '../../api/user'
class Me extends Component {
  getUser() {
    let id = localStorage.getItem('id')
    getUserById(id).then(res => {
      console.log(res.data)
    })
  }
  componentDidMount() {
    this.getUser()
    console.log(123)
  }
  state = {}
  render() {
    return 'me'
  }
}

export default Me
