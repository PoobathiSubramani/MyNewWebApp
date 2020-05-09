const express = require("express");
const myapp = express();

const dbConnectionStatus = "not connected to DB";


const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://" + process.env.MONGODB_DBUSER + ":" + process.env.MONGODB_DBPWD + "@" + process.env.MONGODB_CLUSTER + "/" + process.env.MONGODB_DBNAME + "?retryWrites=true&w=majority",
    {useNewUrlParser: true, useUnifiedTopology: true} //added as per deprication warnings
  )
  .then(() => {
    console.log("Connected to database!");
    dbConnectionStatus = "DB connected"
  })
  .catch(() => {
    console.log("DB Connection failed!");
  })


myapp.get("", (req, res) => {
    res.send({Message:"Server initialized and " + dbConnectionStatus});
})

module.exports=myapp;