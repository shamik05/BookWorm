import React from "react";
import API from "../utils/API";

function Result({
  id, title, subtitle, author, thumbnail, description,
}) {
  return (
    <div>
      <h4>{title}</h4>
      <button id={id} type="button">VIEW</button>
      <button id={id} type="button" onClick={() => API.saveBook(id)}>SAVE</button>
      {subtitle ? <h5>{subtitle}</h5> : null}
      <h5>
        Written By:
        {Object.values(author)}
      </h5>
      <img src={thumbnail} alt="book cover" />
      <h5>{description}</h5>
    </div>
  );
}

export default Result;
