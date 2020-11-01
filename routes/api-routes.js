// Import nosql model
const router = require("express").Router();
const Book = require("../models/book.js");

// Define api routes
router.get("/api/books", async (req, res) => {
  Book.find({})
    .then(res.json(true));
});

router.post("/api/books", async (req, res) => {
  console.log(req.body);
  Book.create(req.body)
    .then((book) => res.json(book));
});

// Export router functions
module.exports = router;
