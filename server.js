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

app.listen(8000, function (){
  console.log("server is running")
})