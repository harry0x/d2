//  server ko start karna or db se connect karna h

require('dotenv').config();
const app = require("./src/app");
const connectDB = require("./src/config/db");

connectDB();

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});






















// const express = require("express");
// const app = express();

// app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });

// const notes = [];

// app.post("/notes", (req, res) => {
//   notes.push(req.body);
//   res.status(201).json({
//     message: "Note Created",
//   });
// });

// app.get("/getnotes", (req, res) => {
//   // res.send(notes);
//   res.status(200).json({
//     notes: notes,
//   });
// });
// app.delete("/deletenotes/:index", (req, res) => {
//   delete notes[req.params.index];
//   // res.send("deleted");
//   // message not showing
//   res.status(204).json({
//     message: "Note Deleted ",
//   });
// });

// app.patch("/updatenotes/:index", (req, res) => {
//   notes[req.params.index].des = req.body.des;
//   // res.send("updated");
//   res.status(200).json({
//     message: "updated",
//   });
// });

// app.listen(3000);
