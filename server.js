const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const notes = [];

app.post("/notes", (req, res) => {
  console.log(req.body);
  notes.push(req.body);
  console.log(notes);
  res.send("created");
});

app.get("/getnotes", (req, res) => {
  res.send(notes);
});
app.delete("/deletenotes/:index", (req, res) => {
  delete notes[req.params.index];
  res.send("deleted");
});

app.patch("/updatenotes/:index", (req, res) => {
  notes[req.params.index].des = req.body.des;
  res.send("updated");
});

app.listen(3000);
