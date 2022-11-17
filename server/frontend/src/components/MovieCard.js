import React from "react";

import "../styles/MovieCard.css";

import Rating from "./Rating";

const MovieCard = () => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <img
              src="https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/05/21/09/the-shining-2.jpg?quality=75&width=1200&auto=webp"
              className="img-thumbnail"
              alt="..."
            />
          </div>
          <div className="col-4">
            <ul className="infoList">
              <li>
                <b>Title: </b> The Shining
              </li>
              <li>
                <b>Year: </b> 1980
              </li>
              <li>
                <b>Directed by: </b> Stanley Kubrick
              </li>
              <li>
                <b>Starring: </b>
                Jack Nicholson, Shelley Duvall, Scatman Crothers, Danny Lloyd
              </li>
              <li>
                <b>Country/Region: </b> United States, United Kingdom
              </li>
              <li>
                <b>Genre: </b> psychological horror
              </li>
            </ul>
          </div>
          <div className="col-4">
            <Rating />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
