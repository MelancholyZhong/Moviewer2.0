import React from "react";

import "../styles/SuggestionCard.css";

import Rating from "./Rating";

import PropTypes from "prop-types";

const SuggestionCard = ({ movie }) => {
  return (
    <div className="card text-center suggestion">
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img
              src={movie.PosterLink}
              className="img-thumbnail"
              alt={`Poster for ${movie.Name}`}
            />
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
            <Rating
              value={movie.RatingValue}
              movieId={movie._id}
              type="suggestion"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

SuggestionCard.propTypes = {
  movie: PropTypes.object,
};

export default SuggestionCard;
