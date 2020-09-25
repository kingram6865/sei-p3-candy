import React from "react";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <form className="search-form" onSubmit={(e) => props.onSubmit(e)}>
      <input
        className="searh-input"
        value={props.value}
        onChange={(e) => props.onChange(e)}
        name="Search"
        placeholder="How Can Mama Help?"
        type="text"
        autoFocus
      />
    </form>
  )
};

export default SearchBar;