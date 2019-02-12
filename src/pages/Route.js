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
          <Route exact path="/test" component={ListViews} />
          <Route exact path="/" component={NavBar} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppRoute;
