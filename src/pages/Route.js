import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import LoginWrapper from './Login/Login'
import Register from './Register'
import News from './News'
import Park from './Park'
class AppRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginWrapper} />
          <Route exact path="/login" component={LoginWrapper} />
          <Route exact path="/signup" component={Register} />
          <NavBar>
            <Switch>
              <Route exact path="/park" component={Park} />
              <Route exact path="/news" component={News} />
            </Switch>
          </NavBar>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default AppRoute
