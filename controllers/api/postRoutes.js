const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a post
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

// Update a post
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

// Delete a post

module.exports = router;
