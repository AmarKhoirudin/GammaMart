import React from 'react';
import './Login.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faUserCircle, faLock } from '@fortawesome/free-solid-svg-icons';

import Logo from '../../assets/img/logo.svg';

library.add(faUserCircle, faLock);

const Login = ({
  nama,
  valueName,
  onChange,
  namePassword,
  valuePassword,
  onSubmit
}) => {
  return (
    <div className='login'>
      <div className='login-wrap'>
        <div className='logo'>
          <img src={Logo} alt='' />
          <p>GPOS</p>
        </div>
        <div className='form'>
          <form onSubmit={onSubmit}>
            <input
              type='text'
              placeholder='username'
              className='username'
              name={nama}
              value={valueName}
              onChange={onChange}
              autoComplete='off'
            />
            <i>
              <FontAwesomeIcon icon={faUserCircle} className='user' />
            </i>
            <input
              type='password'
              placeholder='password'
              className='password'
              name={namePassword}
              value={valuePassword}
              onChange={onChange}
              autoComplete='off'
            />
            <i>
              <FontAwesomeIcon icon={faLock} className='pass' />
            </i>
            <div className='login-btn'>
              <button type='submit'>LOGIN</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Login;
