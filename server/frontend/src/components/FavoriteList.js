import React, { useEffect, useState } from "react";
import "../styles/FavoriteList.css";

// return will return a list of movies
// movie.Poster comes from the movie object

const FavoriteList = ({ list }) => {
  const [movies, setMovies] = useState([]);


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
                  <button className="btn btn-success btn-rounded btn-block">
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

export default FavoriteList;
