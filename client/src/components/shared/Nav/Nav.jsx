import React from "react";
import { NavLink, Link } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="admin-login">
        <NavLink to="/candies" className="admin-link">ADMIN LOGIN</NavLink>
      </div>
      <div className="navbar">
        <div className="navbar-links">
          <div className="dead-links">SHOP</div>
          <div className="dead-links">GIFTS</div>
          <Link to="/">
            <img src={`${process.env.PUBLIC_URL}/images/SUGAR-MAMA-LOGO-SQUARE.png`} alt="sugar-mama-logo" />
          </Link>
          <div className="dead-links">ABOUT</div>
          <div className="dead-links">VISIT</div>
          <div className="cart-image"><img src={`${process.env.PUBLIC_URL}/images/shopping-cart.png`} alt="cart-icon" /></div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
