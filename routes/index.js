var express = require('express');
var router = express.Router();
const userModel = require("./users");
const postModel = require("./posts");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/createuser',async function(req,res)
{
 let createduser = await userModel.create({
  username: "krishna",
  password:"krish",
  posts: [],
  email: "krish@gmail.com",
  fullName: "krishna madhukar lavhare",
})
res.send(createduser);
});

module.exports = router;
