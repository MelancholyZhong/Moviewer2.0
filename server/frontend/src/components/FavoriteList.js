// Aaron Leung and Yao Zhong
import React, { useEffect, useState, useContext } from "react";
import { MovieContext } from "../context/context";
import "../styles/FavoriteList.css";
import PropTypes from "prop-types";

const FavoriteList = ({ list, updateList }) => {
  const [movies, setMovies] = useState([]);
  const { userId } = useContext(MovieContext);

  // Yao
  const getMovie = async (movieId) => {
    const rawRes = await fetch(`/api/movie/${movieId}`);
    const res = await rawRes.json();
    return res.movie;
  };

  useEffect(() => {
    const fetchMovies = async () => {
      const promises = await Promise.all(
        list.map((movieId) => {
          return getMovie(movieId);
        })
      );
      setMovies(promises);
    };
    fetchMovies();
  }, [list]);

  // Aaron Leung
  const removeMovie = async (movieId) => {
    const data = { userId: userId, movieId: movieId };
    try {
      await fetch("/api/list/removeFav", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      updateList();
    } catch (err) {
      console.log(err);
    }
  };

  // Aaron Leung
  return (
    <>
      <div className="movie-row">
        <div className="row">
          {movies.map((movie) => {
            return (
              <div className="column" key={movie._id}>
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
                    className="btn btn-danger btn-rounded btn-block"
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

FavoriteList.propTypes = {
  list: PropTypes.array.isRequired,
  updateList: PropTypes.func.isRequired,
};

export default FavoriteList;


// Can consider put different components into different file, with independent css file.
