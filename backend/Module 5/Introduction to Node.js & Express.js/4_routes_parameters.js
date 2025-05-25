const express = require('express');
const app = express();

/* ----------------- */
/* Home page route   */
/* ----------------- */
app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

/* --------------------------- */
/* Route: Get user by ID param */
/* --------------------------- */
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;
  res.send(`User ID requested is: ${userId}`);
});

/* ------------------------- */
/* Error handling middleware  */
/* ------------------------- */
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);

  // Example of more specific error handling
  if (err.type === 'entity.parse.failed') {
    return res.status(400).send('Bad Request: Invalid JSON');
  }

  res.status(500).send('Internal Server Error');
});

/* ------------------------- */
/* Start server if run direct */
/* ------------------------- */
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

module.exports = app;
