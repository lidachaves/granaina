const express = require("express");

router = express.Router();

productController = require("../controller/product.controller");

router.get("/", productController.getAll);

router.get("/:product", productController.get);

router.post("/", productController.post);

router.patch("/:product", productController.patch);

router.delete("/:product", productController.destroy);

module.exports = router;
