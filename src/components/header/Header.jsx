import React from 'react'
import './Header.scss'
import Brand from '../../assets/img/logo.svg'
import { NavLink as Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons'

library.add(faBars)

const Header = ({ showNav, className, hideNav, headerClass }) => {
  return (
    <div className={`header ${headerClass}`}>
      <div className='brand'>
        <Link to='/' exact activeClassName='home-active'>
          <img src={Brand} alt='' />
          <span>GPOS</span>
        </Link>
      </div>
      <div className='bar'>
        <i>
          <FontAwesomeIcon icon={faBars} onClick={showNav} />
        </i>
      </div>
      <div className={`link ${className}`}>
        <ul onClick={hideNav}>
          <li>
            <Link to='/about' activeClassName='active'>
              about
            </Link>
          </li>
          <li>
            <Link to='/login' activeClassName='active'>
              login
            </Link>
          </li>
          <li>
            <Link to='/register' activeClassName='active'>
              demo
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Header
