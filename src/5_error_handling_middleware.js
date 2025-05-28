// Error Handling Middleware in Express.js
// Description: Implement custom error handling middleware in an Express application.
const express = require('express');
const app = express();

/* --------------------- */
/* Example route to demo error handling */
app.get('/error', (req, res, next) => {
  // Simulate an error
  const err = new Error('Something went wrong!');
  err.status = 400; // custom error status
  next(err); // pass error to error handler middleware
});

/* -------------------------- */
/* Custom Error Handling Middleware */
/* -------------------------- */
app.use((err, req, res, next) => {
  console.error(`Error caught: ${err.message}`);

  // Set default status code if not set
  const statusCode = err.status || 500;

  // Send JSON response with error message
  res.status(statusCode).json({
    success: false,
    error: {
      message: err.message,
      // Optionally include stack trace if in development
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
});

/* ------------------------- */
/* Start server if run directly */
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
