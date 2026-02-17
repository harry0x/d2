// server cerate or config karna h

const express = require("express");
const noteModel = require("./models/notes.model");

const app = express();

app.use(express.json());


///create notes
app.post("/notes", async (req, res) => {
  const { title, description } = req.body;

  const note = await noteModel.create({ title, description });
  res.status(201).json({
    message: "Note created successfully",
    note,
  });
});

// get notes
app.get('/notes', async(req,res) => {
   const notes = await noteModel.find()

   res.status(200).json({
    message: "Noted fetched Successfully",
    notes
   })
})

// delete nots 

app.delete('/notes/:id' , async (req,res) => {
    const id = req.params.id
    await noteModel.findByIdAndDelete(id)
    res.status(200).json({
        message:"Note deleted Successfully",
    })
})

// update notes 
app.patch('/notes/:id', async (req,res) => {
    const id = req.params.id
    const{description} = req.body
    await noteModel.findByIdAndUpdate(id, {description})

    res.status(200).json({
        message: "Note updated Successfully"
    })
})

module.exports = app;
