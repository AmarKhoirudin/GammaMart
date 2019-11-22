import React, { Component } from 'react'
import SideNav from '../components/dashboard/sideNav/SideNav'

class SideNavContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  logOut = () => {
    return alert('bisa')
  }

  render() {
    return (
      <>
        <SideNav logout={this.logOut} />
      </>
    )
  }
}
export default SideNavContainer
