const express = require('express');
const router = express.Router();
const controller = require('../controller/CbookContent');

// localhost:PORT/bookShelf 기본 경로

router.get('/', controller.main);
router.get('/bookContent', controller.book_content);
// router.get('/bookContent/:title', controller.book_content_detail);
router.post('/bookContent/detail', controller.book_content_detail);

module.exports = router;