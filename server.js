const express = require('express');
const session = require('express-session');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false
}));

const USERS_FILE = path.join(__dirname, 'users.txt');

function readUsers() {
  if (!fs.existsSync(USERS_FILE)) return {};
  const data = fs.readFileSync(USERS_FILE, 'utf8').trim();
  if (!data) return {};
  const users = {};
  data.split('\n').forEach(line => {
    const [u, p] = line.split(':');
    if (u && p) users[u] = p;
  });
  return users;
}

function writeUsers(users) {
  const lines = Object.entries(users).map(([u, p]) => `${u}:${p}`);
  fs.writeFileSync(USERS_FILE, lines.join('\n'), 'utf8');
}

app.post('/register', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).json({ message: 'Missing fields' });
  }
  const users = readUsers();
  if (users[username]) {
    return res.status(400).json({ message: 'User exists' });
  }
  users[username] = password;
  writeUsers(users);
  req.session.user = username;
  res.json({ message: 'registered' });
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  const users = readUsers();
  if (users[username] && users[username] === password) {
    req.session.user = username;
    return res.json({ message: 'logged in' });
  }
  res.status(401).json({ message: 'Invalid credentials' });
});

function requireAuth(req, res, next) {
  if (req.session.user) {
    return next();
  }
  res.status(401).json({ message: 'Unauthorized' });
}

app.get('/dashboard-data', requireAuth, (req, res) => {
  res.json({ message: `Welcome ${req.session.user}!` });
});

app.post('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ message: 'logged out' });
  });
});

const PORT = process.env.PORT || 3000;
app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
