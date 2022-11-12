import React from "react";

import "../styles/ReviewBoard.css";

import ReviewCard from "./ReviewCard";
import ReviewBox from "./ReviewBox";

const ReviewBoard = () => {
  return (
    <div className="card text-center">
      <div className="card-body">
        <h3 className="card-title">Reviews</h3>
        <ReviewBox />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  );
};

export default ReviewBoard;
