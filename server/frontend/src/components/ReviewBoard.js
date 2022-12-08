import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types";

import "../styles/ReviewBoard.css";

import ReviewCard from "./ReviewCard";
import ReviewBox from "./ReviewBox";
import { MovieContext } from "../context/context";

const ReviewBoard = ({ movieId }) => {
  const [reviews, setReviews] = useState([]);
  const { userId } = useContext(MovieContext);

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
        <ReviewBox
          movieId={movieId}
          reviewUpdate={fetchReviews}
          userId={userId}
        />
        <div>
          {reviews.map((item) => {
            return (
              <ReviewCard
                key={item._id}
                item={item}
                reviewUpdate={fetchReviews}
                userId={userId}
              ></ReviewCard>
            );
          })}
        </div>
      </div>
    </div>
  );
};

ReviewBoard.propTypes = {
  movieId: PropTypes.string,
};

export default ReviewBoard;
