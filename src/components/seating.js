import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style1.css';
import Header from './header';
import Footer from './footer';

const MovieSeatSelection = () => {
  const [totalAmount, setTotalAmount] = useState(0);

  const calculateTotal = () => {
    const selectedSeats = document.querySelectorAll('.selected');
    const seatPrice = 200;
    return selectedSeats.length * seatPrice;
  };

  const handleSeatClick = (event) => {
    const seatButton = event.target;
    seatButton.classList.toggle('selected');

    // Update total amount based on selected seats
    setTotalAmount(calculateTotal());
  };

  const createSeatButtons = (containerId, start, end) => {
    const seatButtons = [];
    for (let i = start; i <= end; i++) {
      seatButtons.push(
        <button
          key={i}
          className="seat rounded border"
          onClick={handleSeatClick}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'darkblue')}
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = e.target.classList.contains('selected') ? 'green' : '#1f2833')
          }
        >
          {i}
        </button>
      );
    }
    return seatButtons;
  };

  return (
    <div className="bg-black">
      <Header />
      <h1 className="mov text-center my-3">Movie Seat Selection</h1>
      <div className="screen bg-dark text-white w-25 text-center mx-auto my-3 border">All Eyes This Way Please</div>
      <div className="d-flex justify-content-center">
        <div className="container3">{createSeatButtons('container3', 1, 25)}</div>
        <div className="container4">{createSeatButtons('container4', 26, 50)}</div>
      </div>
      <div className="total">
        <h3 className="text-center text-white">Total Amount: ₹<span id="totalAmount">{totalAmount}</span></h3>
      </div>
      <center><button className="rounded payment my-3 h6">Proceed to Payment</button></center>
      <Footer />
    </div>
  );
};

export default MovieSeatSelection;
