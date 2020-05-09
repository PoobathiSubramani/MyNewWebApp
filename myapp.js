const express = require("express");
const myapp = express();



myapp.get("", (req, res) => {
    res.send({Message:"Hai...how are you?" + MONGODB_CLUSTER});
})

module.exports=myapp;