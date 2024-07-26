import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './SearchInput.css'; 

const SearchInput = ({ placeholder, onChange }) => {
  return (
    <div className="search-container">
      <FaSearch className="search-icon" />
      <input
        type="text"
        className="search-input"
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default SearchInput;
