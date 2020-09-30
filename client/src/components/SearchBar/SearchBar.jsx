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

  useEffect(() => {
    // const redirect = () => {
    //   console.log(queryResults)
    //   return <Redirect to={`/candies/}`} />
    // }

    // if (queryResults){
    //   redirect()
    // }
    console.log(`[SearchBar: useEffect] ${queryResults.length}`)
  },[queryResults])



  const handleSubmit = event => {
    event.preventDefault()
    console.log(`[SearchBar Submit]: ${event.target.value}`)
    // if (queryResults.length) {
    //   return <Redirect to={`/candies/search-results/${queryResults}`} />
    // } else {
    //   console.log(`[SearchBar]: ${event.target.value}`)
    // }
  }

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        className="search-input"
        value={props.value}
        onChange={(e) => {
          setQueryResults(handleSearch(e.target.value, inventory))
          // console.log(handleSearch(e.target.value, inventory))
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