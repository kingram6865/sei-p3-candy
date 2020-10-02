import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import Candy from "../../components/Candy/Candy";
import Sort from "../../components/Sort/Sort";
import "./SearchResults.css";

const SearchResults = (props) => {
  const candies =
    props.queriedCandy && props.queriedCandy.length > 0
      ? props.queriedCandy
      : props.queryResults;
  const productsJSX = candies.map((candy, index) => (
    <Candy
      _id={candy._id}
      productName={candy.productName}
      price={candy.price}
      imgURL1={candy.imgURL1}
      imgURL2={candy.imgURL2}
      imgURL3={candy.imgURL3}
      description={candy.description}
      key={index}
    />
  ));

  return (
    <Layout
      handleSearch={props.handleSearch}
      setQueryResults={props.setQueryResults}
    >
      <div className="search-results-title">
        <span>Search Results</span>
      </div>
      <div className="results-container">
        <div className="search-results-screen">
          <div className="search-sort-container">
            <Sort
              handleSort={props.handleSort}
              setQueriedCandy={props.setQueriedCandy}
            />
          </div>
          <div className="search-results-products-container">
            {productsJSX}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SearchResults;
