const otpMap = new Map();

module.exports = {
  setOTP: (userId, otp) => {
    otpMap.set(userId, otp);
  },
  getOTP: (userId) => otpMap.get(userId)
};