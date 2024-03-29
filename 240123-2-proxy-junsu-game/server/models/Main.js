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

db.EnemyDeck = EnemyDeck;

const StoryScript = sequelize.define(
  'storyscript',
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

db.StoryScript = StoryScript;

// Export db, sequelize, and Sequelize
module.exports = { db, sequelize, Sequelize };
