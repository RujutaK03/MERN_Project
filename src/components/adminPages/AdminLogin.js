import React, { useState } from 'react';
import Axios from 'axios';
import AddAdmin from './AddAdmin';
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
        <button type="button" onClick={handleAddAdmin}>
          Add Admin
        </button>
      </form>
      {showAddAdmin && <AddAdmin />}
    </div>
  );
};

export default AdminLogin;

