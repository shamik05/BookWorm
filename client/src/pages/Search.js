import React, { useState } from "react";
import io from "socket.io-client";
import API from "../utils/API";
import Result from "../components/Result";

const socket = io();

function Search() {
  // Track search value and search results
  const [books, setBooks] = useState();
  const [searchValue, setSearchValue] = useState();

  // Tracking value of input box
  function handleInputChange(event) {
    const { value } = event.target;
    setSearchValue(value);
  }

  // Handles form submission
  async function handleSubmit(event) {
    event.preventDefault();
    // Check if search value is null
    if (!searchValue) {
      console.log("Search value is empty");
      return;
    }
    // Set books to the search results returned
    setBooks(await API.searchBooks(searchValue));
  }

  // Handles saving a book to database
  async function handleSave(book) {
    await API.saveBook(book);
    // Change the book state so it rerenders and selected book is removed
    setBooks(books.filter((element) => element !== book));
    // Emit a message to all other connected clients what book was saved
    socket.emit("saved", book);
  }

  // Check the status of books state
  function checkBooks() {
    // On first page load, it will be null
    if (books === undefined) {
      return <h4 className="searchBegin">Search For A Book To Begin!</h4>;
    }
    // If no search results are found
    if (books === false) {
      return <h4 className="searchBegin">No Results Found</h4>;
    }
    // If results are found then create a result component for each item
    // Pass in the search item and click handler for saving
    return books.map((element) => (
      <Result key={element.link} book={element} buttonClick={handleSave} type="SAVE" />
    ));
  }

  // Render our search page
  return (
    <>
      {/* Display a form with input box and submit button */}
      <form className="form-group">
        <h2>
          <i className="fas fa-book" />
          Book Search
        </h2>
        <input className="form-control" placeholder="Type book details..." onChange={handleInputChange} />
        <button className="btn btn-success" type="submit" onClick={handleSubmit}>Search</button>
      </form>

      {/* Results portion of the page rendered after using the google books api */}
      <h3>Results</h3>
      {checkBooks()}
    </>
  );
}

// Export component
export default Search;
