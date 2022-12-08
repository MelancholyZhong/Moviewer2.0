import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { MovieContext } from "../context/context";

import "../styles/Rating.css";

const Rating = ({ value, movieId, type }) => {
  const navigate = useNavigate();
  const { isLoggedIn, userId } = useContext(MovieContext);
  const [disableFav, setDisableFav] = useState("-fill");
  const [disableWish, setDisableWish] = useState("-fill");

  const addToList = async (list) => {
    if (isLoggedIn) {
      const body = {
        userId: userId,
        movieId: movieId,
      };
      try {
        const resRaw = await fetch(`/api/list/${list}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        if (resRaw.ok) {
          if (list === "fav") {
            setDisableFav("");
          } else {
            setDisableWish("");
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const goToMovie = () => {
    navigate(`/movie/${movieId}`);
  };

  return (
    <div className="rating">
      <h2>Moviewer Index</h2>
      <progress id="file" max="10" value={value}></progress>
      <h3>{value}</h3>
      <br />
      <br />
      {type !== "details" && (
        <span>
          <button
            className="iconButton"
            onClick={() => {
              goToMovie();
            }}
          >
            <i className="bi bi-chat-left-text-fill h2"></i>
          </button>
        </span>
      )}
      <span>
        <button
          className="iconButton"
          onClick={() => {
            addToList("fav");
          }}
        >
          <i className={`bi bi-box2-heart${disableFav} h2`}></i>
        </button>
      </span>
      <span>
        <button
          className="iconButton"
          onClick={() => {
            addToList("wish");
          }}
        >
          <i className={`bi bi-calendar-plus${disableWish} h2`}></i>
        </button>
      </span>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number,
  movieId: PropTypes.string,
};

export default Rating;
