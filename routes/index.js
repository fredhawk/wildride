const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
// const jobController = require('../controllers/jobsController');

router.post('/register', userController.signup);

module.exports = router;
