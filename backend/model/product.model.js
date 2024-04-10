async function getProductByURLName(URLName) {
  return { name: "product 1", description: "Lorem ipsum", price: 20.0 };
}

async function createProduct(sellerId, URLName, name, description, price) {
  return {
    _id: sellerId,
    URLName: URLName,
    name: name,
    description: description,
    price: price,
  };
}

async function updateProduct(id, URLName, name, description, price) {
  return true;
}

async function destroyProduct(id) {
  return true;
}

module.exports = {
  getProductByURLName,
  createProduct,
  updateProduct,
  destroyProduct,
};
