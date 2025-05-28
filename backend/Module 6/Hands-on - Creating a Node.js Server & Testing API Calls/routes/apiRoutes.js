const express = require('express');
const router = express.Router();

// Example GET route
router.get('/hello', (req, res) => {
  res.json({ message: 'Hello, world!' });
});

// Example POST route
router.post('/echo', (req, res) => {
  res.json({ youSent: req.body });
});

module.exports = router;
