import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import Candies from "../Candies/Candies";

const CandyManager = () => {
  return (
    <Layout>
      <div className="product-manager">
        <h2>Product Manager</h2>
      </div>
      <div className="candy-manager-container">
        <Candies />
      </div>
    </Layout>
  );
};

export default CandyManager;
