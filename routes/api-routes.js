// Import nosql model
const router = require("express").Router();
const Book = require("../models/book.js");

// Define api routes
router.get("/api/books", (req, res) => {
  Book.find({})
    .then(res.json(true));
});

// Export router functions
module.exports = router;
