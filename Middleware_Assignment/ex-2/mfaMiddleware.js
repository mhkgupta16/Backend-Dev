const jwt = require("jsonwebtoken");
const otpStore = require("../../rough/ex-2/otpStore");

const mfa = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  const otp = req.headers["x-otp"];

  if (!token || !otp) {
    return res.status(401).send("Missing Token or OTP");
  }

  try {
    const decoded = jwt.verify(token, "secret");

    if (otpStore.getOTP(decoded.id) !== otp) {
      return res.status(401).send("Invalid OTP");
    }

    next();
  } catch {
    res.status(401).send("Invalid Token");
  }
};

module.exports = mfa;