import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import Dashboard from './Dashboard';

export default function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={() => setLoggedIn(true)} />} />
        <Route path="/register" element={<Register onRegister={() => setLoggedIn(true)} />} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard onLogout={() => setLoggedIn(false)} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={loggedIn ? <Dashboard onLogout={() => setLoggedIn(false)} /> : <Navigate to="/" />} />
      </Routes>
    </Router>
import React from 'react';

export default function App() {
  return (
    <div className="login-container">
      <h2>Welcome Back</h2>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}
