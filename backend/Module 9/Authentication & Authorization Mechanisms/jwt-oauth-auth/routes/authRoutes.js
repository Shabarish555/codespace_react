const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

// Trigger OAuth
router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// OAuth callback
router.get('/google/callback',
  passport.authenticate('google', { session: false, failureRedirect: '/' }),
  (req, res) => {
    // Generate JWT
    const token = jwt.sign({
      id: req.user.id,
      displayName: req.user.displayName,
      email: req.user.emails[0].value
    }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.json({ token }); // Send JWT to client
  }
);

// Example protected route
const authenticateJWT = require('../middleware/jwtAuth');
router.get('/profile', authenticateJWT, (req, res) => {
  res.json({ message: 'Secure data', user: req.user });
});

module.exports = router;
