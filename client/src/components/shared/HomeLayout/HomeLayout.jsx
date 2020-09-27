import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./HomeLayout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <Nav />
      <div className="layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
};

export default Layout;