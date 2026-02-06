import express from "express";
const router = express.Router();

// GET → show form
router.get("/", (req, res) => {
  res.render("contact");
});

// POST → handle form submission
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  console.log("Form Data:", req.body);

  res.render("thankyou", { name });
});

export default router;
