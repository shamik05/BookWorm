import React from "react";

function Result({ book, buttonClick, type }) {
  const {
    title, subtitle, link, author, thumbnail, description,
  } = book;

  return (
    <div id="results" className="card-body border">
      <h4 className="card-title">{title}</h4>

      <button type="button" className="btn btn-primary float-right" onClick={() => buttonClick(book)}>{type}</button>
      <a className="btn btn-info float-right" href={`https://play.google.com/store/books/details?id=${link}`} rel="noreferrer" target="_blank">VIEW</a>

      {subtitle ? <h5 className="card-subtitle mb-2 text-muted">{subtitle}</h5> : null}
      <h5 className="card-subtitle mb-2 text-muted">
        Written By:
        {" "}
        {author.join(", ")}
      </h5>

      <div className="resultsBlock">
        <img className="resultsImg" src={thumbnail} alt="book cover" />
        <h5 className="card-text resultsDesc">{description}</h5>
      </div>
    </div>
  );
}

export default Result;
