import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style1.css';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';

const ShowInfo = () => {
    const [shows, setShows] = useState([{
        movieId: "", theatreId: "", showTimes: [""], ticketPrice: 0,
    }])
    const [data, setData] = useState(false);

    const [searchParams] = useSearchParams();
    const movieId = searchParams.get("movieId");
    const theatreId = searchParams.get("theatreId");
    const date = searchParams.get("date")

    useEffect(() => {
        axios.get("https://mern-project-deployment-1.onrender.com/get-shows", {
            params: { movieId: movieId, theatreId: theatreId }
        })
            .then((res) => {
                if (res.status === 200) {
                    setShows(res.data);
                    setData(true);
                } else {
                    setData(false);
                }
            })
            .catch((error) => {
                console.log(error); setData(false);
            })
    }, [movieId, theatreId]);
    document.addEventListener('DOMContentLoaded', function () {
        const container1 = document.querySelector('.container1');
        const container2 = document.querySelector('.container2');
        const totalAmountElement = document.getElementById('totalAmount');
        let totalAmount = 0;
  
        // Create 10 seats dynamically
        for (let i = 1; i <= 25; i++) {
          const seatButton = document.createElement('button');
          seatButton.textContent = i;
          
  
          // Event listener for seat button click
          seatButton.addEventListener('click', function () {
            // Toggle seat selection by adding/removing 'selected' class
            this.classList.toggle('selected');
  
            // Update total amount based on selected seats
            totalAmount = calculateTotal();
            totalAmountElement.textContent = totalAmount;
          });
  
          // Event listener for hover
          seatButton.addEventListener('mouseenter', function () {
            // Change color to dark blue on hover
            this.style.backgroundColor = 'darkblue';
          });
  
          // Event listener for mouse leave (to reset the color)
          seatButton.addEventListener('mouseleave', function () {
            // Reset color to the original state on mouse leave
            this.style.backgroundColor = this.classList.contains('selected') ? 'green' : 'blue';
          });
  
          // Append each seat button to the container
          container1.appendChild(seatButton);
        }
        for (let i = 1; i <= 25; i++) {
          const seatButton = document.createElement('button');
          seatButton.textContent = i;
          
          // Event listener for seat button click
          seatButton.addEventListener('click', function () {
            // Toggle seat selection by adding/removing 'selected' class
            this.classList.toggle('selected');
  
            // Update total amount based on selected seats
            totalAmount = calculateTotal();
            totalAmountElement.textContent = totalAmount;
          });
  
          // Event listener for hover
          seatButton.addEventListener('mouseenter', function () {
            // Change color to dark blue on hover
            this.style.backgroundColor = 'darkblue';
          });
  
          // Event listener for mouse leave (to reset the color)
          seatButton.addEventListener('mouseleave', function () {
            // Reset color to the original state on mouse leave
            this.style.backgroundColor = this.classList.contains('selected') ? 'green' : 'blue';
          });
  
          // Append each seat button to the container
          container2.appendChild(seatButton);
        }
  
  
        // Function to calculate the total amount based on selected seats
        function calculateTotal() {
          const selectedSeats = document.querySelectorAll('.selected');
          const seatPrice = 200;
          return selectedSeats.length * seatPrice;
        }
      });
  
    return (
        <div class="bg-black">
            <Header />
            <h1 class="mov container my-3">Available Shows</h1>
            {data ? (
                <>
                    {shows.map((show, idx) => (
                        <div key={idx} class="my-3 container">
                            <h5 class="text-white"> Ticket Price Per Person : Rs. {show.ticketPrice} </h5>
                            <div class="d-flex">
                            {
                                show.showTimes.map((showTime, index) => (
                                    <div key={index} >
                                        <Link to="/Seat"><button class="border mar my-2 rounded"><b>{showTime}</b></button></Link>
                                    </div>
                                ))
                            }
                        </div>
                        </div>
                    ))}
                </>
            ) : (<p class="text-white m-2 h2 text-center"> No Shows Available </p>)}
                        <Footer />
        </div>
    )

}

export default ShowInfo;
