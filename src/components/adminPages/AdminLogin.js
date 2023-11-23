import React, { useState } from 'react';
import Axios from 'axios';
import AddAdmin from './AddAdmin';
import logo from "./logo.png";
import './AdminLogin.css';
const AdminLogin = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showAddAdmin, setShowAddAdmin] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const adminData = { email: username, password: password };

      const response = await Axios.post('https://mern-project-deployment-1.onrender.com/admin-login', adminData);

      if (response.status === 200) {
        // Redirect to another page after successful login
        const path = '/AddMovie'; // Replace this with your desired path
        window.location.href = path;
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleAddAdmin = () => {
    setShowAddAdmin(true);
  };

  return (
    <div className="container1">
      <img src={logo} alt="Movie Ticket Booking Logo" className="logo" />
      <div className="login-box">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </div>
          <button type="submit">Login</button>
        </form>

        {showAddAdmin && <AddAdmin />}

        
        </div>
      </div>
    
  );
};
export default AdminLogin;

