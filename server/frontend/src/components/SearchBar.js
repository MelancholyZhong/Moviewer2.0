import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/SearchBar.css";

const SearchBar = () => {
  const navigate = useNavigate();

  const [movieName, setMovieName] = useState("");
  const [notFound, setNotFound] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const rawRes = await fetch(`/api/query/${movieName}`);
      const res = await rawRes.json();
      console.log(res.movie);
      if (res.status === 200) {
        setNotFound(false);
        navigate(`/movie/${res.movie._id}`);
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
          <input
            type="text"
            id="query_value"
            name="value"
            onChange={(e) => {
              changeHandler(e.target.value);
            }}
            value={movieName}
          />
          <button type="submit" id="queryBtn" className="btn">
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
