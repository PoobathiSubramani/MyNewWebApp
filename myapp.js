const express = require("express");
const myapp = express();


const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://" + process.env.MONGODB_DBUSER + ":" + process.env.MONGODB_DBPWD + "@" + process.env.MONGODB_CLUSTER + "/" + process.env.MONGODB_DBNAME + "?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true} //added as per deprication warnings
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("DB Connection failed!");
  })


myapp.get("", (req, res) => {
    res.send({Message:"Hai...how are you?" + process.env.MONGODB_CLUSTER});
})

module.exports=myapp;