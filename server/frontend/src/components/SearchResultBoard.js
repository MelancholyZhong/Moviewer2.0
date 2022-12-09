import React from "react";

import "../styles/ReviewBoard.css";

import SuggestionCard from "./SuggestionCard";

const SearchResultBoard = ({ movies }) => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h3 className="card-title">Results</h3>
        <div>
          {movies.map((item) => {
            return (
              <SuggestionCard key={item._id} movie={item}></SuggestionCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

SearchResultBoard.propTypes = {};
export default SearchResultBoard;
