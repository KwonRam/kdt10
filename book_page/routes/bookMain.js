const express = require('express');
const router = express.Router();
const controller = require('../controller/CbookMain');

// localhost:PORT/user 기본 경로

router.get('/', controller.main);
router.get('/bookShelf', controller.get_bookshelf);
router.get('/bookContent/:isbn', controller.get_description);

module.exports = router;