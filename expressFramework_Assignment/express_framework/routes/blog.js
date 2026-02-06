import express from "express";
const router = express.Router();

// Temporary in-memory storage
let posts = [
  {
    id: 1,
    title: "First Post",
    content: "This is my first blog post."
  }
];

// 📌 List all posts
router.get("/", (req, res) => {
  res.render("blog", { posts });
});

// 📌 Show form to create new post
router.get("/new", (req, res) => {
  res.render("newpost");
});

// 📌 Handle new post submission
router.post("/", (req, res) => {
  const { title, content } = req.body;

  const newPost = {
    id: posts.length + 1,
    title,
    content
  };

  posts.push(newPost);

  res.redirect("/blog");
});

// 📌 View single post
router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const post = posts.find(p => p.id === id);

  if (!post) {
    return res.status(404).render("404");
  }

  res.render("post", { post });
});

export default router;
