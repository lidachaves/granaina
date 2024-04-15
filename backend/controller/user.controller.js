const { json } = require("express");

const bcryptjs = require("bcryptjs");
const User = require("../model/user.model");
const jwt = require("../services/jwt");

async function get(req, res) {
  try {
    const { usernameParameter } = req.params;
    const { username, name } = await User.find({ username: usernameParameter });
    res.send({ username, name });
  } catch (e) {
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function login(req, res) {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) res.send(JSON.stringify({ msg: "Incorrect user or password" }));
    const correctPassword = await bcryptjs.compare(password, user.password);
    if (!correctPassword) {
      res.send({ msg: "Incorrect user or password" });
      return;
    }
    res.status(200).send({ token: jwt.createToken(user, "24h") });
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
}

async function register(req, res) {
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

async function put(req, res) {
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

module.exports = { get, login, register, put, destroy };
