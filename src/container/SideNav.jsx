import React, { Component } from 'react'
import SideNav from '../components/dashboard/sideNav/SideNav'

class SideNavContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      navExpand: false
    }
  }

  logOut = () => {
    return alert('bisa')
  }
  showNav = () => {
    this.setState({
      navExpand: !this.state.navExpand
    })
  }
  render() {
    return (
      <>
        <SideNav
          logout={this.logOut}
          showNav={this.showNav}
          hideNav={this.showNav}
          navExpand={this.state.navExpand ? 'sidenav' : 'hidenav'}
        />
      </>
    )
  }
}
export default SideNavContainer
