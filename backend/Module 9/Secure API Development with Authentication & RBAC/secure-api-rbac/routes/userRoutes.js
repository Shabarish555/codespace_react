const express = require('express');
const { getProfile, adminDashboard } = require('../controllers/userController');
const authenticate = require('../middleware/auth');
const authorizeRoles = require('../middleware/role');

const router = express.Router();

router.get('/profile', authenticate, getProfile);
router.get('/admin', authenticate, authorizeRoles('admin'), adminDashboard);

module.exports = router;
