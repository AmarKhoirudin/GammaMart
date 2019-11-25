import React from 'react'
import './SideNav.scss'
import Brand from '../../../assets/img/logo.svg'
import { NavLink as Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faDatabase,
  faShoppingCart,
  faDollarSign,
  faTable,
  faChartBar,
  faBox,
  faCog,
  faSignOutAlt,
  faUser,
  faWindowClose,
  faAlignJustify
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faDatabase,
  faShoppingCart,
  faDollarSign,
  faTable,
  faChartBar,
  faBox,
  faCog,
  faSignOutAlt,
  faUser,
  faAlignJustify,
  faWindowClose
)

const SideNav = ({ logout, navExpand, showNav, hideNav }) => {
  return (
    <div className={navExpand}>
      <div className='brand'>
        <img src={Brand} alt='' />
        <p>Admin</p>
      </div>
      <div className='arrow' onClick={showNav}>
        <i>
          <FontAwesomeIcon icon={faAlignJustify} />
        </i>
      </div>
      <div className='hideArrow' onClick={hideNav}>
        <i>
          <FontAwesomeIcon icon={faWindowClose} />
        </i>
      </div>
      <div className='nav-link'>
        <ul>
          <li>
            <Link to='/dashboard' activeClassName='active'>
              <span>DASHBOARD</span>
              <i>
                <FontAwesomeIcon icon={faDatabase} />
              </i>
            </Link>
          </li>
          <li>
            <Link to='/profile' activeClassName='active'>
              <span>PROFILE</span>
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
            </Link>
          </li>
          <li>
            <Link to='/purchase' activeClassName='active'>
              <span>PURCHASE</span>
              <i>
                <FontAwesomeIcon icon={faShoppingCart} />
              </i>
            </Link>
          </li>
          <li>
            <Link to='/sales' activeClassName='active'>
              <span>SALES</span>
              <i className='dollarsign'>
                <FontAwesomeIcon icon={faDollarSign} />
              </i>
            </Link>
          </li>
          <li>
            <Link to='/stock' activeClassName='active'>
              <span>STOCK</span>
              <i>
                <FontAwesomeIcon icon={faBox} />
              </i>
            </Link>
          </li>
          <li>
            <Link to='/chart' activeClassName='active'>
              <span>CHART</span>
              <i>
                <FontAwesomeIcon icon={faChartBar} />
              </i>
            </Link>
          </li>
          <li>
            <Link to='/table' activeClassName='active'>
              <span>TABLE</span>
              <i>
                <FontAwesomeIcon icon={faTable} />
              </i>
            </Link>
          </li>
          <li>
            <Link to='/settings' activeClassName='active'>
              <span>SETTINGS</span>
              <i>
                <FontAwesomeIcon icon={faCog} />
              </i>
            </Link>
          </li>
          <li onClick={logout} className='logout'>
            <span>LOGOUT</span>
            <i>
              <FontAwesomeIcon icon={faSignOutAlt} />
            </i>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default SideNav
