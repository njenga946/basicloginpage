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
  );
}
