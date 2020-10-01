import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import Candies from "../Candies/Candies";
import "./CandyManager.css";

const CandyManager = (props) => {
  return (
    <Layout handleSearch={props.handleSearch} setQueryResults={props.setQueryResults} >
      <div className="product-manager">
        <span>Product Manager</span>
      </div>
      <div className="candy-manager-container">
        <Candies />
      </div>
    </Layout>
  );
};

export default CandyManager;
