const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require("../utils/auth");

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
    // res.status(200).json(posts); // For Insomnia testing purposes

    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/post/:id", withAuth, async (req, res) => { // Temporarily bypassing withAuth for testing
  router.get("/post/:id", async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["username"]
        },
        {
          model: Comment,
          include: [
            { model: User, 
              attributes: ["username"] }],
        },
      ],
    });
    const post = postData.get({ plain: true });
    // res.status(200).json(post); // For Insomnia testing purposes

    res.render("post", {
      ...post,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
