const express = require('express');
const router = express.Router();
const calcLogController = require('../controller/calcLogController');
const verifyToken = require("../middleware/verifyToken");

router.post('/add', verifyToken, calcLogController.add )
router.get('/get', verifyToken, calcLogController.get )

module.exports = router;
