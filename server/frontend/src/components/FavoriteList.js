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
    setMovies((movies) => [...movies, res.movie]);
  };

  useEffect(() => {
    const fetchMovies = () => {
      list.map(async (movieId) => {
        await getMovie(movieId);
      });
    };
    fetchMovies();
  }, [list, removeMovie]);

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

  useEffect(() => {
    const fetchMovies = () => {
      list.map(async (movieId) => {
        await getMovie(movieId);
      });
    };
    fetchMovies();
  }, [list]);

  // Aaron Leung
  return (
    <>
      <div className="movie-row">
        <div className="row">
          {movies.map((movie) => {
            console.log(movie);
            return (
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
                    className="btn btn-success btn-rounded btn-block"
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
  list: PropTypes.array,
  updateList: PropTypes.func,
};

export default FavoriteList;
