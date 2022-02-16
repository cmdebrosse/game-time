const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Game extends Model {}

Game.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    game_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2, 16],
      },
    },
    game_type: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 20],
      },
    },
    game_desc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [20, 120],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "user",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "game",
  }
);

module.exports = Game;
