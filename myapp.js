const express = require("express");
const myapp = express();
const mongoose = require("mongoose");

dbConnectionStatus = "not connected to DB";

dbConnectionString = "mongodb+srv://"+
process.env.MONGODB_DBUSER+":"+
process.env.MONGODB_DBPWD+"@"+
process.env.MONGODB_CLUSTER+"/"+
process.env.MONGODB_DBNAME+"?"+"retryWrites=true&w=majority";
//"@boomongocluster-rcqr2.azure.mongodb.net/node-angular?retryWrites=true&w=majority"

mongoose
  .connect(
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

app.use( (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*"); //to allow cross-origin requests
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader( //to allow different methods
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

module.exports=myapp;