const router = require("express").Router();
const { Game } = require("../../models");

// GET /api/users
router.get("/", (req, res) => {
  Game.findAll({
    
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Route to Create Game
router.post("/", (req, res) => {
  Game.create({
    game_name: req.body.game_name,
    game_type: req.body.game_type,
    game_desc: req.body.game_desc,
    user_id: req.body.user_id,
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
