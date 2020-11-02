import React, { useEffect, useState } from "react";
import API from "../utils/API";
import Result from "../components/Result";

function Saved() {
  const [books, setBooks] = useState([]);

  async function loadBooks() {
    setBooks(await API.getBooks());
    console.log(books);
  }

  useEffect(() => {
    loadBooks();
  }, []);

  return (
    <>
      <h3>Saved Books</h3>
      {books.length ? (books.map((element) => <Result key={element.link} {...element} />)
      ) : (
        <h4>No Saved Books</h4>
      )}
    </>
  );
}

export default Saved;
