/* eslint-disable */
/* eslint-disable react/prop-types */
/* eslint-disable array-callback-return */
/* eslint-disable react/destructuring-assignment */
import React from "react";

function Result({title, subtitle, author, thumbnail, description}) {
  return (
    <div>
      <h4>{title}</h4>
      <button type="button">VIEW</button>
      <button type="button">SAVE</button>
      <h5>{subtitle}</h5>
      <h5>Written By: {Object.values(author)}</h5>
      <img src={thumbnail} alt="book cover" />
      <h5>{description}</h5>
    </div>
  );
}

export default Result;
