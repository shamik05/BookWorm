import React, { useState, useEffect } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Input, FormBtn } from "../components/Search/Form";
import Results from "../components/Results";
import Container from "../components/Search/Container";

function Search() {
  const [book, setBooks] = useState([])
  const [searchValue, setSearchValue] = useState(null)

  function handleInputChange(event) {
    const { value } = event.target;
    setSearchValue(value);
  };


   
              function handleFormSubmit(event) {
    event.preventDefault();
    if (searchValue) {
      API.searchBooks(searchValue)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
    }
  };

  return (
    <>
    <Jumbotron>
      <h1>Google Books Search</h1>
      <h3>Search for and Save Books of Interest</h3>  
    </Jumbotron>

    

    <Results />
    </>
  )
}

export default Search;