const User = require("./User");
const Post = require("./Post");
const Game = require("./Game");
const Comment = require("./Comment");

User.hasMany(Game, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Game.belongsTo(User, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Post.belongsTo(Game, {
  foreignKey: "game_id",
  onDelete: "cascade",
});

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Game.hasMany(Post, {
  foreignKey: "game_id",
  onDelete: "cascade",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "SET NULL",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
});
module.exports = { User, Post, Game, Comment };
