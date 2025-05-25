// backend/Module 5/1ntroduction to Node.js & Express.js/3_sample_middleware.js

const express = require('express');
const app = express();

// Middleware to log all incoming requests
app.use((req, res, next) => {
  try {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl}`);
    next();
  } catch (error) {
    next(error); // Pass errors to error handling middleware
  }
});

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Error handling middleware (must come after all other middleware/routes)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).send('Internal Server Error');
});

// Start server only if this file is run directly
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;

