const express = require("express");
const app = express();
const todosRouter = require("./routes/todos");
const register = require("./metrics");

app.use(express.json());

app.get("/healthz", (req, res) => {
  const commit = process.env.GIT_SHA || null;
  res.json({ status: "ok", commit });
});

app.use("/api/v1/todos", todosRouter);

app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

module.exports = app;