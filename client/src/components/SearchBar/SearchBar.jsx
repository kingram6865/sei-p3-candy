import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
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

  const handleSubmit = event => {
    event.preventDefault()
    if (queryResults.length) {
      return <Redirect to={`/candies/search-results/${queryResults}`} />
    }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
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