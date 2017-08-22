const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
const jobController = require('../controllers/jobController');

router.post('/register', userController.signup);

router.post('/postjob', jobController.postJob);
router.post('/login', userController.login);

module.exports = router;
