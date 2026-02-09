import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

const images = ["image1.jpg", "image2.jpg", "image3.jpg"];

app.get("/gallery", (req, res) => {
  res.render("gallery", { images });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

