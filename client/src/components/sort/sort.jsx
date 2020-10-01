import React, { useState, useEffect } from "react";
import { getCandies } from "../../services/candies";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utils/sort";
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

  const handleSort = (e) => {
    const type = e.target.value;
    console.log(type)
    setSortType(type);
    switch (sortType) {
      case "name-ascending":
        setQueriedCandy(AZ(queriedCandy));
        break;
      case "name-descending":
        setQueriedCandy(ZA(queriedCandy));
        break;
      case "price-ascending":
        setQueriedCandy(lowestFirst(queriedCandy));
        break;
      case "price-descending":
        setQueriedCandy(highestFirst(queriedCandy));
        break;
      default:
        break;
    }
  };

  const handleChange = (event) => {
    props.onChange(event.target.value);
  };

  return (
    <form className="sort-container" onSubmit={handleSort}>
      <label htmlFor="sort">SORT BY:</label>
      <select className="sort" onChange={handleChange}>
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
