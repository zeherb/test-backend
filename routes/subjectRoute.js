const express = require("express");
const router = express.Router();
const subjectController = require("../controllers/subjectController")
const verifyToekn = require('../middlewares/authToken')

router.post('/create', verifyToekn, subjectController.create)
router.put('/update/:subjectId', verifyToekn, subjectController.update)
router.get('/getall', verifyToekn, subjectController.getAll)
router.get('/get/:subjectId', verifyToekn, subjectController.getById)
router.delete('/delete/:subjectId', verifyToekn, subjectController.delete)



module.exports = router