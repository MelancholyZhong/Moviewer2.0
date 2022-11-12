import React from "react";

import "../styles/Rating.css";

const Rating = () => {
  return (
    <div className="rating">
      <h2>Moviewer Index</h2>
      <progress id="file" max="10" value="9.2"></progress>
      <h3>9.2</h3>
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
