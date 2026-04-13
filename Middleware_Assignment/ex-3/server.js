const express = require("express");
const mongoose = require("mongoose");
const User = require("../../middleware-Assignmnet/ex-1/ex-3/User");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/test");

app.get("/login", async (req, res) => {
  const user = new User({
    name: "Mahak",
    loginTime: new Date()
  });
  await user.save();
  res.send("Login tracked");
});

app.listen(5000, () => console.log("Server running"));