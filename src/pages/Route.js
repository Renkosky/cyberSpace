import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Register from "./Register";
import News from "./News";
import Park from "./Park";
import Me from "./Me";
import ListViews from "./ListView";
// import re from 'components/Login'
class AppRoute extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/signup" component={Register} />
          <Route exact path="/test" component={ListViews} />>
          <NavBar>
            <Route exact path="/" component={Park} />
            <Route exact path="/park" component={Park} />
            <Route exact path="/news" component={News} />
            <Route exact path="/me" component={Me} />
          </NavBar>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRoute;
