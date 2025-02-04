/**
* Post management routes handling creation, updates, and deletion
* of posts with user authentication
*/
const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create new post for authenticated user
router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(201).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

// Update existing post if user is the author
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [updatedRows] = await Post.update(
      { ...req.body },
      {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      }
    );

    if (updatedRows === 0) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Post updated successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete existing post if user is the author
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const deletedRows = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (deletedRows === 0) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json({ message: 'Post deleted successfully!' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;