import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="admin-login">
        <div className="add-NavLink">Admin Login</div>
      </div>
      <div className="navbar-links">
        <div className="dead-links">SHOP</div>
        <div className="dead-links">GIFTS</div>
        <div className="logo-image">insert-logo-here</div>
        <div className="dead-links">ABOUT</div>
        <div className="dead-links">VISIT</div>
        <div className="cart-image">insert-cart-here</div>
      </div>
    </nav>
  )
};

export default Nav;