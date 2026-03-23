const express = require("express");
const app = express();
const Book = require("./model/bookSchema");
require("./db");

app.use(express.json());


// 1. Add New Book
app.post("/add-book", async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.send("Book Added");
});


// 2. Find Books by Author
app.get("/books/:author", async (req, res) => {
  const books = await Book.find({ author: req.params.author });
  res.json(books);
});


// 3. Update Book Availability
app.put("/update/:title", async (req, res) => {
  await Book.updateOne(
    { title: req.params.title },
    { $set: { available: false } }
  );
  res.send("Book Updated");
});


// 4. Track Borrowed Books
app.put("/borrow/:title", async (req, res) => {
  await Book.updateOne(
    { title: req.params.title },
    { $set: { borrowedBy: req.body.user } }
  );
  res.send("Borrow Info Updated");
});


app.listen(3000, () => {
  console.log("Server running on port 3000");
});