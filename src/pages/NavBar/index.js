import React, { Component } from "react";
import { Tabs } from "antd-mobile";
import { withRouter } from "react-router-dom";
import "./index.less";
import PropTypes from "prop-types";
import Park from "pages/Park";
import Me from "pages/Me";
import News from "pages/News";
const tabs2 = [
  { title: "资讯", sub: "news", index: 0 },
  { title: "广场", sub: "park", index: 1 },
  { title: "我", sub: "me", index: 2 }
];

class NavBar extends Component {
  // componentDidMount() {
  //   sessionStorage.setItem('index', 1)
  // }
  state = {
    index: sessionStorage.getItem("index")
  };
  render() {
    const { children } = this.props;
    const { index } = this.state;

    return (
      <Tabs
        tabs={tabs2}
        initialPage={index === null ? 1 : parseInt(index, 10)}
        // onTabClick={this.onTabClick}
        distanceToChangeTab={0.8}
        tabBarPosition="bottom"
        tabBarInactiveTextColor="grey"
        renderTab={tab => <p>{tab.title}</p>}
        onChange={tabs => {
          // this.props.history.push(`/${tabs.sub}`);
          sessionStorage.setItem("index", tabs.index);
        }}
      >
        <News />
        <Park />
        <Me />
      </Tabs>
    );
  }
}

NavBar.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object,
  children: PropTypes.node.isRequired
};

export default withRouter(NavBar);
