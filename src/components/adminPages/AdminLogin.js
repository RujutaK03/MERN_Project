// AdminLogin.js
import React, { useState } from 'react';
import axios from 'axios';

const AdminLogin = ({ handleLogin }) => {
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminData = { email: username, password: password };

    axios.post('https://mern-project-deployment-1.onrender.com/admin-login', adminData)
      .then((response) => {
        if (response.status === 200) {
          alert("Login Successful");
          const path = '/AdminHome'; // Replace this with your desired path
          window.location.href = path;
        } else {
          alert(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        // Handle the error here, e.g., show an error message to the user
        alert("An error occurred. Please try again later.");
      });
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
