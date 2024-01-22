const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.index);
router.get('/DeckSetting', controller.deck_setting);
router.get('/CombatDemo', controller.combat_demo);
//router.get('/BattleStart', controller.battle_start);

module.exports = router;
