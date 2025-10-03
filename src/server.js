const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

// routes
app.get("/healthz", (req, res) => {
  res.json({ status: "ok", commit: process.env.GIT_SHA || null });
});

let todos = [];
app.post("/api/v1/todos", (req, res) => {
  const { title } = req.body;
  if (!title) {
    return res.status(400).json({ error: "Title is required" });
  }
  const todo = { id: todos.length + 1, title, done: false };
  todos.push(todo);
  res.status(201).json(todo);
});

app.get("/api/v1/todos", (req, res) => {
  res.json(todos);
});

module.exports = app;
