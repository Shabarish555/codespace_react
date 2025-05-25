// backend/Module 5/1ntroduction to Node.js & Express.js/3_sample_middleware.js

const express = require('express');
const app = express();

// Middleware to log all incoming requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
  next(); // pass control to the next middleware/route handler
});

// Example route to test middleware
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start server only if this file is run directly
if (require.main === module) {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app; // export the app for testing or further use
