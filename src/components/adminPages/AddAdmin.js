// AddAdmin.js
import React, { useState } from 'react';

const AddAdmin = ({ handleAddAdmin }) => {
  const [newAdminUsername, setNewAdminUsername] = useState('');
  const [newAdminPassword, setNewAdminPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to validate and add a new admin
    handleAddAdmin({
      username: newAdminUsername,
      password: newAdminPassword,
    });
    setNewAdminUsername('');
    setNewAdminPassword('');
  };

  return (
    <div>
      <h2>Add Admin</h2>
      <form onSubmit={handleSubmit}>
        <label>
          New Admin Username:
          <input
            type="text"
            value={newAdminUsername}
            onChange={(e) => setNewAdminUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          New Admin Password:
          <input
            type="password"
            value={newAdminPassword}
            onChange={(e) => setNewAdminPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Add Admin</button>
      </form>
    </div>
  );
};

export default AddAdmin;
