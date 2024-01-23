const express = require('express');
const router = express();
const controller = require('../controller/Cmain');

router.get('/', controller.index);
router.get('/DeckSetting', controller.deck_setting);
router.get('/CombatDemo', controller.combat_demo);
//router.get('/BattleStart', controller.battle_start);*/
router.get('/test', (req, res) => {
  res.send({ test: 'this is test!!' });
});

router.get('/', controller.index);
router.get('/DeckSetting', controller.deck_setting);
router.get('/CombatDemo', controller.combat_demo);
router.get('/BattleStart', controller.battle_start);

module.exports = router;
