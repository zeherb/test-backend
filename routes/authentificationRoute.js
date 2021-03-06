const express = require("express");
const router = express.Router();
const authController = require("../controllers/authentificationController")

// login route

router.post("/login", authController.login);

// register route
router.post("/register", authController.register);

module.exports = router;