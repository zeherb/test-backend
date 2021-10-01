const express = require("express");
const router = express.Router();
const subjectController = require("../controllers/subjectController")

router.post('/create', subjectController.create)
router.put('/update/:subjectId', subjectController.update)
router.get('/getall', subjectController.getAll)
router.get('/get/:subjectId', subjectController.getById)
router.delete('/delete/:subjectId', subjectController.delete)



module.exports = router