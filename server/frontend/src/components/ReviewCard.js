import React from "react";

import "../styles/ReviewCard.css";

const ReviewCard = ({ item, reviewUpdate }) => {
  const editHandler = () => {};

  const deleteHandler = async () => {
    try {
      await fetch(`/api/review/${item._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      reviewUpdate();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="card text-center review-card">
      <div className="card-header">User Name</div>
      <div className="card-body">
        <p className="card-text">{item.content}</p>
        <button onClick={editHandler} className="btn btn-primary">
          Edit
        </button>
        <button onClick={deleteHandler} className="btn btn-danger">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
