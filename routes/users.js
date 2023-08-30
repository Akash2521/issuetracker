// routes/users.js
const express = require('express');
const router = express.Router();

const usersController = require('../controllers/users_controller');

express.Router('/profile', usersController.profile);

module.exports = router;
