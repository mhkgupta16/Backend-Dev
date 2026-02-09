import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import contactRoutes from "./routes/contact.js";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({ extended: true }));

// Use contact routes
app.use("/", contactRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});


