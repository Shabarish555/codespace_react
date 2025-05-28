exports.getProfile = (req, res) => {
  res.json({ user: req.user });
};

exports.adminDashboard = (req, res) => {
  res.json({ message: 'Welcome Admin!' });
};
