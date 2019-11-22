import React, { Component } from 'react'
import Header from '../components/header/Header'

class HeaderContainer extends Component {
  constructor(props) {
    super(props)

    this.state = {
      className: false
    }
  }

  showNav = () => {
    this.setState({ className: !this.state.className })
  }
  hideNav = () => {
    this.setState({ className: false })
  }
  render() {
    return (
      <>
        <Header
          className={this.state.className ? ' link-aktif' : ''}
          showNav={this.showNav}
          hideNav={this.hideNav}
        />
      </>
    )
  }
}
export default HeaderContainer
