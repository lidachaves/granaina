const productModel = require("../model/product.model");

async function get(req, res) {
  try {
    const { product } = req.params;
    const productInfo = await productModel.getProductByURLName(product);
    res.send(productInfo);
  } catch (e) {
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function post(req, res) {
  try {
    const { URLName, name, description, price } = req.body;
    const result = await productModel.createProduct(
      0,
      URLName,
      name,
      description,
      price
    );
    res.send(result);
  } catch (e) {
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function put(req, res) {
  try {
    const { product } = req.params;
    const { URLName, name, description, price } = req.body;
    const productInfo = await productModel.getProductByURLName(product);
    const result = await productModel.updateProduct(
      productInfo._id,
      URLName,
      name,
      description,
      price
    );
    res.send(result);
  } catch (e) {
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

async function destroy(req, res) {
  try {
    const { product } = req.params;
    const productInfo = await productModel.getProductByURLName(product);
    const result = await productModel.destroyProduct(productInfo._id);
    res.send(result);
  } catch (e) {
    res.status(500).send(JSON.stringify({ message: "Internal server error" }));
  }
}

module.exports = { get, post, put, destroy };
