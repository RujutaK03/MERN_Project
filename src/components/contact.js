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

const Contact = () => {
    return (
    <div class="bg-black">
        <Header />
        <div class="container my-3">
           <h2 class="mov"> Contact World of Cinema</h2>
      <p class="text-white">We value your feedback and are here to assist you. Please feel free to reach out to us through the following channels:</p>

      <h3 class="mov">Contact Information</h3>
      <ul class="text-white">
        <li>Email: support@worldofcinema.com</li>
        <li>Phone: +123-456-7890</li>
        <li>Address: 5, Mount Road, Chennai-115</li>
      </ul>

      <h3 class="mov">Customer Support</h3>
      <p class="text-white">If you have any questions, concerns, or need assistance with your bookings, our customer support team is available 24/7. You can reach them via email or phone, and they will be happy to help you.</p>

      <h3 class="mov">Business Inquiries</h3>
      <p class="text-white">For business-related inquiries, partnerships, or collaboration opportunities, please contact our business development team at business@worldofcinema.com.</p>

      <h3 class="mov">Visit Our Office</h3>
      <p class="text-white">If you prefer face-to-face interaction, you are welcome to visit our office during business hours. Our office is located at 5, Mount Road, Chennai-115. We recommend scheduling an appointment in advance to ensure that someone is available to assist you.</p>

      <h3 class="mov">Connect With Us on Social Media</h3>
      <p class="text-white">Stay updated on the latest news, movie releases, and promotions by connecting with us on social media:</p>
      <ul class="text-white">
        <li>Facebook: @WorldOfCinema</li>
        <li>Twitter: @WorldOfCinema</li>
        <li>Instagram: @worldofcinema_official</li>
        <li>YouTube: WorldOfCinema</li>
      </ul>

      <p class="text-white">We appreciate your interest in World of Cinema and look forward to hearing from you!</p>
        </div>
    <Footer />
    </div>
)}
export default Contact;