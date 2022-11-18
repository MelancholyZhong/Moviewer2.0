import React from "react";

import "../styles/ReviewCard.css";

const ReviewCard = ({ item }) => {
  return (
    <div className="card text-center review-card">
      <div className="card-header">User Name</div>
      <div className="card-body">
        <p className="card-text">{item.content}</p>
        <a href="#" className="btn btn-primary">
          Edit
        </a>
        <a href="#" className="btn btn-danger">
          Delete
        </a>
      </div>
    </div>
  );
};

export default ReviewCard;
