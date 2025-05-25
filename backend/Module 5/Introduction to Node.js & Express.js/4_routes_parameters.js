// backend/Module 5/1ntroduction to Node.js & Express.js/4_routes_parameters.js

const express = require('express');
const app = express();

// Route with parameter ':id'
app.get('/user/:id', (req, res) => {
  const userId = req.params.id; // access route parameter
  res.send(`User ID requested is: ${userId}`);
});

// Example route without parameter
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).send('Internal Server Error');
});

// Start server only if run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
