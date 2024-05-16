const express = require("express");

const { ensureAuth } = require("../middleware/auth");

router = express.Router();

userController = require("../controller/user.controller");

router.get("/", [ensureAuth], userController.get);

router.post("/signup", userController.signup);

router.post("/login", userController.login);

router.patch("/", [ensureAuth], userController.patch);

router.delete("/", [ensureAuth], userController.destroy);

module.exports = router;
