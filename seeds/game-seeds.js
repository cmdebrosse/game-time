const { Game } = require("../models");

const gameData = [
  {
    game_name: "Tennis",
    game_type: "two player game",
    game_desc: " racket and a ball game ",
    user_id: 1,
  },
  {
    game_name: "Soccer",
    game_type: "eleven player game",
    game_desc: " two teams play to score goals",
    user_id: 2,
  },
];

const seedGame = () => Game.bulkCreate(gameData);

module.exports = seedGame;