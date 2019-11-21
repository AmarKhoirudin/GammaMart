import React, { Component } from 'react'
import LoginCon from '../components/login/Login'
import Axios from 'axios'
import { Redirect } from 'react-router-dom'

class Login extends Component {
  state = {
    name: '',
    password: '',
    redirect: false
  }
  onChangeLogin = e => {
    this.setState(
      {
        [e.target.name]: e.target.value
      },
      () => {
        console.log(this.state)
      }
    )
  }

  onSubmitLogin = e => {
    e.preventDefault()
    const dataLogin = {
      name: this.state.name,
      password: this.state.password
    }
    Axios.post(
      'https://rocky-refuge-01694.herokuapp.com/api/login',
      dataLogin
    ).then(res => {
      console.log(res)
      localStorage.setItem('token', res.data.access_token)
      this.setState({
        redirect: true
      })
    })
  }
  render() {
    const { name, password } = this.state
    const { onChangeLogin, onSubmitLogin } = this

    if (localStorage.getItem('token')) {
      return <Redirect to='/' />
    }
    return (
      <>
        <LoginCon
          // name
          nama='name'
          valueName={name}
          // password
          namePassword='password'
          valuePassword={password}
          //   sama
          onChange={onChangeLogin}
          onSubmit={onSubmitLogin}
        />
      </>
    )
  }
}
export default Login
