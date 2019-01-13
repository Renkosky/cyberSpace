import React, { Component } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavBar from './NavBar'
import Register from './Register'
import News from './News'
import Park from './Park'
import Me from './Me'
class AppRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar>
          <Switch>
            <Route exact path="/" component={Park} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/park" component={Park} />
            <Route exact path="/news" component={News} />
            <Route exact path="/me" component={Me} />
          </Switch>
        </NavBar>
      </BrowserRouter>
    )
  }
}

export default AppRoute
