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
import dir1 from './dir1.jpg';
import act1 from './actor1.jpg';
import act2 from './actor2.jpg';
import icon1 from './icon1.jpg';
import icon2 from './icon2.jpg';
import icon3 from './icon3.jpg';
import icon4 from './icon4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './header.js';
import Footer from './footer.js';
import { useState } from 'react';
import MyModal from './MyModal.js';
import Ratings from './ratings.js'
const Info = () => {
  const iconStyle = { color: '#66fcf1',padding:"5px" };
  const linkStyle = { textDecoration: 'none' };
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleShow1 = () => setShowModal1(true);
  const handleClose1 = () => setShowModal1(false);

  return (
    <div class="bg-black">
        <Header />
        <div class="row">
            <div class="col-6 p-5">
                <img src={img2} height="550px" width="550px" class="rounded-5" />
            </div>
            <div class="col-6 text-white p-5">
                <h1 class="mov">Batman Begins</h1>
                <br />
                <p class="text-white align-content-between">
                    After witnessing his parents' death, Bruce learns the art of fighting to confront injustice. When he returns to Gotham as Batman, he decides to stop a secret society that intends to destroy the city.
                </p>
                <h5 class="text-white">2hr 45min</h5>
                <h5 class="text-white">Action, Thriller</h5>
                <br />
                <button class="hpbt my-2 rounded" onClick={handleShow}><h2 class="sign">Book Tickets</h2></button>&ensp;&ensp;
                <MyModal showModal={showModal} handleClose={handleClose} />
                <button class="hpbt my-2 rounded" onClick={handleShow1}><h2 class="sign">View Ratings</h2></button>
                <Ratings showModal={showModal1} handleClose={handleClose1} />
                <br /><br />
                <div class="row">
                    <div class="col-4">
                        <div class="card bg-black">
                            <h3 class="text-white">Director</h3>
                            <img src={dir1} height="150px" width="120px" />
                            <h6 class="py-2 text-white">Christopher Nolan</h6>
                        </div>
                    </div>
                    <div class="col-8">
                        <div class="card bg-black">
                            <h3 class="text-white">Starring</h3>
                            <div class="row">
                                <div class="col-6">
                                    <img src={act1} height="150px" width="120px" />
                                <h6 class="py-2 text-white">Christian Bale</h6>
                                </div>
                                <div class="col-6">
                                    <img src={act2} height="150px" width="120px" />
                                <h6 class="py-2 text-white">Cillian Murphy</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
           </div>
           <Footer />
    </div>
)}
export default Info;
