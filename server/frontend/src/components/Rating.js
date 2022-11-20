import React from "react";

import "../styles/Rating.css";

const Rating = ({ value }) => {
  return (
    <div className="rating">
      <h2>Moviewer Index</h2>
      <progress id="file" max="10" value={value}></progress>
      <h3>{value}</h3>
      <br />
      <span>
        <i className="bi bi-box2-heart h2"></i>
      </span>
      <span>
        <i className="bi bi-calendar-plus h2"></i>
      </span>
    </div>
  );
};

export default Rating;
