import React from "react";

function Result({ book, buttonClick, type }) {
  const {
    title, subtitle, link, author, thumbnail, description,
  } = book;

  return (
    <div>
      <h4>{title}</h4>
      <a href={`https://play.google.com/store/books/details?id=${link}`} rel="noreferrer" target="_blank">VIEW</a>

      <button type="button" className={type.toLowerCase()} onClick={() => buttonClick(book)}>{type}</button>
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
