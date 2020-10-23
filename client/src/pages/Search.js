import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import { Input, FormBtn } from "../components/Form";
import API from "../utils/API";

function Saved() {
  const [book, setBooks] = useState([])
  const [searchValue, setSearchValue] = useState(null)

  function handleInputChange(event) {
    const { value } = event.target;
    setSearchValue(value);
    console.log(searchValue);
  };

  function handleFormSubmit(event) {
    event.preventDefault();
    if (searchValue) {
      API.searchBooks(searchValue)
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  };

  return (
    <>
    <Jumbotron>
      <h1>Google Books Search</h1>
      <h3>Search for and Save Books of Interest</h3>  
    </Jumbotron>
    <form>
      <Input
        onChange={handleInputChange}
        name="search"
        placeholder="Search (required)"
      />
      <FormBtn
        disabled={!searchValue}
        onClick={handleFormSubmit}
      >
        Search
      </FormBtn>
    </form>
    </>
  )
}

export default Saved;