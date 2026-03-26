import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,   // ✅ fixed
    maxLength: [25, "name must contain 25 char only"]
  },
  email: {
    type: String,
    required: true,   // ✅ fixed
    unique: true,     // ✅ fixed
  },
  password: {
    type: String,
    required: true,   // ✅ fixed
    minLength: [8, "password must contain 8 char only"]
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user"
  }
});

// 🔐 password hashing
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);

  next();
});

const User = mongoose.model("User", userSchema);
export default User;








