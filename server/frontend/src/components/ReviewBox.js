import React, { useState } from "react";

import "../styles/ReviewBox.css";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const ReviewBox = ({ movieId, reviewUpdate, userId }) => {
  const navigate = useNavigate();
  const defaultReview = { movieId, userId: userId };
  const [content, setContent] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!userId) {
      navigate("/login");
    } else if (content === "") {
      return;
    }
    const review = defaultReview;
    review.content = content;
    try {
      await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
      setContent("");
      reviewUpdate();
    } catch (err) {
      console.log(err);
    }
  };

  const changeHandler = (content) => {
    if (!userId) {
      navigate("/login");
    } else {
      setContent(content);
    }
  };

  return (
    <div className="card text-center review-box">
      <div className="card-header">Write a review</div>
      <div className="card-body">
        <form onSubmit={submitHandler}>
          <textarea
            className="form-control"
            id="movie-review"
            rows="4"
            onChange={(e) => {
              changeHandler(e.target.value);
            }}
            value={content}
          ></textarea>
          <button type="submit" className="btn btn-success">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

ReviewBox.propTypes = {
  movieId: PropTypes.string,
  reviewUpdate: PropTypes.func,
};

export default ReviewBox;
