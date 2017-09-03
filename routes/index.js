const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const meetController = require('../controllers/meetController');
const authController = require('../controllers/authController');

// Get all meetups from server
router.get('/api/meet', meetController.getMeets);
// Get one meetup from server
router.get('/api/meet/:id', meetController.getSingleMeet);
// Post a new meet to server
router.post('/api/meet/new', meetController.postMeet);

router.post('/api/register', userController.validateRegister, userController.signup, authController.login);

router.post('/api/login', authController.login);
router.get('/api/logout', authController.logout);

// Route to test if user is logged in or not.
router.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

module.exports = router;
