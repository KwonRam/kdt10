const axios = require('axios');
const { Sequelize, EnemyDeck } = require('../models/Main');
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

exports.enemy_deck = (req, res) => {
  const { chapter, ep } = req.query;

  // MySQL 쿼리
  const sql = 'SELECT * FROM EnemyDeck WHERE chapter = ? AND ep = ?';
  EnemyDeck.query(sql, [chapter, ep], (err, result) => {
    if (err) {
      console.error('Error fetching EnemyDeckData:', err);
      res.status(500).send('Internal Server Error');
    } else {
      res.json(result);
    }
  });
};
