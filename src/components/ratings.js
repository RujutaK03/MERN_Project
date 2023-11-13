// Ratings.js

import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const Ratings = ({ showModal, handleClose }) => {

  // ... (rest of the component remains unchanged)
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRatingChange = (e) => {
    const value = parseInt(e.target.value);
    setRating(value);
  };

  const handleCommentChange = (e) => {
    const value = e.target.value;
    setComment(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can perform actions with the rating and comment values here
    console.log('Rating:', rating);
    console.log('Comment:', comment);
    // Close the modal after handling the submission
    handleClose();
  };

  return (
    <Modal show={showModal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Movie Ratings</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>8.9/10</p>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formRating">
            <Form.Label>Your Rating:</Form.Label>
            <Form.Control
              type="number"
              min="0"
              max="10"
              value={rating}
              onChange={handleRatingChange}
              required
            />
          </Form.Group>
          <Form.Group controlId="formComment">
            <Form.Label>Comment:</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={handleCommentChange}
              placeholder="Share your review"
              required
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit Rating
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};


export default Ratings;
