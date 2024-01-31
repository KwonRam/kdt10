const axios = require('axios');
const { EnemyDeck, sequelize } = require('../models/Main');
const Main = require('../models/Main');
/*exports.index = (req, res) => {
  res.render('/');
  console.log('render index');
};
exports.deck_setting = (req, res) => {
  res.render('/DeckSetting');
  console.log('render DeckSetting');
};
exports.combat_demo = (req, res) => {
  res.render('/CombatDemo');
  console.log('render CombatDemo');
};*/
exports.battle_start = (req, res) => {
  console.log('req.body', req.body);
  //let characters = req.body;
  //res.render('battlePage', { characters });
};

//const { EnemyDeck } = require('../models'); // Sequelize 모델을 불러옵니다.

exports.enemy_deck = async (req, res) => {
  const { chapter, ep } = req.query;

  console.log('chapter ', chapter, 'ep ', ep);

  try {
    console.log('EnemyDeck find all');
    const result = await EnemyDeck.findAll({
      where: {
        chapter: 0,
        ep: 0,
      },
    });

    // 결과를 클라이언트에게 반환
    res.json(result);
  } catch (err) {
    console.error('Error fetching enemy deck data:', err);
    res.status(500).send('Internal Server Error');
  }
};
