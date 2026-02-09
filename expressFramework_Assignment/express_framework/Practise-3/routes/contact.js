import express from "express";

const router = express.Router();

// Show contact form
router.get("/contact", (req, res) => {
  res.render("contact");
});

// Handle form submission
router.post("/contact", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Form Submitted:");
  console.log(name, email, message);

  res.render("thankyou", { name });
});

export default router;

