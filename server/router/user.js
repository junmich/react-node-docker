const express = require('express');
const User = require('../models/users');
const auth = require('../middleware/auth');
const userController = require('../controllers/users');

const router = express.Router();

router.route('/')
    .post(userController.post);

router.route('/login')
    .post(userController.login);

router.route('/me', auth)
    .get(userController.me);

module.exports = router;
