import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";

import "../styles/ReviewCard.css";

const ReviewCard = () => {
  return (
    <div className="card text-center review-card">
      <div className="card-header">User Name</div>
      <div className="card-body">
        <p className="card-text">
          <LoremIpsum avgSentencesPerParagraph={10} />
        </p>
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
