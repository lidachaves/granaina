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
    const sellerInfo = await User.findOne({
      _id: productInfo.sellerId,
    });
    if (!sellerInfo) {
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    productInfo = {
      ...productInfo._doc,
      sellerInfo: { name: sellerInfo.name, username: sellerInfo.username },
    };
    res.status(200).json(productInfo);
  } catch (e) {
    console.log(e);
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

module.exports = { getAll, get };
