const express = require("express");
const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://gladiatorpandey:9JYoQ1bE73eyLgWc@gladiatorpandey.som1zbb.mongodb.net/userappnew`
);
const app = express();
app.use(express.json());

const User = mongoose.model(`Users`, {
  username: String,
  email: String,
  password: String,
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const email = req.body.email;
  const password = req.body.password;

  const userExist = await User.findOne({ email: email });

  if (userExist) {
    return res.status(400).send(`user already exist, please signin !!`);
  }

  const user = new User({
    username: username,
    email: email,
    password: password,
  });
  user.save();
  res.json({
    msg: "sign up successfull",
  });
});

app.post("/signin", async (req, res) => {
  
  const username = req.body.username;
  const password = req.body.password;
  const userExist = await User.findOne({ username: username });

  if (!userExist) {
    return res.status(400).send(`username not found, please signup !!`);
  }
  if (userExist.password !== password) {
    return res.status(401).send(`invalid password`);
  }
  res.json({
    userExist,
  });
});

app.listen(3000);
