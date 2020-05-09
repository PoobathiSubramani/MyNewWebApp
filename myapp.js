const express = require("express");
const myapp = express();
const mongoose = require("mongoose");

dbConnectionStatus = "not connected to DB";

dbConnectionString = "mongodb+srv://dbuser:"+process.env.MONGODB_DBPWD+"@boomongocluster-rcqr2.azure.mongodb.net/node-angular?retryWrites=true&w=majority"

mongoose
  .connect(
    //"mongodb+srv://" + process.env.MONGODB_DBUSER + ":" + process.env.MONGODB_DBPWD + "@" + process.env.MONGODB_CLUSTER + "/" + process.env.MONGODB_DBNAME + "?retryWrites=true&w=majority",
    //{useNewUrlParser: true, useUnifiedTopology: true} //added as per deprication warnings
    dbConnectionString,
    {useNewUrlParser: true, useUnifiedTopology: true} //added as per deprication warnings
  )
  .then(() => {
    console.log('Connection to db successful')
    dbConnectionStatus = "connected to DB";
  })
  .catch((err) => {
    console.error("something error..." ,err);
  });

myapp.get("", (req, res) => {
    res.send({Message:"Server initialized and... " + dbConnectionStatus});
})

module.exports=myapp;