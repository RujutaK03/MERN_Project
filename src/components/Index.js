import React from 'react';
import { Link } from 'react-router-dom'; 
import './style1.css'; // Assuming you have a style.css file for your styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {  faInstagram, faFacebook, faYoutube, faTwitter, faAppStore, faGooglePlay, faCcPaypal, faGooglePay, faApplePay, faAmazonPay, faPaypal } from '@fortawesome/free-brands-svg-icons';
import logo from './logo.jpg';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import icon1 from './icon1.jpg';
import icon2 from './icon2.jpg';
import icon3 from './icon3.jpg';
import icon4 from './icon4.jpg';


const Index = () => {
  return (
    <div>
      <div className="header1">
        <header className="header">
          <img src={logo} alt="logo" height="60px" width="80px" />
          <h1 className="title">World Of Cinema</h1>
          <button className="signin">
            <Link to="/signup">Sign Up</Link>
            <i className="fa-solid fa-user"></i>
          </button>
        </header>
        <div className="topnav position-static">
          <a href='#' className="links">Home</a>
          <a  href='#' className="links">Movies</a>
          <a  href='#' className="links">Cinemas</a>
          <a  href='#' className="links">Offers</a>
          <a href='#' className="links">About</a>
          <a  href='#' className="links">Contact Us</a>
          <input className="search" type="text" placeholder="Search movies, cinemas.." />
        </div>
      </div>
      <div id="carouselExample" className="carousel slide bg-black" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img2} className="car d-block w-75" alt="1" data-bs-interval="3000" />
          </div>
          <div className="carousel-item">
            <img src={img1} className="car d-block w-75" alt="2" data-bs-interval="3000" />
          </div>
          <div className="carousel-item">
            <img src={img3} className="car d-block w-75" alt="3" data-bs-interval="3000" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <footer className="bg-dark ">
        <br />
        <h4 className="text-center services">Our Services</h4>

        <div className="d-flex align-items-center justify-content-evenly">
          <div className="card card1 w-20 bg-black h-20 card1 p-2 m-2 rounded-5">
            <h5 className="service text-center">24/7 Customer support available</h5>
            <img src={icon1}  alt="4"className="servimg" />
          </div>
          <div className="card card1 w-20 bg-black card1 p-2 m-2 rounded-5">
            <h5 className="service text-center">Personalized Recommendations</h5>
            <img src={icon2}  alt="5" height="120px" width="120px" className="mx-auto" />
          </div>
          <div className="card card1 w-20 bg-black card1 p-2 m-2 rounded-5">
            <h5 className="service text-center">Instant Booking Confirmation</h5>
            <img src={icon3} alt='6' height="120px" width="120px" className="mx-auto" />
          </div>
          <div className="card card1 w-20 bg-black card1 p-2 m-2 rounded-5">
            <h5 className="service text-center">50% Refund On Cancellation</h5>
            <img src={icon4}  alt="7" height="120px" width="120px" className="mx-auto" />
          </div>
        </div>
        <br />
        <div className="row bg-black">
          <div className="col-3 p-5 foot1">
            <p>
              <strong>Contact</strong>
            </p>
            <p>
              <strong>Address: </strong> 5, Mount Road Chennai-115
            </p>
            <p>
              <strong>Phone: </strong>9878998790
            </p>
            <p>
              <strong>Follow Us</strong>
            </p>
            <div className="icon">
              <i className={faInstagram}></i>
              <i className={faFacebook}></i>
              <i className={faYoutube}></i>
              <i className={faTwitter}></i>
            </div>
          </div>
          <div className="col-3 p-5 foot1">
            <p>
              <strong>&ensp;About</strong>
            </p>
            <p>
              <a href="#" className="footlinks">
                About us
              </a>
            </p>

            <p>
              <a href="#" className="footlinks">
                Privacy Policy
              </a>
            </p>
            <p>
              <a href="#" className="footlinks">
                Terms & Conditions
              </a>
            </p>
            <p>
              <a href="#" className="footlinks">
                Contact Us
              </a>
            </p>
          </div>
          <div className="col-3 p-5 foot1">
            <p>
              <strong>&ensp;My Account</strong>
              <p>
                <a href="#" className="footlinks">
                  About
                </a>
              </p>
              <p>
                <a href="#" className="footlinks">
                  Sign In
                </a>
              </p>
              <p>
                <a href="#" className="footlinks">
                  View Bookings
                </a>
              </p>

              <p>
                <a href="#" className="footlinks">
                  Help
                </a>
              </p>
            </p>
          </div>
          <div className="col-3 p-5 foot1">
            <p>
              <strong>Install App</strong>
            </p>
            <p>From app store or Google play</p>

            <i className={faAppStore}></i>
            <i className={faGooglePlay}></i>
            <br />
            <p>Secured Payments</p>
            <i className={faCcPaypal}></i>
            <i className={faGooglePay}></i>
            <i className={faApplePay}></i>
            <i className={faAmazonPay}></i>
            <i className={faPaypal}></i>
          </div>
        </div>
      </footer>
    </div>
  );
};



export default Index;
