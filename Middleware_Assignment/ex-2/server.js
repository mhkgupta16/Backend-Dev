const express = require("express");
const jwt = require("jsonwebtoken");
const mfa = require("./middleware_Assignment/mfaMiddleware");
const otpStore = require("./otpStore");

const app = express();

app.get("/login", (req, res) => {
  const userId = "123";

  const token = jwt.sign({ id: userId }, "secret");
  const otp = "111111";

  otpStore.setOTP(userId, otp);

  res.json({ token, otp });
});

app.get("/secure", mfa, (req, res) => {
  res.send("Protected Route");
});

app.listen(5000, () => console.log("Server running"));