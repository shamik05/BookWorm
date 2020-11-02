import React from "react";
import API from "../utils/API";

function Result({
  link, title, subtitle, author, thumbnail, description,
}) {
  return (
    <div>
      <h4>{title}</h4>
      <a href={`https://play.google.com/store/books/details?id=${link}`} rel="noreferrer" target="_blank">VIEW</a>
      <button
        type="button"
        onClick={() => API.saveBook({
          link, title, subtitle, author, thumbnail, description,
        })}
      >
        SAVE
      </button>
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
