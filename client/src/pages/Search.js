import React, { useState } from "react";
import io from "socket.io-client";
import API from "../utils/API";
import Result from "../components/Result";

const socket = io();

function Search() {
  const [books, setBooks] = useState();
  const [searchValue, setSearchValue] = useState();

  function handleInputChange(event) {
    const { value } = event.target;
    setSearchValue(value);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!searchValue) {
      console.log("Search value is empty");
      return;
    }
    setBooks(await API.searchBooks(searchValue));
  }
  async function handleSave(book) {
    await API.saveBook(book);
    setBooks(books.filter((element) => element !== book));
    socket.emit("saved", book.title);
  }

  function checkBooks() {
    if (books === undefined) {
      return <h4 className="searchBegin">Search For A Book To Begin!</h4>;
    }
    if (books === false) {
      return <h4 className="searchBegin">No Results Found</h4>;
    }
    return books.map((element) => (
      <Result key={element.link} book={element} buttonClick={handleSave} type="SAVE" />
    ));
  }

  return (
    <>
      <form className="form-group">
        <h2>
          <i className="fas fa-book" />
          Book Search
        </h2>
        <input className="form-control" placeholder="Type book details..." onChange={handleInputChange} />
        <button className="btn btn-success" type="submit" onClick={handleSubmit}>Search</button>
      </form>

      <h3>Results</h3>
      {checkBooks()}
    </>
  );
}

export default Search;
