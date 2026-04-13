const express = require("express");
const mongoose = require("mongoose");
const User = require("../User");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.get("/add", async (req, res) => {
  await User.create({ name: "Test" });
  res.send("User added");
});

app.get("/delete/:id", async (req, res) => {
  try {
    await User.findOneAndDelete({ _id: req.params.id });
  } catch {
    res.send("Soft deleted");
  }
});

app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

app.listen(5000, () => console.log("Server running"));