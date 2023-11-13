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
import Movies from './movies.js'
import MyModal from './MyModal.js';
const MoviePage = () => {
  const iconStyle = { color: '#66fcf1',padding:"5px" };
  const linkStyle = { textDecoration: 'none' };
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

    return(
        <div>
        <Header />
        <Movies />
        <Footer />
    </div>
)}
export default MoviePage;