const router = require("express").Router();

const userRoutes = require("./user-routes");
const gameRoutes = require("./game-routes");
const commentRoutes = require('./comment-routes');


router.use("/user", userRoutes);
router.use("/game", gameRoutes);
router.use('/comments', commentRoutes);


module.exports = router;
