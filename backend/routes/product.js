const express = require("express");

const { ensureAuth } = require("../middleware/auth");

router = express.Router();

productController = require("../controller/product.controller");

router.get("/", productController.getAll);

router.get("/:product", productController.get);

router.post("/", [ensureAuth], productController.post);

router.patch("/:product", [ensureAuth], productController.patch);

router.delete("/:product", [ensureAuth], productController.destroy);

module.exports = router;
