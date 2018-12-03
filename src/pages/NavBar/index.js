import React, { Component } from 'react'
import { Tabs, Badge } from 'antd-mobile'
import { Link, withRouter, matchPath } from 'react-router-dom'
import PropTypes from 'prop-types'

const tabs2 = [
  { title: '资讯', sub: 'news' },
  { title: '广场', sub: 'park' },
  { title: '我', sub: 'me' }
]

class NavBar extends Component {
  state = {}
  renderTabBar = props => {
    return (
      <Link to="/news">
        <Tabs.DefaultTabBar {...props} />
      </Link>
    )
  }
  //   renderTabBar = ()
  render() {
    const { children } = this.props
    console.log(children)

    return (
      <Tabs
        tabs={tabs2}
        initialPage={1}
        // onTabClick={this.onTabClick}
        tabBarPosition="bottom"
        renderTab={tab => <Link to={`/${tab.sub}`}>{tab.title}</Link>}
      >
        <div>{children}</div>
      </Tabs>
    )
  }
}

NavBar.propTypes = {
  history: PropTypes.object.isRequired,
  match: PropTypes.object,
  children: PropTypes.node.isRequired
}

export default withRouter(NavBar)
