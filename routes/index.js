const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const meetController = require('../controllers/meetController');
const authController = require('../controllers/authController');

// Get all meetups from server
router.get('/meets', meetController.getMeets);
// Get one meetup from server
router.get('/meet/:id', meetController.getSingleMeet);

router.post('/register', userController.validateRegister, userController.signup, authController.login);

router.post('/postmeet', meetController.postMeet);
router.post('/login', authController.login);

module.exports = router;
