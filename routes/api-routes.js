// Import nosql model
const router = require("express").Router();
const Book = require("../models/book.js");

// Define api routes
// Send back all saved books
router.get("/api/books", async (req, res) => {
  Book.find({})
    .then((books) => res.json(books));
});

// Save a book to db
router.post("/api/books", async (req, res) => {
  console.log(req.body);
  Book.create(req.body)
    .then((book) => res.json(book));
});

// Delete a book by its id
router.delete("/api/books/:id", async (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then((book) => res.json(book));
});

// Export router functions
module.exports = router;
