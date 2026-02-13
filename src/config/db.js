const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect("mongodb+srv://harry0x:harry0x@cluster0.uzbqnuo.mongodb.net/hort")
  .then(() =>  {
    console.log("DB connected successfully");
  })
}

module.exports = connectDB;