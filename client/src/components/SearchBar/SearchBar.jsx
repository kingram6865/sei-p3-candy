import React, { useState, useEffect } from "react";
import { getCandies } from '../../services/candies'
import handleSearch from '../../utils/search.js'
import "./SearchBar.css";

const SearchBar = (props) => {
  const [queryResults, setQueryResults] = useState([])
  const [inventory, setInventory] = useState([])

  useEffect(() => {
    const fetchCandy = async () => {
      const candy = await getCandies();
      setInventory(candy);
    };
    fetchCandy();    
  }, [])

  

  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => setQueryResults(handleSearch(e.target.value, inventory))}
        name="Search"
        placeholder="How Can Mama Help?"
        type="text"
        autoFocus
      />
    </form>
  )
};

export default SearchBar;