// AdminLogin.js
import React, { useState } from 'react';


const AdminLogin = ({ handleLogin }) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add authentication logic here (e.g., validate credentials)
    // For simplicity, let's assume the credentials are 'admin/admin123'
    if (username === 'admin' && password === 'admin123') {
      
      // Redirect to another page (e.g., Dashboard) after successful login
      const path = '/AddMovie'; // Replace this with your desired path
    window.location.href = path;
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <div>
      <h2>Admin Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
