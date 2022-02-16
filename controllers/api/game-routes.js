const router = require("express").Router();
const { Game } = require("../../models");

// Route to Create Game
router.post("/", (req, res) => {
  Game.create({
    game_name: req.body.gameName,
    game_type: req.body.gameType,
    game_desc: req.body.gameDesc,
    user_id: req.body.userId,
  })
    .then((gameDbData) => {
      res.json(gameDbData);
    })
    .catch((err) => {
      console.log(err), res.json(err);
    });
});

// Route to Update Game
router.put("/:id", (req, res) => {
  Game.update({
    where: {
      id: req.body.id,
    },
  })
    .then((gameDbData) => {
      if (!gameDbData) {
        res.status(404).json({ message: "Not a valid Game" });
        return;
      }
      res.json(gameDbData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

// Route to Delete Game
router.delete("/:id", (req, res) => {
  Game.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((gameDbData) => {
      if (!gameDbData) {
        res.status(404).json({ message: "Not a valid Game" });
        return;
      }
      res.json(gameDbData);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
