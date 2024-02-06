const axios = require('axios');
const {
  EnemyDeck,
  StoryScript,
  sequelize,
  db,
  Sequelize,
} = require('../models/Main');
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
  console.log('chapter type ', typeof chapter, 'ep type ', typeof ep);
  console.log('chapter split ', chapter.split(''));
  console.log('chapter split ', chapter.split('chapter'));
  const aTemp = chapter.split('chapter')[1];
  const a = Number(aTemp);
  const b = Number(ep);

  try {
    console.log('EnemyDeck find all');
    const result = await db.EnemyDeck.findAll({
      where: {
        chapter: a,
        ep: b,
      },
    });

    // 결과를 클라이언트에게 반환
    res.json(result);
  } catch (err) {
    console.error('Error fetching enemy deck data:', err);
    res.status(500).send('Internal Server Error');
  }
};

exports.load_story_script = async (req, res) => {
  const { chapter, ep } = req.query;

  console.log('chapter ', chapter, 'ep ', ep);
  console.log('chapter type ', typeof chapter, 'ep type ', typeof ep);
  console.log('chapter split ', chapter.split(''));
  console.log('chapter split ', chapter.split('chapter'));
  const aTemp = chapter.split('chapter')[1];
  const a = Number(aTemp);
  const b = Number(ep);

  try {
    console.log('EnemyDeck find all');
    const result = await db.StoryScript.findAll({
      where: {
        chapter: a,
        ep: b,
      },
    });

    // 결과를 클라이언트에게 반환
    res.json(result);
  } catch (err) {
    console.error('Error fetching story script data:', err);
    res.status(500).send('Internal Server Error');
  }
};
