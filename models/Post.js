const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
// create our Post model
class Post extends Model {}

Post.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    post_desc: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [5, 40],
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    game_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'game',
          key: 'id'
      },
    }, 
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "post",
  }
);

module.exports = Post;