const Sequelize = require('sequelize');

const config = require('../config/config')['development'];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//const MyDeckforBattle = require('./DeckforBattle')(sequelize, Sequelize);
/* {
      charNo: 1,
      id: 0,
      charName: '성준수',
      HPcurrent: 23,
      HPstat: 23,
      physicResist: 3,
      magicResist: 3,
      attack: 8,
      speed: 6,
      accuracy: 0.9,
      evasion: 0.2,
      critical: 0.4,
      critDamageRate: 2.0,
      isMagic: false,
      isAdjutant: false,
      isEnemy: false,
      isSixMan: false,
      onBattlefield: false,
      passiveSkill: '엘리트 출신',
      activeSkillFirst: '할 때는 한다',
      activeSkillSecond: '착각하지 마',
      ultSkill: '부숴버려',
      buff: [
        {
          buffNumber: 0,
          buffType: '',
          buffFrom: '',
          buffStat: '',
          buffAmmount: 0,
          buffDuration: 0,
        },
      ],
      debuff: [
        {
          debuffNumber: 0,
          debuffType: '',
          debuffFrom: '',
          debuffStat: '',
          debuffAmmount: 0,
          debuffDuration: 0,
        },
      ],
      lovePointCurrent: 0,
      lovePointStack: 0,
      Line: '',
      Position: 0,
      img: 'junsu_sd_1',
    },*/

db.MyDeckforBattle = MyDeckforBattle;
db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
