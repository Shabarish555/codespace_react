// Creating a Simple Express Server
// Description: Write a simple Express server that listens on port 3000.

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
