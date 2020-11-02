import React from "react";

// Main result container to display search results and saved books
function Result({ book, buttonClick, type }) {
  // Destructure our book object
  const {
    title, subtitle, link, author, thumbnail, description,
  } = book;

  return (
    // Display book title
    <div id="results" className="card-body border">
      <h4 className="card-title">{title}</h4>

      {/* Display save or delete button depending on type and click handler passed */}
      <button type="button" className="btn btn-primary float-right" onClick={() => buttonClick(book)}>{type}</button>

      {/* Anchor element to visit the book's store page */}
      <a className="btn btn-info float-right" href={`https://play.google.com/store/books/details?id=${link}`} rel="noreferrer" target="_blank">VIEW</a>

      {/* If there is a subtitle then display it */}
      {subtitle ? <h5 className="card-subtitle mb-2 text-muted">{subtitle}</h5> : null}

      {/* Display all authors from the array */}
      <h5 className="card-subtitle mb-2 text-muted">
        Written By:
        {" "}
        {author.join(", ")}
      </h5>

      {/* Display book image and description */}
      <div className="resultsBlock">
        <img className="resultsImg" src={thumbnail} alt="book cover" />
        <h5 className="card-text resultsDesc">{description}</h5>
      </div>
    </div>
  );
}

// Export component
export default Result;
