import React from 'react'
import './Register.scss'
import Header from '../header/Header'

const Register = () => {
  const clipart = require('../../assets/img/clipart-register.svg')
  return (
    <div className='register'>
      <div className='register-wrap'>
        <Header />
        <div className='clip-art'>
          <img src={clipart} alt='' />
        </div>
        <div className='register-form'>
          <div className='text-wrap'>
            <h4>Welcome</h4>
            <span>
              thank you for using our application,please register with your
              personal information.
            </span>
          </div>
          <form>
            {/* jangan lupa dikasih fungsi maximal value setiap input. */}
            <span className='name'>Name</span>
            <input type='text' autoComplete='off' />
            <span className='email'>E-mail</span>
            <input type='email' autoComplete='off' />
            <span className='username'>Username</span>
            <input type='text' autoComplete='off' />
            <span className='password'>Password</span>
            <input type='password' />
            <div className='create-btn'>
              <span>Create Account</span>
            </div>
            <div className='login-btn'>
              <span>Login Now</span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register
