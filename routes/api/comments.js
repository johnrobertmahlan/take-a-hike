const express = require('express');
const router = express.Router();
const commentsCtrl = require('../../controllers/comments');

router.post('/api/hikes/:id/comments', commentsCtrl.createComment);

module.exports = router;