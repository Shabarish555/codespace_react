// 2_sample_express_server.js

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Express server!');
});

if (require.main === module) {
  app.listen(port, (err) => {
    if (err) {
      console.error('Error starting server:', err);
    } else {
      console.log(`Server is listening on http://localhost:${port}`);
    }
  });
}

module.exports = app;
