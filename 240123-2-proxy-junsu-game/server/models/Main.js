const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();

const config = require('../config/config')['development'];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config,
    port: 3306, // MySQL이 다른 포트에서 실행 중이면 이 부분을 수정하세요.
  }
);

const EnemyDeck = sequelize.define('EnemyDeck', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  chapter: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ep: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  data: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

// 모델을 데이터베이스에 동기화 (프로덕션에서는 사용하지 말 것)
sequelize.sync({ force: true }).then(() => {
  console.log('EnemyDeck 모델이 동기화되었습니다.');
});

module.exports = { EnemyDeck, sequelize };
