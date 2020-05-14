const express = require("express");
const app = express();

const monckUserData = [{ name: "Mark" }, { name: "Jill" }];

app.get("/user", function (req, res) {
	res.json({
		success: true,
		message: "successfully got user. Nice!",
		users: monckUserData,
	});
});

app.get("/user/:id", function (req, res) {
	console.log(req.params.id);
	res.json({
		success: true,
		message: "got one user",
		user: req.params.id,
	});
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  const monckUsername = "billyTheKid";
  const monckPassword = "superSecret"
  
  if (username === monckUsername && password === monckPassword) {
    res.json({
      success: true,
      message: "password and username match! ",
      token: "encrypted token goes here"
    })
  } else {
    res.json({
      success: false,
      message: "password and username do not match"
    })
  }
});

app.listen(8000, function () {
	console.log("server is running");
});
