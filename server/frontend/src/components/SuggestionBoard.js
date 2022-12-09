import React, { useEffect, useState } from "react";

import "../styles/ReviewBoard.css";

import SuggestionCard from "../components/SuggestionCard";

const SuggestionBoard = () => {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    try {
      const rawRes = await fetch("/api/query/tops");
      const res = await rawRes.json();
      setMovies(res.tops);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="card text-center">
      <div className="card-body">
        <h2 className="card-title">Top 10 Movies</h2>
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

export default SuggestionBoard;
