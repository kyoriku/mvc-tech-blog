const router = require('express').Router();
const { Comment } = require('../../models'); // Adjust the path to your Comment model
const withAuth = require('../../utils/auth');

// Create a comment on a post
router.post('/', withAuth, async (req, res) => {
  try {
    const createdComment = await Comment.create({
      comment_text: req.body.comment_text,
      user_id: req.session.user_id,
      post_id: req.body.post_id
    });

    res.status(201).json(createdComment);
  } catch (err) {
    console.error(err);
    res.status(400).json({ error: 'Unable to create comment' });
  }
});

module.exports = router;
