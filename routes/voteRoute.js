const express = require("express");
const router = express.Router();
const voteController = require("../controllers/voteController")

router.post('/create', voteController.create)

module.exports = router