import React, { useState, useEffect } from "react";
import { getCandies } from "../../services/candies";
import "./Sort.css";

const Sort = (props) => {
  const [allCandy, setAllCandy] = useState([]);
  const [queriedCandy, setQueriedCandy] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchCandy = async () => {
      const candies = await getCandies();
      setAllCandy(candies);
      setQueriedCandy(candies);
    };
    fetchCandy();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
      <form className="sort-container" onSubmit={handleSubmit}>
        <select className="sort" onChange={(e) => props.handleSort(e)}>
          <option className="sort-by" default value="">
            &nbsp; Sort By &nbsp;
          </option>
          <option className="option" value="name-ascending">
            &nbsp; Alphabetically, A-Z &nbsp;
          </option>
          <option value="name-descending">
            &nbsp; Alphabetically, Z-A &nbsp;
          </option>
          <option value="price-ascending">
            &nbsp; Price, low to high &nbsp;
          </option>
          <option value="price-descending">
            &nbsp; Price, high to low &nbsp;
          </option>
        </select>
      </form>
  );
};

export default Sort;
