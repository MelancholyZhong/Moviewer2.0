import React, { useEffect, useState } from "react";

import "../styles/ReviewBoard.css";

import ReviewCard from "./ReviewCard";
import ReviewBox from "./ReviewBox";

const ReviewBoard = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);

  const fetchReviews = async () => {
    try {
      const rawRes = await fetch(`/api/review/movie/${movieId}`);
      const res = await rawRes.json();
      setReviews(res.review.reverse());
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, [movieId]);

  return (
    <div className="card text-center">
      <div className="card-body">
        <h3 className="card-title">Reviews</h3>
        <ReviewBox movieId={movieId} reviewUpdate={fetchReviews} />
        <div>
          {reviews.map((item) => {
            return (
              <ReviewCard
                key={item._id}
                item={item}
                reviewUpdate={fetchReviews}
              ></ReviewCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReviewBoard;
