const { Comment } = require("../models");

const commentData = [
  {
    comment_text: 'Nunc rhoncus dui vel sem.',
    user_id: 1,
    game_id: 1,
  },
  {
    comment_text: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est.',
    user_id: 2,
    game_id: 2,
  },
];

const seedComments = () => Comment.bulkCreate(commentData, {individualHooks: true});

module.exports = seedComments;
