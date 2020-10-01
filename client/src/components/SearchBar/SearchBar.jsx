import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getCandies } from '../../services/candies'
// import handleSearch from '../../utils/search.js'
import "./SearchBar.css";

const SearchBar = (props) => {
  
  const [inventory, setInventory] = useState([])
  const history  = useHistory()

  useEffect(() => {
    const fetchCandy = async () => {
      const candy = await getCandies();
      setInventory(candy);
    };
    fetchCandy();    
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    history.push("/search-candies")
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => {
          props.setQueryResults(props.handleSearch(e.target.value, inventory))
        }}
        name="search"
        placeholder="How Can Mama Help?"
        type="text"
        autoFocus
      />
    </form>
  )
};

export default SearchBar