const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Define book details
const bookSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      require: "Enter book's title"
    },
    authors: {
      type: [String],
      trim: true,
      required: true,
      require: "Enter book's author(s)"
    },
    description: {
      type: String,
      trim: true,
      required: true,
      require: "Enter a book description"
    },
    image: {
      type: String,
      trim: true,
      required: true,
      require: "Enter the book's thumbnail url"
    },
    link: {
      type: String,
      trim: true,
      required: true,
      require: "Enter the book's url"
    }
  }
)

// Export model
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;










