const express = require("express");
const app = express();

app.use(express.json());

/* -------------------- DATA -------------------- */
let books = [
  { id: 1, title: "Book A", author: "John", year: 2020 },
  { id: 2, title: "Book B", author: "Alice", year: 2021 },
  { id: 3, title: "Node Guide", author: "John", year: 2022 }
];

let authors = [
  { id: 1, name: "John" },
  { id: 2, name: "Alice" }
];

/* -------------------- MIDDLEWARE -------------------- */
function validateYear(req, res, next) {
  const { year } = req.body;

  if (!year || isNaN(year) || year < 1900 || year > 2100) {
    return res.status(400).send("Invalid year");
  }

  next();
}

/* -------------------- BOOK ROUTES -------------------- */

// GET (filter + pagination)
app.get("/books", (req, res) => {
  let result = books;

  const { author, year, page = 1, limit = 2 } = req.query;

  // Filtering
  if (author) result = result.filter(b => b.author === author);
  if (year) result = result.filter(b => b.year == year);

  // Pagination
  const start = (page - 1) * limit;
  const end = start + Number(limit);

  const paginated = result.slice(start, end);

  res.json({
    total: result.length,
    page: Number(page),
    data: paginated
  });
});

// SEARCH by title
app.get("/books/search", (req, res) => {
  const { title } = req.query;

  const result = books.filter(b =>
    b.title.toLowerCase().includes(title.toLowerCase())
  );

  res.json(result);
});

// CREATE book (with validation)
app.post("/books", validateYear, (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.json(newBook);
});

/* -------------------- AUTHOR ROUTES -------------------- */

// CREATE
app.post("/authors", (req, res) => {
  const newAuthor = { id: authors.length + 1, ...req.body };
  authors.push(newAuthor);
  res.json(newAuthor);
});

// READ ALL
app.get("/authors", (req, res) => {
  res.json(authors);
});

// READ ONE
app.get("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);
  if (!author) return res.send("Not found");
  res.json(author);
});

// UPDATE
app.put("/authors/:id", (req, res) => {
  const author = authors.find(a => a.id == req.params.id);

  if (!author) return res.send("Not found");

  author.name = req.body.name;
  res.json(author);
});

// DELETE
app.delete("/authors/:id", (req, res) => {
  authors = authors.filter(a => a.id != req.params.id);
  res.send("Deleted");
});

/* -------------------- SERVER -------------------- */
app.listen(3000, () => {
  console.log("Server running on port 3000");
});