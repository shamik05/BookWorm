// Import nosql model
const router = require("express").Router();
const Book = require("../models/book.js");

// Define api routes
router.get("/api/books", async (req, res) => {
  console.log("test");
  Book.find({})
    .then((books) => res.json(books));
});

router.post("/api/books", async (req, res) => {
  console.log(req.body);
  Book.create(req.body)
    .then((book) => res.json(book));
});

// Export router functions
module.exports = router;
