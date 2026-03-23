const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  borrowedBy: {
    type: String,
    default: null
  }
});

module.exports = mongoose.model("Book", bookSchema);