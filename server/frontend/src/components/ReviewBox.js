import React, { useState } from "react";

import "../styles/ReviewBox.css";

const ReviewBox = ({ movieId }) => {
  const [review, setReview] = useState({ movieId, userId: "melancholyzhong" });

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await fetch("/api/review", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(review),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const changeHandler = (content) => {
    const newReview = review;
    newReview.content = content;
    setReview(newReview);
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
          ></textarea>
          <button type="submit" className="btn btn-success">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewBox;
