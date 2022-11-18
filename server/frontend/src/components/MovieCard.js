import React, { useEffect, useState } from "react";

import "../styles/MovieCard.css";

import Rating from "./Rating";

const MovieCard = ({ movieId }) => {
  const [movie, setMovie] = useState({});

  const fetchMovie = async (movieId) => {
    try {
      const rawRes = await fetch(`/api/movie/${movieId}`);
      const res = await rawRes.json();
      setMovie(res.movie);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMovie(movieId);
  }, [movieId]);

  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img src={movie.PosterLink} className="img-thumbnail" alt="..." />
          </div>
          <div className="col-4">
            <ul className="infoList">
              <li>
                <b>Title: </b> {movie.Name}
              </li>
              <li>
                <b>Year: </b> {movie.DatePublished}
              </li>
              <li>
                <b>Directed by: </b> {movie.Director}
              </li>
              <li>
                <b>Starring: </b>
                {movie.Actors}
              </li>
              <li>
                <b>Description </b> {movie.Description}
              </li>
              <li>
                <b>Genre: </b> {movie.Genres}
              </li>
              <li>
                <b>Duration: </b> {movie.duration}
              </li>
            </ul>
          </div>
          <div className="col-4">
            <Rating value={movie.RatingValue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
