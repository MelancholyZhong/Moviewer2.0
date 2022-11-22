// Aaron Leung 
import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../context/context";
import "../styles/WishList.css";

import PropTypes from "prop-types";

const WishList = ({ list }) => {
  const [movies, setMovies] = useState([]);
  const { userId } = useContext(MovieContext);

  // Yao
  const getMovie = async (movieId) => {
    const rawRes = await fetch(`/api/movie/${movieId}`);
    const res = await rawRes.json();
    setMovies((movies) => [...movies, res.movie]);
  };

  useEffect(() => {
    const fetchMovies = () => {
      list.map(async (movieId) => {
        await getMovie(movieId);
      });
    };
    fetchMovies();
  }, [list]);

  // Aaron Leung
  const removeMovie = async (movieId) => {
    const data = { userId: userId, movieId: movieId };
    try {
      await fetch("/api/list/removeWish", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
    } catch (err) {
      console.log(err);
    }
    return;
  };

  // Aaron Leung
  return (
    <>
      <div className="movie-row">
        <div className="row">
          {movies.map((movie) => (
            <div className="column">
              <img
                src={movie.PosterLink}
                className="posterSize"
                alt="image of movie"
              ></img>
              <div className="button-align">
                <button
                  onClick={() => {
                    removeMovie(movie._id);
                  }}
                  className="btn btn-primary btn-rounded btn-block"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

WishList.propTypes = {
  list: PropTypes.array,
};

export default WishList;
