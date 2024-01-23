const DeckforBattleModel = (sequelize, DataTypes) => {
  const DeckforBattle = sequelize.define(
    'DeckforBattle',
    {
      char_No: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      char_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      char_name: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      char_HPcurrent: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      char_HPstat: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      char_physicResist: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      char_magicResist: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      char_attack: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      char_speed: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      char_accuracy: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      char_evasion: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      char_critical: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      char_critDamageRate: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      char_isMagic: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      char_isAdjutant: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      char_isEnemy: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      char_isSixMan: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      char_onBattlefield: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      char_passiveSkill: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      char_activeSkillFirst: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      char_activeSkillSecond: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      char_ultSkill: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      char_lovePointCurrent: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      char_Line: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      char_Position: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      char_img: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return DeckforBattle;
};

module.exports = DeckforBattleModel;
