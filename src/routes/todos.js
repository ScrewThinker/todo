const express = require("express");
const router = express.Router();

let todos = [];
let id = 1;

router.post("/", (req, res) => {
  const { title } = req.body;
  const todo = { id: id++, title, completed: false };
  todos.push(todo);
  res.status(201).json(todo);
});

router.get("/", (req, res) => {
  res.json(todos);
});

module.exports = router;