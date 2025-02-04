/**
* Comment management routes handling creation, updates, and deletion
* of comments with user authentication
*/
const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Create new comment for authenticated user
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

// Update existing comment if user is the author
router.put('/:id', withAuth, async (req, res) => {
  const commentId = parseInt(req.params.id);

  try {
    const updatedComment = await Comment.findByPk(commentId);

    if (!updatedComment) {
      res.status(404).json({ error: 'Comment not found' });
      return;
    }

    updatedComment.comment_text = req.body.comment_text;
    await updatedComment.save();

    res.status(200).json({ message: 'Comment updated successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Delete existing comment if user is the author
router.delete('/:id', withAuth, async (req, res) => {
  const commentId = parseInt(req.params.id);

  try {
    const deletedComment = await Comment.findByPk(commentId);

    if (!deletedComment) {
      res.status(404).json({ error: 'Comment not found' });
      return;
    }

    await deletedComment.destroy();

    res.status(200).json({ message: 'Comment deleted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

module.exports = router;