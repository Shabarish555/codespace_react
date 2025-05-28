const express = require('express');
const { register, login } = require('../controllers/authController');
const authenticateToken = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

// Example protected route
router.get('/profile', authenticateToken, (req, res) => {
  res.json({ message: `Welcome ${req.user.username}`, user: req.user });
});

module.exports = router;
