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

//------------------------------------


// User.hasMany(Game, {
//   foreignKey: "user_id"
// });

// Game.belongsTo(User, {
//   foreignKey: "user_id"
// });

// User.hasMany(Game, {
//   foreignKey: 'user_id'
// });

// Game.hasMany(User, {
//   foreignKey: "game_id"
// });

// Comment.belongsTo(User, {
//   foreignKey: 'user_id'
// });

// Comment.belongsTo(Game, {
//   foreignKey: 'game_id'
// });

// User.hasMany(Comment, {
//   foreignKey: 'user_id'
// });

// Game.hasMany(Comment, {
//   foreignKey: 'game_id'
// });

// Post.belongsTo(Game, {
//   foreignKey: "game_id",
//   onDelete: "cascade",
// });

// User.hasMany(Post, {
//   foreignKey: "user_id",
//   onDelete: "cascade",
// });

// Game.hasMany(Post, {
//   foreignKey: "game_id",
//   onDelete: "cascade",
// });

// Post.hasMany(Comment, {
//   foreignKey: "post_id",
//   onDelete: "SET NULL",
// });

// Comment.belongsTo(Post, {
//   foreignKey: "post_id",
// });
module.exports = { User, Game, Comment };
