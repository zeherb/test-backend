const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController")
const verifyToekn = require('../middlewares/authToken')

router.get('/get/:id', verifyToekn, userController.getUserById)
// reset all users voting number every day at 00:00

module.exports = router