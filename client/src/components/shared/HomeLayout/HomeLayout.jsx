import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import "./HomeLayout.css";

const HomeLayout = (props) => {
  return (
    <div className="home-layout">
      <Nav />
      <div className="home-layout-children">
        {props.children}
      </div>
      <Footer />
    </div>
  )
};

export default HomeLayout;