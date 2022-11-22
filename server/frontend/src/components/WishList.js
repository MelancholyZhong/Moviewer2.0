import React, { useState, useEffect, useContext } from "react";
import { MovieContext } from "../context/context";
import "../styles/WishList.css";

// return will return a list of movies
// movie.Poster comes from the movie object
const FavoriteList = ({ list }) => {
  const [movies, setMovies] = useState([]);
  const { userId } = useContext(MovieContext);

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

export default FavoriteList;
