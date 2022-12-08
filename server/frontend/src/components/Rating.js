import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

import "../styles/Rating.css";

const Rating = ({ value, movieId }) => {
  const navigate = useNavigate();
  const [disableFav, setDisableFav] = useState(false);
  const [disableWish, setDisableWish] = useState(false);

  const getUserId = async () => {
    let userId;
    try {
      const rawRes = await fetch("/api/login");
      const res = await rawRes.json();
      if (res.status === 200) {
        userId = res.user;
        return userId;
      } else {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  const addToList = async (list) => {
    const userId = await getUserId();
    if (userId) {
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
            setDisableFav(true);
          } else {
            setDisableWish(true);
          }
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="rating">
      <h2>Moviewer Index</h2>
      <progress id="file" max="10" value={value}></progress>
      <h3>{value}</h3>
      <br />
      <button className="favButton" title="Add movie to Favorite List">
        {!disableFav && (
          <i
            className="bi bi-box2-heart h2"
            onClick={() => {
              addToList("fav");
            }}
          ></i>
        )}
      </button>
      <button className="toWatchButton" title="Add movie to To Watch List">
        {!disableWish && (
          <i
            className="bi bi-calendar-plus h2"
            onClick={() => {
              addToList("wish");
            }}
          ></i>
        )}
      </button>
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number,
  movieId: PropTypes.string,
};

export default Rating;
