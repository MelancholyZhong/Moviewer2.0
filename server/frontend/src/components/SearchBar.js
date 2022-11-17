import React from "react";

import "../styles/SearchBar.css";

const SearchBar = () => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <form action="" method="get">
          <input type="text" id="query_value" name="value" />
          <button type="submit" id="queryBtn" className="btn">
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
