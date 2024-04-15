const express = require("express");

router = express.Router();

productController = require("../controller/product.controller");

router.get("/:product", productController.get);

router.post("/", productController.post);

router.put("/:product", productController.put);

router.delete("/:product", productController.destroy);

module.exports = router;
