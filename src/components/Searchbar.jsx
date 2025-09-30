import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm, handleSearch, isLoading }) => (
  <form className="search-bar" onSubmit={handleSearch}>
    <input
      type="text"
      placeholder="Search for a city..."
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
    <button type="submit" disabled={isLoading}>
      {isLoading ? "Loading..." : "Search"}
    </button>
  </form>
);

export default SearchBar;

