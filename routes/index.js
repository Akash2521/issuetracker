const express = require('express');

const router = express.Router();
const homeController = require('../controllers/home_controller');
const postController = require('../controllers/post_controller');

console.log('router loaded');

router.get('/', homeController.home);
router.use('/users', require('./users'));
router.use('/create_post', require('./create_post'));

// Define the /post route inside the router
router.get('/post', (req, res) => {
  const post = "This is a sample post"; // Assign a valid value to 'post'
  res.render('post', { post: post }); // Render the 'post' template and pass 'post' as a variable
});

router.get('/user profile', (req, res) => {
  const user = req.user; // Get the current user
  res.render('user_profile', { user: user, title: 'User Profile' }); // Pass 'title' as a variable
});


// For any further routes, access them from here
// router.use('/routerName', require('./routerfile));

module.exports = router;
