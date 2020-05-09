const express = require("express");
const usersRouter = express.Router();

const signupSchema = require('./signup-schema');

usersRouter.get('',(req, res, next) => {
  var queryUsers = signupSchema.find();
  queryUsers.exec((err, docs) => {
    if(err) {
      console.log('not able to query db');
      res.status(500).json({message:"not able to query db"})
    } else {
      if (docs.length===0) {
        console.log('No users found');
        res.status(200).json({message:"No Users found", users: null})
      } else {
        console.log('response from backend: ', docs);
        res.status(200).json({message: "Users Found", users: docs});
      }
    }
  });
})
module.exports = usersRouter;
