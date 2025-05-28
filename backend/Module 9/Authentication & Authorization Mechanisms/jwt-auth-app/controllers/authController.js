const jwt = require('jsonwebtoken');
const fs = require('fs');
const path = require('path');
const usersFile = path.join(__dirname, '../users.json');

// Helper to read/write users
const getUsers = () => JSON.parse(fs.readFileSync(usersFile));
const saveUsers = (users) => fs.writeFileSync(usersFile, JSON.stringify(users, null, 2));

const register = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: 'Username and password required' });

  const users = getUsers();
  if (users.find(u => u.username === username)) {
    return res.status(409).json({ message: 'User already exists' });
  }

  users.push({ username, password }); // For simplicity, no hashing here but ideally hash password!
  saveUsers(users);

  res.status(201).json({ message: 'User registered successfully' });
};

const login = (req, res) => {
  const { username, password } = req.body;
  const users = getUsers();

  const user = users.find(u => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.json({ token });
};

module.exports = { register, login };
