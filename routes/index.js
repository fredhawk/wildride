const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const meetController = require('../controllers/meetController');
const authController = require('../controllers/authController');

/*********************
* Meetups
**********************/
// Get all meetups from server
router.get('/api/meet', meetController.getMeets);
// Get one meetup from server
router.get('/api/meet/:id', meetController.getSingleMeet);
// Post a new meet to server
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
router.post('/api/profile', userController.updateProfile);
router.get('/api/user/meetup', userController.getMeetup);
router.post('/api/user/update', userController.updateProfile);

// Get current users information
router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
