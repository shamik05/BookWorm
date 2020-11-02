import axios from "axios";

const APIKEY = process.env.REACT_APP_KEY;
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const startIndex = "&startIndex=";
const maxResults = "&maxResults=10";

export default {
  // Get all books
  async getBooks() {
    try {
      const response = await axios.get("/api/books");
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async searchBooks(search) {
    try {
      const response = await axios.get(`${BASEURL}${search}&key=${APIKEY}${maxResults}`);
      if (response.data.totalItems === 0) {
        return false;
      }
      const books = response.data.items.map((element) => ({
        link: element.id,
        title: element.volumeInfo.title,
        subtitle: element.volumeInfo.subtitle,
        author: element.volumeInfo.authors,
        thumbnail: element.volumeInfo.imageLinks.thumbnail,
        description: element.volumeInfo.description,
      }));
      return books;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  async saveBook(book) {
    event.preventDefault();
    console.log(book);
    try {
      const response = await axios.post("/api/books", (book));
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};

// GET https://books.googleapis.com/books/v1/volumes?key=[YOUR_API_KEY] HTTP/1.1
