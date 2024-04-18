const { Product } = require("../model/product.model");

async function getAll(req, res) {
  try {
    const productInfo = await Product.find();
    res.send(productInfo);
  } catch (e) {
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function get(req, res) {
  try {
    const { product } = req.params;
    const productInfo = await Product.find({ URLName: product });
    res.send(productInfo);
  } catch (e) {
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function post(req, res) {
  try {
    console.log(Product);
    const { URLName, name, description, price } = req.body;
    const productArray = {
      sellerId: 0,
      URLName: URLName,
      name: name,
      description: description,
      price: price,
    };
    const result = await Product.create(productArray);
    res.send(result);
  } catch (e) {
    console.log(e);
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function put(req, res) {
  try {
    const { product } = req.params;
    const { URLName, name, description, price } = req.body;
    const productInfo = await Product.find({ URLName: product });
    const productArray = {
      URLName: URLName,
      name: name,
      description: description,
      price: price,
    };
    const result = await Product.updateOne(productInfo._id, productArray);
    res.send(result);
  } catch (e) {
    console.log(e);
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function destroy(req, res) {
  try {
    const { product } = req.params;
    const result = await Product.deleteOne({ URLName: product });
    res.send(result);
  } catch (e) {
    console.log(e);
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

module.exports = { getAll, get, post, put, destroy };
