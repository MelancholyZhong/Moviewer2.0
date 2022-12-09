import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import { MovieContext } from "../context/context";

import "../styles/Rating.css";

const Rating = ({ value, movieId, type }) => {
  const navigate = useNavigate();
  const { isLoggedIn, userId, favList, wishList } = useContext(MovieContext);
  const [disableFav, setDisableFav] = useState(false);
  const [disableWish, setDisableWish] = useState(false);

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
            setDisableFav(true);
          } else {
            setDisableWish(true);
          }
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      navigate("/login");
    }
  };

  const goToMovie = () => {
    navigate(`/movie/${movieId}`);
  };

  useEffect(() => {
    if (isLoggedIn) {
      if (favList.includes(movieId)) {
        setDisableFav(true);
      }
      if (wishList.includes(movieId)) {
        setDisableWish(true);
      }
    }
  }, [favList, wishList]);

  return (
    <div className="rating">
      <h2>Moviewer Index</h2>
      <progress id={movieId} max="10" value={value}></progress>
      <h3>{value}</h3>
      <br />
      <br />
      {type !== "details" && (
        <span>
          <button
            className="iconButton"
            title="Add review"
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
          disabled={disableFav}
          className="iconButton"
          title="Add to Favorites list"
          onClick={() => {
            addToList("fav");
          }}
        >
          <i className={`bi bi-box2-heart${disableFav ? "" : "-fill"} h2`}></i>
        </button>
      </span>
      <span>
        <button
          disabled={disableWish}
          className="iconButton"
          title="Add to To Watch List"
          onClick={() => {
            addToList("wish");
          }}
        >
          <i
            className={`bi bi-calendar-plus${disableWish ? "" : "-fill"} h2`}
          ></i>
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
