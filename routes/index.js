const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const meetController = require('../controllers/meetController');
const authController = require('../controllers/authController');

router.post('/register', userController.validateRegister, userController.signup, authController.login);

router.post('/postmeet', meetController.postMeet);
router.post('/login', authController.login);

module.exports = router;
