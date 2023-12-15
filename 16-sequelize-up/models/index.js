const Sequelize = require('sequelize');
const config = require(__dirname + '/../config/config.json')['developement'];
const db = {};

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
);

const Player = require('./Player')(sequelize, Sequelize);
const Profile = require('./Profile')(sequelize, Sequelize);

Player.hasOne(Profile, {
    foreignKey: 'player_id',
    souceKey: 'player_id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
})
