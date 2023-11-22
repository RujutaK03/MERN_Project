import React, { useState } from 'react';

const AddAdmin = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleAddAdmin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/add-admin-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        alert('New Admin User Added Successfully!');
      } else if (response.status === 400) {
        alert('Email is already registered. Use a different email.');
      } else {
        console.error('Failed to add a new admin user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Add Admin</h2>
      <form onSubmit={handleAddAdmin}>
        <label>
          New Admin Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          New Admin Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Add Admin</button>
      </form>
    </div>
  );
};

export default AddAdmin;

