const express = require("express");
const myapp = express();



myapp.get("", (req, res) => {
    res.send({Message:"Hai...how are you?" + process.env.TEST});
})

module.exports=myapp;