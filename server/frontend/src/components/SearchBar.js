import React, { useState } from "react";

import "../styles/SearchBar.css";

const SearchBar = ({ cb }) => {
  const [movieName, setMovieName] = useState("");
  const [notFound, setNotFound] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const rawRes = await fetch(`/api/query/${movieName}`);
      const res = await rawRes.json();
      if (res.status === 200) {
        setNotFound(false);
        cb(res.movies);
      } else {
        setNotFound(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const changeHandler = (value) => {
    setNotFound(false);
    setMovieName(value);
  };

  return (
    <div className="card text-center">
      <div className="card-body">
        <form onSubmit={submitHandler}>
          <label>
            <input
              type="text"
              id="query_value"
              name="value"
              onChange={(e) => {
                changeHandler(e.target.value);
              }}
              value={movieName}
            />
          </label>
          <button type="submit" id="queryBtn" className="btn btn-primary">
            Search
          </button>
        </form>
      </div>
      {notFound && (
        <div className="errMsg">
          Sorry, we could not find "{movieName}" for you.
        </div>
      )}
    </div>
  );
};

export default SearchBar;
