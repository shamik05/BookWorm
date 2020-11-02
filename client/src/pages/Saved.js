/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Result from "../components/Result";

function Saved() {
  // Setting our component's initial state
  const [books, setBooks] = useState([]);

  // Load all books and store them with setBooks
  useEffect(async () => {
    setBooks(await API.getBooks());
  }, []);

  async function handleDelete(book) {
    await API.deleteBook(book._id);
    setBooks(books.filter((element) => element !== book));
  }

  // Renders our saved page. Similar idea as the search page
  return (
    <>
      <h3>
        <i className="fas fa-download" />
        Saved Books
      </h3>
      {/* If there are books to display then create a result component for each item */}
      {books.length ? (books.map((element) => (
        <Result
          key={element.link}
          book={element}
          buttonClick={handleDelete}
          type="DELETE"
        />
      ))
      ) : (
        <h4 className="searchBegin">No Saved Books</h4>
      )}
    </>
  );
}

// Export component
export default Saved;
