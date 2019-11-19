import React from "react";
import "./Header.scss";
import Brand from "../../assets/img/logo.svg";
import { NavLink as Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="header">
      <div className="brand">
        <Link to="/" exact>
          <img src={Brand} alt="" />
          <span>POS</span>
        </Link>
      </div>
      <div className="link">
        <ul>
          <li>
            <Link to="/about" activeClassName="active">
              Tentang Kami
            </Link>
          </li>
          <li>
            <Link to="/login" activeClassName="active">
              Masuk
            </Link>
          </li>
          <li>
            <Link to="/register" activeClassName="active">
              coba gratis!
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
