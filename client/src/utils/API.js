import axios from "axios";

// Define google book api constants
const APIKEY = process.env.REACT_APP_KEY;
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const maxResults = "&maxResults=20";

export default {
  // Get all books
  async getBooks() {
    try {
      const response = await axios.get("/api/books");
      return response.data;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  // Search google api with search value
  async searchBooks(search) {
    try {
      const response = await axios.get(`${BASEURL}${search}&key=${APIKEY}${maxResults}`);
      // If no results are found then return false
      if (response.data.totalItems === 0) {
        return false;
      }

      // Get current list of saved books
      const savedBooks = await this.getBooks();

      // Filter search results for any books saved and map select data into a new object
      const books = response.data.items
        .filter((item) => !savedBooks
          .some((e) => e.link === item.id))
        .map((element) => ({
          link: element.id,
          title: element.volumeInfo.title,
          subtitle: element.volumeInfo.subtitle,
          author: element.volumeInfo.authors,
          thumbnail: element.volumeInfo.imageLinks.thumbnail,
          description: element.volumeInfo.description,
        }));
      // console.log(books);
      return books;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  // Saves a book to the database
  async saveBook(book) {
    try {
      const response = await axios.post("/api/books", (book));
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
  // Deletes the book with the given id
  async deleteBook(id) {
    try {
      const response = await axios.delete(`/api/books/${id}`);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
};
