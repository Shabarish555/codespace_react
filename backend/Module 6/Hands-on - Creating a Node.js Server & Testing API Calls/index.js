const express = require('express');
const app = express();
const apiRoutes = require('./routes/apiRoutes');

app.use(express.json()); // Parse JSON request bodies

// Use API routes with a base path
app.use('/api', apiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
