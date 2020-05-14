const express = require("express");
const app = express();

const monckUserData = [
  {name:'Mark'},
  {name:'Jill'}
]

app.get("/user", function (req, res) {
  res.json({
    success: true,
    message: "successfully got user. Nice!",
    users: monckUserData
  })
})

app.get("/user/:id", function (req, res) {
  console.log(req.params.id)
  res.json({
    success: true,
    message: "got one user",
    user: req.params.id
  })
})

app.listen(8000, function (){
  console.log("server is running")
})