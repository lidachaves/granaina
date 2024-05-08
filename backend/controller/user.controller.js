const { json } = require("express");

const bcryptjs = require("bcryptjs");
const User = require("../model/user.model");
const jwt = require("../services/jwt");

async function get(req, res) {
  try {
    const { username: usernameParameter } = req.params;
    const user = await User.findOne({ username: usernameParameter });
    if (!user) {
      res.status(404).json({ error: "The user does not exist" });
      return;
    }
    res.status(200).send({ username: user.username, name: user.name });
  } catch (e) {
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ error: "Missing parameters" });
      return;
    }
    const user = await User.findOne({ email });
    if (!user) {
      res.status(400).json({ error: "Incorrect email or password" });
      return;
    }
    const correctPassword = await bcryptjs.compare(password, user.password);
    if (!correctPassword) {
      res.status(400).json({ error: "Incorrect email or password" });
      return;
    }
    res.status(200).json({ token: jwt.createToken(user, "24h") });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
}

async function signup(req, res) {
  try {
    const { username, name, email, password } = req.body;
    if (!username || !name || !email || !password) {
      res.send(JSON.stringify({ message: "Missing parameters" }));
      return;
    }
    const usernameInfo = await User.find({ username: username });
    console.log(usernameInfo.length);
    if (usernameInfo.length) {
      res.send(JSON.stringify({ message: "The username is already taken." }));
      return;
    }
    const salt = bcryptjs.genSaltSync(10);
    const passwordHash = await bcryptjs.hash(password, salt);

    const userArray = {
      username: username,
      name: name,
      email: email,
      password: passwordHash,
    };
    const result = await User.create(userArray);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function patch(req, res) {
  try {
    const { username, name, email } = req.body;
    const user = req.user;
    const userArray = {
      username: username,
      name: name,
      email: email,
      password: user.password,
    };
    const result = await User.updateOne({ _id: user.id }, userArray);
    res.send(result);
  } catch (e) {
    console.log(e);
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function destroy(req, res) {
  try {
    const user = req.user;
    const result = await User.deleteOne({ _id: user.id });
    res.send(result);
  } catch (e) {
    console.log(e);
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

module.exports = { get, login, signup, patch, destroy };
