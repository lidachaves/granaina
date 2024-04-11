const express = require("express");

router = express.Router();

userController = require("../controller/user.controller");

router.get("/:username", userController.get);

router.post("/", userController.post);

router.put("/:username", userController.put);

router.delete("/:username", userController.destroy);

module.exports = router;
