import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Register from './Register'
import PostInfo from './PostInfo'

// import re from 'components/Login'
class AppRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={Register} />
          <Route exact path="/" component={NavBar} />
          <Route path="/p/:id" component={PostInfo} />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRoute
