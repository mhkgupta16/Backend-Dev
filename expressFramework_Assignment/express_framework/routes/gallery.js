import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg"
  ];

  res.render("gallery", { images });
});

export default router;
