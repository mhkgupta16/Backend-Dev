import express from "express";
const router = express.Router();

const users = [
  { id: 1, name: "amit" },
  { id: 2, name: "sumit" },
  { id: 3, name: "arpit" },
  { id: 4, name: "mahak" }
];

// Route with query filter
router.get("/users", (req, res) => {
  const { name } = req.query;

  let filteredUsers = users;

  if (name) {
    filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  res.render("users", { filteredUsers });
});

export default router;

