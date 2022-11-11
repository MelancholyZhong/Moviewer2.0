import React from "react";

import "../styles/Rating.css";

const Rating = () => {
  return (
    <div className="rating">
      <h2>Moviewer Index</h2>
      <progress id="file" max="10" value="9.2"></progress>
      <h3>9.2</h3>
    </div>
  );
};

export default Rating;
