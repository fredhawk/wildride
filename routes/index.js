const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const meetController = require('../controllers/meetController');
const authController = require('../controllers/authController');

/*********************
* Meetups
**********************/
router.get('/api/meet', meetController.getMeets);
router.get('/api/meet/:id', meetController.getSingleMeet);
router.post('/api/meet/new', meetController.validateMeet, meetController.postMeet);
router.post('/api/meet/attend/:id', userController.attend);
router.post('/api/meet/unattend/:id', userController.unattend);

/*********************
* Authentication
**********************/
router.post('/api/login', authController.login);
router.get('/api/logout', authController.logout);

/*********************
 * User
 **********************/
router.post('/api/register', userController.validateRegister, userController.signup, authController.login);
router.get('/api/user', userController.getUser);
router.get('/api/user/meetup', userController.getMeetup);
router.post('/api/user/update', userController.updateProfile);

module.exports = router;
