const router = require("express").Router();
const { Game , User, Comment } = require("../../models");

// GET /api/users
router.get("/", (req, res) => {
  Game.findAll({
    attributes: [
      'id',
      'game_name',
      'game_type',
      'game_desc',
      'created_at'
    ],
    order: [['created_at', 'DESC']], 
    include: [
      {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id','game_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});
router.get("/:id", (req, res) => {
  Game.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'game_name',
      'game_type',
      'game_desc',
      'created_at'
    ],
    order: [['created_at', 'DESC']], 
    include: [
      {
          model: Comment,
          attributes: ['id', 'comment_text', 'user_id','game_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
      },
      {
        model: User,
        attributes: ['username']
      }
    ]
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
