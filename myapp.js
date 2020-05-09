const express = require("express");
const myapp = express();

const dbConnectionStatus = "not connected to DB";


const mongoose = require("mongoose");

dbConnectionString = "mongodb+srv://dbuser:dbpwd09@boomongocluster-rcqr2.azure.mongodb.net/node-angular?retryWrites=true&w=majority"

mongoose
  .connect(
    //"mongodb+srv://" + process.env.MONGODB_DBUSER + ":" + process.env.MONGODB_DBPWD + "@" + process.env.MONGODB_CLUSTER + "/" + process.env.MONGODB_DBNAME + "?retryWrites=true&w=majority",
    //{useNewUrlParser: true, useUnifiedTopology: true} //added as per deprication warnings
    dbConnectionString,
    {useNewUrlParser: true, useUnifiedTopology: true} //added as per deprication warnings
  )
  try{
    await mongoose.connect(dbConnectionString, { useNewUrlParser: true, useUnifiedTopology: true });
  } 
  catch (error) {
    handleError(error);
  }

myapp.get("", (req, res) => {
    res.send({Message:"Server initialized and... " + dbConnectionStatus});
})

module.exports=myapp;