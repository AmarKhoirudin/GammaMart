import React from 'react';
import './Header.scss';
import Brand from '../../assets/img/logo.svg';
import { NavLink as Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBars } from '@fortawesome/free-solid-svg-icons';

library.add(faBars);

const Header = ({ showNav, className }) => {
  return (
    <div className='header'>
      <div className='brand'>
        <Link to='/' exact>
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
        <ul>
          <li>
            <Link to='/about' activeClassName='active'>
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to='/login' activeClassName='active'>
              Masuk
            </Link>
          </li>
          <li>
            <Link to='/register' activeClassName='active'>
              coba gratis
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
