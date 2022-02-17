const router = require("express").Router();
const { User, Post, Game } = require("../models");

//Get login page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("login");
});

//Get signup page
router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

// //Get all users
// router.get("/profile/", (req, res) => {
//   User.findAll({
//     exclude: ["password"],
//   })
//     .then((usersData) => {
//       res.json(usersData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.json(err);
//     });
// });

// //Route to get back a User profile
// router.get("/profile/:id", (req, res) => {
//   User.findOne({
//     where: {
//       id: req.params.id,
//     },
//     attributes: ["profile_name", "profile_bio"],
//     include: [
//       {
//         model: Post,
//         attributes: ["post_desc"],
//       },
//       {
//         model: Game,
//         attributes: ["game_name", "game_type", "game_desc"],
//       },
//     ],
//   })
//     .then((profileData) => {
//       res.json(profileData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.json(err);
//     });
// });

// //Route to get all Post
// router.get("/", (req, res) => {
//   Post.findAll({
//     attributes: ["post_desc"],
//     include: [
//       {
//         model: User,
//         attributes: ["profile_name"],
//       },
//     ],
//   })
//     .then((postdata) => {
//       const post = postdata.map((post) => {
//         post.get({ plain: true });
//       });
//       res.render("homepage", {
//         post,
//         loggedIn: req.session.loggedIn,
//       });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.json(err);
//     });
// });

// // Route to get single Post
// router.get("/post/:id", (req, res) => {
//   Post.findOne({
//     where: {
//       id: req.params.id,
//     },
//     attributes: ["post_desc"],
//     include: [
//       {
//         model: User,
//         attributes: ["profile_name"],
//       },
//     ],
//   })
//     .then((singlePostData) => {
//       res.json(singlePostData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.json(err);
//     });
// });

// module.exports = router;
