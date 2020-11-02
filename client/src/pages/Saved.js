/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Result from "../components/Result";

function Saved() {
  const [books, setBooks] = useState([]);

  useEffect(async () => {
    setBooks(await API.getBooks());
  }, []);

  async function handleDelete(book) {
    await API.deleteBook(book._id);
    setBooks(books.filter((element) => element !== book));
  }

  return (
    <>
      <h3>Saved Books</h3>
      {books.length ? (books.map((element) => (
        <Result
          key={element.link}
          book={element}
          buttonClick={handleDelete}
          type="DELETE"
        />
      ))
      ) : (
        <h4>No Saved Books</h4>
      )}
    </>
  );
}

export default Saved;
