import React from "react";
import { GoSearch } from "react-icons/go";
import "./SearchInput.css";

const SearchInput = () => {
  return (
    <div className="my-3">
      <input
        type="text"
        placeholder="Search..."
        name="searchinput"
        className="search-box-icon1"
        // value={searchInput}
        // onChange={(e) => setSearchInput(e.target.value)}
      />
      <button type="submit" className="search-icon">
        <GoSearch size={22} />
      </button>
    </div>
  );
};

export default SearchInput;
