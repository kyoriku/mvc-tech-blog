const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

// Get all posts for dashboard
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({
      where: { 
        user_id: req.session.user_id 
      },
      include: [
        { 
          model: User, 
          attributes: ['username'] 
        }
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('dashboard', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render the form to create a new post
router.get('/new', withAuth, (req, res) => {
  res.render('new-post', {
    logged_in: req.session.logged_in,
  });
});


module.exports = router;