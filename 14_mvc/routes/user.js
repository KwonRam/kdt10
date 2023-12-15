//라우터 연결

const express = require('express');
const router = express.Router();

const controller = require('../controller/Cuser')

//localhost:PORT/user =>기본 경로
//router.get('/', controller.main);
router.get('/', controller.user);

module.exports = router;