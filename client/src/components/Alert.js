import React from "react";

// Alert component to display when a book has been saved. Takes the book object
function Alert({ alert, buttonClick }) {
  return (
    // Simple bootstrap message with the book's google store link
    <div className="alert alert-success" role="alert">
      Your book
      {" "}
      <a href={`https://play.google.com/store/books/details?id=${alert.link}`} rel="noreferrer" target="_blank" className="alert-link">{alert.title}</a>
      {" "}
      has been saved! Give it a click if you like.
      {/* Close button */}
      <button type="button" className="close" aria-label="Close" onClick={buttonClick}>
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  );
}

// Export component
export default Alert;
