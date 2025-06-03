import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Dashboard({ onLogout }) {
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/dashboard-data').then(async res => {
      if (res.ok) {
        const data = await res.json();
        setMessage(data.message);
      } else {
        navigate('/');
      }
    });
  }, [navigate]);

  const handleLogout = async () => {
    await fetch('/logout', { method: 'POST' });
    onLogout();
    navigate('/');
  };

  return (
    <div className="dashboard-container">
      <h2>{message}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}
