const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  isDeleted: {
    type: Boolean,
    default: false
  }
});

/* Soft delete */
userSchema.pre("findOneAndDelete", async function (next) {
  const doc = await this.model.findOne(this.getQuery());
  if (doc) {
    doc.isDeleted = true;
    await doc.save();
  }
  next(new Error("Soft delete applied"));
});

/* Filter deleted */
userSchema.pre(/^find/, function (next) {
  this.where({ isDeleted: false });
  next();
});

module.exports = mongoose.model("User", userSchema);