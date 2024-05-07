const { Product } = require("../model/product.model");
const User = require("../model/user.model");

async function getAll(req, res) {
  try {
    const productInfo = await Product.find();
    res.status(200).send(productInfo);
  } catch (e) {
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function get(req, res) {
  try {
    const { product } = req.params;
    let productInfo = await Product.findOne({ URLName: product });
    if (productInfo.sellerId) {
      const sellerInfo = await User.findOne({
        _id: productInfo.sellerId,
      });
      console.log(productInfo);
      if (sellerInfo) {
        productInfo = {
          ...productInfo._doc,
          sellerInfo: { name: sellerInfo.name, username: sellerInfo.username },
        };
      } else {
        throw new Error("Error");
      }
    } else {
      console.log("Error");
    }
    console.log(productInfo);
    res.status(200).json(productInfo);
  } catch (e) {
    console.log(e);
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function post(req, res) {
  try {
    const { URLName, name, description, price } = req.body;
    console.log(req.user);
    if (!URLName || !name || !description || !price) {
      res.status(400).json({ msg: "Missing parameters" });
      return;
    }
    const productArray = {
      sellerId: req.user.id,
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

async function patch(req, res) {
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

module.exports = { getAll, get, post, patch, destroy };
