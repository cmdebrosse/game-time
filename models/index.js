const User = require("./User");
const Game = require("./Game");
const Comment = require("./Comment");

//Game associations
Game.belongsTo(User, {
  foreignKey: "user_id",
});

Game.hasMany(Comment, {
  foreignKey: "game_id",
});

//comment associations
Comment.belongsTo(User, {
  foreignKey: "user_id",
});

Comment.belongsTo(Game, {
  foreignKey: "game_id",
});

//user associations
User.hasMany(Comment, {
  foreignKey: "user_id",
});

User.hasMany(Game, {
  foreignKey: "user_id",
});

module.exports = { User, Game, Comment };
