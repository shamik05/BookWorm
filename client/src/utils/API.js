import axios from "axios";
const APIKEY = "&key=AIzaSyA4RTlFF84bIDuiCZ1AFQxXcR3dF_1fv2o"
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="
const startIndex = "&startIndex=";
const maxResults = "&maxResults=11";

export default {
  // Get all books
  getBooks: function() {
    
  },
  searchBooks: function(search) {
    return axios.get(BASEURL+search+APIKEY+maxResults);
  }
}

// GET https://books.googleapis.com/books/v1/volumes?key=[YOUR_API_KEY] HTTP/1.1
