import express from "express";

const router = express.Router();

let posts = [
  { id: 1, title: "First Post", content: "This is my first blog post." },
  { id: 2, title: "Second Post", content: "Learning Express is fun!" }
];

// List all posts
router.get("/posts", (req, res) => {
  res.render("blog", { posts });
});

// Show form to create new post
router.get("/posts/new", (req, res) => {
  res.render("newpost");
});

// Create new post
router.post("/posts", (req, res) => {
  const { title, content } = req.body;

  posts.push({
    id: posts.length + 1,
    title,
    content
  });

  res.redirect("/posts");
});

// View single post
router.get("/posts/:id", (req, res) => {
  const post = posts.find(p => p.id == req.params.id);

  if (!post) {
    return res.send("Post not found");
  }

  res.render("post", { post });
});

export default router;

