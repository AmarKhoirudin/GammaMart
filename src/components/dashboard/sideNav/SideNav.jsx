import React from 'react'
import './SideNav.scss'
import { NavLink as Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faShoppingCart,
  faDollarSign,
  faTable,
  faChartBar,
  faBox,
  faCog
} from '@fortawesome/free-solid-svg-icons'

library.add(faShoppingCart, faDollarSign, faTable, faChartBar, faBox, faCog)

const SideNav = () => {
  return (
    <div className='sidenav'>
      <div className='nav-link'>
        <ul>
          <li>
            <Link to='#' activeClassName='active'>
              <span>PURCHASE</span>
              <i>
                <FontAwesomeIcon icon={faShoppingCart} />
              </i>
            </Link>
          </li>
          <li>
            <Link to='#' activeClassName='active'>
              <span>SALES</span>
              <i className='dollarsign'>
                <FontAwesomeIcon icon={faDollarSign} />
              </i>
            </Link>
          </li>
          <li>
            <Link to='#' activeClassName='active'>
              <span>STOCK</span>
              <i>
                <FontAwesomeIcon icon={faBox} />
              </i>
            </Link>
          </li>
          <li>
            <Link to='#' activeClassName='active'>
              <span>CHARTS</span>
              <i>
                <FontAwesomeIcon icon={faChartBar} />
              </i>
            </Link>
          </li>
          <li>
            <Link to='#' activeClassName='active'>
              <span>TABLE</span>
              <i>
                <FontAwesomeIcon icon={faTable} />
              </i>
            </Link>
          </li>
          <li>
            <Link to='#' activeClassName='active'>
              <span>SETTINGS</span>
              <i>
                <FontAwesomeIcon icon={faCog} />
              </i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default SideNav
