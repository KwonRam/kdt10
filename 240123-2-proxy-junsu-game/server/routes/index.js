const express = require('express');
const router = express();
const controller = require('../controller/Cmain');
const bodyParser = require('body-parser');

router.use(bodyParser.json());

router.get('/test', (req, res) => {
  res.send({ test: 'this is test!!' });
});

router.get('/enemyDeck', controller.enemy_deck);

router.get('/storyScript', controller.load_story_script);

//router.get('/', controller.index);
//router.get('/DeckSetting', controller.deck_setting);
//router.get('/CombatDemo', controller.combat_demo);
router.post('/BattleStart', controller.battle_start);

module.exports = router;
