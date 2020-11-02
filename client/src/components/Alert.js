import React from "react";

// Alert component to display when a book has been saved. Takes the book object
function Alert({ link, title }) {
  return (
    // Simple bootstrap message with the book's google store link
    <div className="alert alert-success" role="alert">
      Your book
      {" "}
      <a href={`https://play.google.com/store/books/details?id=${link}`} rel="noreferrer" target="_blank" className="alert-link">{title}</a>
      {" "}
      has been saved! Give it a click if you like.
    </div>
  );
}

// Export component
export default Alert;
