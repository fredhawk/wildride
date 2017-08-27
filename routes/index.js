const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const jobController = require('../controllers/jobController');
const authController = require('../controllers/authController');

router.post('/register', userController.validateRegister, userController.signup, authController.login);

router.post('/postjob', jobController.postJob);
router.post('/login', authController.login);

module.exports = router;
