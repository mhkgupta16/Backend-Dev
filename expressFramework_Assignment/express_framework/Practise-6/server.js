import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import blogRoutes from "./routes/blog.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

app.use("/", blogRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

