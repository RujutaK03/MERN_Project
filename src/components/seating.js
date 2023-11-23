import React, { useEffect,useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style1.css';
import Header from './header';
import Footer from './footer';
import Axios from "axios";
import { useParams,useSearchParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Login from './Login';
import ShowInfo  from './showsInfo';


const MovieSeatSelection = () => {
  const [searchParams] = useSearchParams();
  const movieId = searchParams.get('movieId');
  const theatreId = searchParams.get('theatreId');
  const showTime = searchParams.get('showTime');
  const email = searchParams.get('email');
  const date = searchParams.get('date');
  console.log(movieId);
  console.log(theatreId);
  console.log(showTime);
  console.log(email);
  
  const [totalAmount, setTotalAmount] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [seatBooked, setSeatBooked] = useState([]);
  Axios.get("http://localhost:8080/seatRoute/seats-view",{
      params: {
        movieId: movieId,
        theatreId: theatreId,
        showTime: showTime,
        date:date
      }
  })
    .then((seats)=>{
      if(seats.data.Booked.length>0){
        //const seatBooked=seats.data.Booked;
        //console.log(seatBooked);
        setSeatBooked(seats.data.Booked);
      }
    }).catch((err)=>console.log(err));
  const handleSubmit=(e)=>{
    console.log("Button pressed");
    e.preventDefault();
    const paymentData={
      email:email,
      totalAmount:totalAmount
    };
    const bookedData={
      movieId:movieId,
      theatreId:theatreId,
      showTime:showTime,
      date:date,
      bookedSeats:selectedSeats
    };
        
    Axios.post("https://mern-project-deployment-1.onrender.com/paymentRoute/payment",paymentData).then((response)=>{
        console.log("Entering into axios");
        console.log(response.data.message);
        if(response.data.status==200){
            document.getElementById("paymentsuccessful").innerHTML=response.data.message;
            //document.getElementById("paymentunsuccessful").innerHTML="";
            Axios.post("https://mern-project-deployment-1.onrender.com/seatRoute/seats-book",bookedData).then((booked)=>{
              console.log(booked.data.message);
            }).catch((err)=>console.log(err));
        }
        else{
            document.getElementById("paymentunsuccessful").innerHTML=response.data.message;
            //document.getElementById("paymentsuccessful").innerHTML="";
        }
    }).catch((err)=>console.log(err));
};
 
    // Make a GET request to fetch booked seats data using Axios
    // Replace 'your-api-endpoint' with the actual endpoint
    
      

  const calculateTotal = () => {
    const selectedSeats = document.querySelectorAll('.selected');
    const seatPrice = 200;
    return selectedSeats.length * seatPrice;
  };

  const handleSeatClick = (event) => {
    const seatButton = event.target;
    console.log(event.target.value);
    selectedSeats.push(event.target.value);
    console.log(selectedSeats);
    seatButton.classList.toggle('selected');

    // Update total amount based on selected seats
    setTotalAmount(calculateTotal());
  };

  const createSeatButtons = (containerId) => {
    
    const seatButtons = [];
    console.log(seatBooked);
    for (let i = 1; i <= 25; i++) {
      const isBooked = seatBooked.includes(i);
      console.log(i,isBooked);
      seatButtons.push(
        <button
          key={i}
          value={i}
          className={`seat rounded border ${selectedSeats.includes(i) ? 'selected' : ''} ${isBooked ? 'booked' : ''}`}
          onClick={handleSeatClick}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'darkblue')}
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = e.target.classList.contains('selected') ? 'green' : '#1f2833')
          }
          disabled={isBooked}
        >
          {i}
        </button>
      );
    }
    return seatButtons;
  };
  const createSeatButtons2 = (containerId) => {
    
    const seatButtons = [];
    console.log(seatBooked);
    for (let i = 26; i <= 50; i++) {
      const isBooked = seatBooked.includes(i);
      console.log(i,isBooked);
      seatButtons.push(
        <button
          key={i}
          value={i}
          className={`seat rounded border ${selectedSeats.includes(i) ? 'selected' : ''} ${isBooked ? 'booked' : ''}`}
          onClick={handleSeatClick}
          onMouseEnter={(e) => (e.target.style.backgroundColor = 'darkblue')}
          onMouseLeave={(e) =>
            (e.target.style.backgroundColor = e.target.classList.contains('selected') ? 'green' : '#1f2833')
          }
          disabled={isBooked}
        >
          {i}
        </button>
      );
    }
    return seatButtons;
  };

  return (
    <div class="bg-black">
        <Header />
      <h1 class="mov text-center my-3">Movie Seat Selection</h1>
      <div class="screen bg-dark text-white w-25 text-center mx-auto my-3 border">All Eyes This Way Please</div>
      <div class="d-flex justify-content-center">
        <div className="container3">{createSeatButtons('container3')}</div>
        <div className="container4">{createSeatButtons2('container4')}</div>
      </div>
      <div className="total">
        <h3 class="text-center text-white">Total Amount: ₹<span id="totalAmount">{totalAmount}</span></h3>
      </div>
      <center><button class="rounded payment my-3 h6" onClick={handleSubmit}>Proceed to Payment</button></center>
      <center><p id="paymentsuccessful" className='text-success'></p></center>
      <center><p id="paymentunsucessful" className='text-danger'></p></center>
      <Footer />
    </div>
  );
};

export default MovieSeatSelection;
