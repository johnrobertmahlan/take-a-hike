const express = require('express');
const router = express.Router();
const hikesCtrl = require('../../controllers/hikes');

router.post('/', hikesCtrl.createHike);

module.exports = router;