import React, { useState, useEffect } from "react";
import "../styles/FavoriteList.css";

// return will return a list of movies
// movie.Poster comes from the movie object

const FavoriteList = ({ list }) => {
  const [movies, setMovies] = useState([]);


  const getMovies = () => {
    const rawMovies = [];
    list.map(async (movieId) => {
      try {
        const rawRes = await fetch(`/api/movie/${movieId}`);
        const res = await rawRes.json();
        rawMovies.push(res);
      } catch (err) {
        console.log(err);
      }
    });
    setMovies(rawMovies);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <div className="movie-row">
        <div className="row">
          {movies.map((movie) => (
            // <div className="column">
            //   <img
            //     src={movie.PosterLink}
            //     className="posterSize"
            //     alt="image of movie"
            //   ></img>
            //   <div className="button-align">
            //     <button className="btn btn-success btn-rounded btn-block">
            //       Remove
            //     </button>
            //   </div>
            // </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FavoriteList;
