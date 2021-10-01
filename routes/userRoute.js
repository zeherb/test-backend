const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")

router.get('/get/:id', userController.getUserById)
// reset all users voting number every day at 00:00

module.exports = router