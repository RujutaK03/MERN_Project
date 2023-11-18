// MyModal.js

import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const MyModal = ({ showModal, handleClose, movieId }) => {
  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [citiesInIndia, setCities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:8080/get-cities")
      .then((res) => {
        setCities(res.data);
      })
      .catch((err) => { console.log(err); })
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleClose();
    navigate(`/theatres?movieId=${movieId}&city=${city}&date=${date}`);
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
