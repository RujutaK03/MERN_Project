// MyModal.js

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const MyModal = ({ showModal, handleClose }) => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');

  const citiesInIndia = ['Mumbai', 'Delhi', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad', 'Ahmedabad', 'Pune', 'Jaipur', 'Lucknow'];

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the city and date values here
    // For example, you may want to send a request to your server
    console.log('City:', city);
    console.log('Date:', date);
    // Close the modal after handling the submission
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Select City and Date</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formCity">
            <Form.Label>City:</Form.Label>
            <Form.Control as="select" value={city} onChange={(e) => setCity(e.target.value)} required>
              <option value="" disabled>Select a city</option>
              {citiesInIndia.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="formDate">
            <Form.Label>Date:</Form.Label>
            <Form.Control type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MyModal;
