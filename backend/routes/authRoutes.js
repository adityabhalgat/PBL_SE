//working fine
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth'); // Aggregated index from /controllers/auth

router.post('/register', authController.register);
router.post('/login', authController.login);
router.post('/logout', authController.logout);

module.exports = router;
