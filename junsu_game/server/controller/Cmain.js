const axios = require('axios');
const { Sequelize, MyDeckforBattle } = require('../models/Main');
const Main = require('../models/Main');
exports.index = (req, res) => {
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
};
/*exports.battle_start = (req, res) => {
  res.render('/BattleStart');
  console.log('render BattleStart');
};*/
