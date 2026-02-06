import express from "express";

const router = express.Router();

const users = [
  { id: 1, name: "mahak" },
  { id: 2, name: "khushi" },
  { id: 3, name: "pradumn" },
  { id: 4, name: "nandu" }
];

router.get("/", (req, res) => {
  const { name } = req.query;

  let filteredUsers = users;

  if (name) {
    filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(name.toLowerCase())
    );
  }

  res.render("users", {
    users: filteredUsers,
    search: name
  });
});

export default router;
