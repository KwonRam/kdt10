const { Sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const db = {};

const config = require('../config/config')['development'];
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  {
    ...config,
  }
);

const EnemyDeck = sequelize.define(
  'enemydeck',
  {
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
  },
  {
    timestamps: false,
  }
);

// Associate function, if needed, can be added here

// Add the EnemyDeck model to the db object
db.EnemyDeck = EnemyDeck;

// Export db, sequelize, and Sequelize
module.exports = { db, sequelize, Sequelize };
