import React from 'react';
import { Link } from 'react-router-dom'; 
import '../style1.css'; // Assuming you have a style.css file for your styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {  faInstagram, faFacebook, faYoutube, faTwitter, faAppStore, faGooglePlay, faCcPaypal, faGooglePay, faApplePay, faAmazonPay, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from '../logo.jpg';
import img1 from '../img1.jpg';
import img2 from '../img2.jpg';
import img3 from '../img3.jpg';
import icon1 from '../icon1.jpg';
import icon2 from '../icon2.jpg';
import icon3 from '../icon3.jpg';
import icon4 from '../icon4.jpg';
import Movies from '../movies.js'
import About from '../about.js';
import Contact from '../contact.js'
import AddMovie from './addMovie';
import AddShows from './addShows'
import DisplayTheatre from './displayTheatre';
import DisplayMovie from './displayMovie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const AdminHeader = () => {
    const iconStyle = { color: '#66fcf1',padding:"5px" };
    const linkStyle = { textDecoration: 'none' };
  
    return (
        <div className="header1">
          <header className="header">
            <img src={logo} alt="logo" height="60px" width="80px" />
            <h1 className="title">World Of Cinema</h1>
            <button className="signin">
              <Link to="/signup" class="link"><h2 class="sign">Log out</h2></Link>
              <FontAwesomeIcon icon={faUser} className="usericon" />
            </button>
          </header>
          <div className="topnav position-static">
        
            <a  href="/AddMovie" className="links">Add Movies</a>
            <a  href="/AddShows" className="links">Add Shows</a>
            <a  href="/AddTheatre" className="links">Add Theatres</a>
            <a href='/DisplayMovie' className="links">Movies</a>
            <a  href='/DisplayTheatre' className="links">Theatres</a>
          
          </div>
        </div>
    
            )}
        
            
export default AdminHeader;
