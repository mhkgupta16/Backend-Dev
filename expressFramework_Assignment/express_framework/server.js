import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import logger from "./routes/users.js";
import usersRoute from "./routes/users.js";
import contactRoute from "./routes/contact.js";
import galleryRoute from "./routes/gallery.js";
import blogRoute from "./routes/blog.js";



const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(logger);
app.set("view engine", "ejs");
app.use("/contact", contactRoute);


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);



app.set("views", path.join(__dirname, "views"));



app.get("/", (req, res) => {
  res.send("Server Working");
});


app.use("/users", usersRoute);
app.use("/gallery", galleryRoute);
app.use("/blog",blogRoute)
// 404 handler (must be last)
app.use((req, res) => {
  res.status(404).render("404");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

