const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/post", (req, res) => {
  res.send("hey");
});

app.listen(3000);
