import React from "react";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import SearchBar from "../../../components/SearchBar/SearchBar";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout">
      <Nav />
      <div className="layout-children">
        <div style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/PinkDripHeader.jpg)` }} className="layout-header-img"></div>
        <div className="layout-searchbar">
          <SearchBar handleSearch={props.handleSearch} setQueryResults={props.setQueryResults}/>
        </div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
};

export default Layout;