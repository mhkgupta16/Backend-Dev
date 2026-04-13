const express = require("express");
const sanitizer = require("./sanitizer");

const app = express();

app.use(express.json());
app.use(sanitizer);

app.post("/data", (req, res) => {
  res.json(req.body);
});

app.listen(5000, () => console.log("Server running"));