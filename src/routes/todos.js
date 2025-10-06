const express = require("express");
const router = express.Router();

let todos = [];
let id = 1;

// Middleware to log incoming requests
router.use((req, res, next) => {
  console.log(JSON.stringify({
    message: "Incoming request",
    method: req.method,
    path: req.path,
    timestamp: new Date().toISOString()
  }));
  next();
});

// POST /api/v1/todos - Create a new todo
router.post("/", (req, res) => {
  const { title } = req.body;
  const todo = { id: id++, title, completed: false };
  todos.push(todo);

  // Structured logging for created todo
  console.log(JSON.stringify({
    message: "Todo created",
    todo,
    timestamp: new Date().toISOString()
  }));

  res.status(201).json(todo);
});

// GET /api/v1/todos - List all todos
router.get("/", (req, res) => {
  // Structured logging for listing todos
  console.log(JSON.stringify({
    message: "Todos listed",
    count: todos.length,
    timestamp: new Date().toISOString()
  }));

  res.json(todos);
});

module.exports = router;