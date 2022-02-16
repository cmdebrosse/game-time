const router = require("express").Router();

const gameRoutes = require("./game-routes");
const postRoutes = require("./post-routes");
const userRoutes = require("./user-routes");

router.use("/user", userRoutes);
router.use("/game", gameRoutes);
router.use("/post", postRoutes);

module.exports = router;
