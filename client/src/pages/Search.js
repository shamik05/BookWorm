/* eslint-disable */
import React, { useState } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import Result from "../components/Result";
// import { Input, FormBtn } from "../components/Form";

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
      console.log("search is null");
      return;
    }
    setBooks(await API.searchBooks(searchValue));
  }

  return (
    <>
      <Jumbotron>
        <h1>Google Books Search</h1>
        <h3>Search for and Save Books of Interest</h3>
      </Jumbotron>

      <form>
        <input placeholder="Harry Potter" onChange={handleInputChange} />
        <button type="submit" onClick={handleSubmit}>Search</button>
      </form>

      <h3>Results</h3>
      {books ? (books.map((element) => <Result key={element.id} {...element} />)
      ) : (
        <h4>No results found</h4>
      )}
    </>
  );
}

export default Search;
