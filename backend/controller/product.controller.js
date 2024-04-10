const productModel = require("../model/product.model");

async function get(req, res) {
  const { product } = req.params;
  const productInfo = await productModel.getProductByURLName(product);
  res.send(productInfo);
}

async function post(req, res) {
  const { URLName, name, description, price } = req.body;
  const result = await productModel.createProduct(
    0,
    URLName,
    name,
    description,
    price
  );
  res.send(result);
}

async function put(req, res) {
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
}

async function destroy(req, res) {
  const { product } = req.params;
  const productInfo = await productModel.getProductByURLName(product);
  const result = await productModel.destroyProduct(productInfo._id);
  res.send(result);
}

module.exports = { get, post, put, destroy };
