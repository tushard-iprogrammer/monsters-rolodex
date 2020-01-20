import React from "react";
import "./search-box.style.css";

export const SearchBox = ({ placeholderTitle, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={`Search ${placeholderTitle}...`}
    onChange={handleChange}
  />
);
