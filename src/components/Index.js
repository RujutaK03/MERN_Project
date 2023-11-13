import React from 'react';
import { Link } from 'react-router-dom'; 
import './style1.css'; // Assuming you have a style.css file for your styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {  faInstagram, faFacebook, faYoutube, faTwitter, faAppStore, faGooglePlay, faCcPaypal, faGooglePay, faApplePay, faAmazonPay, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.jpg';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.gif';
import icon1 from './icon1.jpg';
import icon2 from './icon2.jpg';
import icon3 from './icon3.jpg';
import icon4 from './icon4.jpg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './header.js';
import Footer from './footer.js';
import Info from './Info.js';
import MyModal from './MyModal.js';
import Movies from './movies.js'
const Index = () => {
  const iconStyle = { color: '#66fcf1',padding:"5px" };
  const linkStyle = { textDecoration: 'none' };
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div>
      <Header />
      <div id="carouselExample" className="carousel slide bg-black" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={img4} className="car d-block w-75" alt="1" data-bs-interval="3000" />
            <div class="centered text-white"><p class="text-center">WATCH LATEST MOVIES <br /> IN THE NEAREST CINEMAS</p></div>
          </div>
          <div className="carousel-item">
            <img src={img4} className="car d-block w-75" alt="2" data-bs-interval="3000" />
            <div class="centered text-white"><p class="text-center">EXPERIENCE MAGIC ON THE BIG SCREEN</p></div>
          </div>
          <div className="carousel-item">
            <img src={img4} className="car d-block w-75" alt="3" data-bs-interval="3000" />
            <div class="centered text-white"><p class="text-center">DISCOVER THE JOY OF MOVIE NIGHTS</p></div>
       
          </div>
        </div>
        <button className="carousel-control-prev bg-transparent" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next bg-transparent" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <Movies />
      <Footer />
    </div>
  );
};



export default Index;
