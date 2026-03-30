import User from "../model/UserSchema.js";

export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // ✅ validation
    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required"
      });
    }

    // ✅ check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // ✅ create user
    const newUser = await User.create({
      name,
      email,
      password
    });

    res.status(201).json({
      message: "User created successfully",
      newUser
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An error occurred",
      error: error.message
    });
  }
};







