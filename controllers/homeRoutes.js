/**
* Home routes handling the public-facing pages including homepage,
* individual post views, and login functionality
*/
const router = require('express').Router();
const { User, Post, Comment } = require('../models');

// Render homepage with all posts and their authors
router.get('/', async (req, res) => {
  try {
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['username'],
        },
      ],
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    res.render('homepage', {
      posts,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Render individual post page with comments and author details  
router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['username']
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ['username']
            }
          ],
        },
      ],
    });
    const post = postData.get({ plain: true });

    res.render('post', {
      ...post,
      user_id: req.session.user_id,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Handle login page access with redirect for logged in users
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/dashboard');
    return;
  }

  res.render('login');
});

module.exports = router;