const express = require('express');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'mysecretkey', // should be a strong secret in real apps
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false } // set true if HTTPS is used
}));

// Serve static views
app.use(express.static(path.join(__dirname, 'views')));

// Dummy user for authentication
const user = { username: 'admin', password: 'password' };

// Login Route (GET)
app.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/login.html'));
});

// Login Route (POST)
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if(username === user.username && password === user.password){
    req.session.user = username;
    res.redirect('/dashboard');
  } else {
    res.redirect('/error');
  }
});

// Dashboard Route (Protected)
app.get('/dashboard', (req, res) => {
  if(req.session.user){
    res.sendFile(path.join(__dirname, 'views/dashboard.html'));
  } else {
    res.redirect('/login');
  }
});

// Error Route
app.get('/error', (req, res) => {
  res.sendFile(path.join(__dirname, 'views/error.html'));
});

// Logout Route
app.get('/logout', (req, res) => {
  req.session.destroy(err => {
    if(err){
      return res.redirect('/dashboard');
    }
    res.clearCookie('connect.sid');
    res.redirect('/login');
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
