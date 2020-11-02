import React from "react";
import { useLocation } from "react-router-dom";
import API from "../utils/API";

function Result({
  link, title, subtitle, author, thumbnail, description, _id,
}) {
  function checkLocation() {
    const location = useLocation().pathname;
    if (location === "/saved") {
      return <button type="button" onClick={() => API.deleteBook(_id).then(() => window.location.reload())}>DELETE</button>;
    }
    return (
      <button
        type="button"
        onClick={() => API.saveBook({
          link, title, subtitle, author, thumbnail, description,
        })}
      >
        SAVE
      </button>
    );
  }
  return (
    <div>
      <h4>{title}</h4>
      <a href={`https://play.google.com/store/books/details?id=${link}`} rel="noreferrer" target="_blank">VIEW</a>

      {checkLocation()}
      {subtitle ? <h5>{subtitle}</h5> : null}

      <h5>
        Written By:
        {" "}
        {author.join(", ")}
      </h5>
      <img src={thumbnail} alt="book cover" />
      <h5>{description}</h5>
    </div>
  );
}

export default Result;
