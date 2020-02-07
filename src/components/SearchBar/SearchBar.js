import React from "react";
import { func, string } from "prop-types";

const SearchBar = ({ onChange, placeholder = "Search..." }) => {
  const handleChange = event => {
    event.stopPropagation();
    onChange(event.target.value);
  };
  return (
    <input
      type="text"
      onChange={handleChange}
      placeholder={placeholder}
      style={{ border: "solid black 2px" }}
    />
  );
};

SearchBar.propTypes = {
  onChange: func.isRequired,
  placeholder: string
};

export default SearchBar;
