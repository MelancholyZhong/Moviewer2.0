import React from "react";

import "../styles/ReviewBox.css";

const ReviewBox = () => {
  return (
    <div className="card text-center review-box">
      <div className="card-header">Write a review</div>
      <div className="card-body">
        <textarea
          className="form-control"
          id="movie-review"
          rows="4"
        ></textarea>
        <a href="#" className="btn btn-success">
          Post
        </a>
      </div>
    </div>
  );
};

export default ReviewBox;
