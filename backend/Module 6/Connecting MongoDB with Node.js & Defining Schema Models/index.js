const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
require('./config/db'); // Connect to DB

app.use(express.json());
app.use('/users', userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
