//라우터 연결

const express = require('express');
const router = express.Router();

const controller = require('../controller/Cmain')

//localhost:PORT/user =>기본 경로
//router.get('/', controller.main);
router.get('/', controller.main);
router.get('/index', controller.index);

module.exports = router;