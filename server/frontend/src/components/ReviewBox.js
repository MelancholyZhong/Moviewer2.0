import React, { useState } from "react";

import "../styles/ReviewBox.css";

const ReviewBox = ({ movieId, reviewUpdate }) => {
  const defaultReview = { movieId, userId: "melancholyzhong" };
  const [review, setReview] = useState(defaultReview);

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
      changeHandler("");
      reviewUpdate();
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
            value={review.content}
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
