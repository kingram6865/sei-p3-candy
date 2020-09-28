import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
// import logo from "./images/SUGAR-MAMA-LOGO-SQUARE.png"

const Nav = () => {
  return (
    <nav>
      <div className="admin-login">
        <div className="add-NavLink">Admin Login</div>
      </div>
      <div className="navbar">
        <div className="navbar-links">
          <div className="dead-links">SHOP</div>
          <div className="dead-links">GIFTS</div>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/SUGAR-MAMA-LOGO-SQUARE.png`} alt="sugar-mama-logo"/>
          </Link>
          <div className="dead-links">ABOUT</div>
          <div className="dead-links">VISIT</div>
          <div className="cart-image">cartlogo</div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
