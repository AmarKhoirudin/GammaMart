import React from 'react'
import './SideNav.scss'
import { NavLink as Link } from 'react-router-dom'

const SideNav = () => {
  return (
    <div className='sidenav'>
      <h2>DASHBOARD</h2>
      <div className='nav-link'>
        <ul>
          <li>
            <Link to='#' activeClassName='active'>
              <span>PURCHASE</span>
            </Link>
          </li>
          <li>
            <Link to='#' activeClassName='active'>
              <span>SALES</span>
            </Link>
          </li>
          <li>
            <Link to='#' activeClassName='active'>
              <span>STOCK</span>
            </Link>
          </li>
          <li>
            <Link to='#' activeClassName='active'>
              <span>CHARTS</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default SideNav
