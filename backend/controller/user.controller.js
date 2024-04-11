const { User } = require("../model/user.model");

async function get(req, res) {
  try {
    const { username } = req.params;
    const userInfo = await User.find({ username: username });
    res.send(userInfo);
  } catch (e) {
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function post(req, res) {
  try {
    const { username, name, email, password } = req.body;
    const userArray = {
      username: username,
      name: name,
      email: email,
      password: password,
    };
    const result = await User.create(userArray);
    res.send(result);
  } catch (e) {
    console.log(e);
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function put(req, res) {
  try {
    const { product } = req.params;
    const { username, name, email, password } = req.body;
    const userInfo = await User.find({ URLName: product });
    const userArray = {
      username: username,
      name: name,
      email: email,
      password: password,
    };
    const result = await User.updateOne(userInfo._id, userArray);
    res.send(result);
  } catch (e) {
    console.log(e);
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function destroy(req, res) {
  try {
    const { username } = req.params;
    const result = await User.deleteOne({ username: username });
    res.send(result);
  } catch (e) {
    console.log(e);
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

module.exports = { get, post, put, destroy };
