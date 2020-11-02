const mongoose = require("mongoose");

const { Schema } = mongoose;

// Define book details
const bookSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: true,
      require: "Enter book's title",
    },
    subtitle: {
      type: String,
      trim: true,
      required: false,
      default: null,
    },
    author: {
      type: [String],
      trim: true,
      required: false,
      require: "Enter book's author(s)",
      default: ["No author"],
    },
    description: {
      type: String,
      trim: true,
      required: false,
      require: "Enter a book description",
      default: "No description",
    },
    thumbnail: {
      type: String,
      trim: true,
      required: false,
      require: "Enter the book's thumbnail url",
    },
    link: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      require: "Enter the book's url",
    },
  },
);

// Export model
const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
