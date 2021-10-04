const express = require("express");
const router = express.Router();
const voteController = require("../controllers/voteController")
const verifyToekn = require('../middlewares/authToken')

router.post('/create', verifyToekn, voteController.create)

module.exports = router