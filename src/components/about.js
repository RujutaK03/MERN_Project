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

const About = () => {
    return (
    <div class="bg-black">
    <Header />
    <div class="container my-3">
        <h2 class="mov">About World of Cinema</h2>
        <p class="text-white">Welcome to World of Cinema, your ultimate destination for a cinematic experience like no other. At World of Cinema, we are passionate about bringing the magic of movies to your fingertips.</p>
  
        <h3 class="mov">Our Vision</h3>
        <p class="text-white">Our vision is to create a seamless and enjoyable movie-watching experience for our users. We strive to be the go-to platform for movie enthusiasts, providing a wide range of movies, convenient booking options, and exceptional customer service.</p>
  
        <h3 class="mov">Why Choose World of Cinema?</h3>
        <ul class="text-white">
          <li>Extensive Movie Collection: Explore a vast collection of movies, ranging from the latest blockbusters to timeless classics.</li>
          <li>User-Friendly Interface: Our website and mobile app are designed to be user-friendly, making it easy for you to browse, book tickets, and enjoy a hassle-free experience.</li>
          <li>Secure and Fast Booking: With World of Cinema, your transactions are secure, and our booking process is quick and efficient.</li>
          <li>24/7 Customer Support: Have a question or need assistance? Our dedicated customer support team is available 24/7 to assist you.</li>
        </ul>
  
        <h3 class="mov">Our Story</h3>
        <p class="text-white">World of Cinema started with a simple idea: to make movie ticket booking convenient and enjoyable. Since our inception, we have been committed to enhancing the way people experience movies. We believe in the power of storytelling and the joy that a great movie can bring to people's lives.</p>
  
            </div>
  
    <Footer />
    </div>
    )}
export default About;