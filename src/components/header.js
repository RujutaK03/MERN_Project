import React from 'react';
import { Link } from 'react-router-dom';
import './style1.css'; // Assuming you have a style.css file for your styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  return (
    <div className="header1">
      <header className="header">
        <img src={logo} alt="logo" height="60px" width="80px" />
        <h1 className="title">World Of Cinema</h1>
        <button className="signin">
          <Link to="/signup" className="link"><h2 className="sign">Sign Up</h2></Link>
          <FontAwesomeIcon icon={faUser} className="usericon" />
        </button>
      </header>
      <div className="topnav position-static">
        <a href='/' className="links">Home</a>
        <a href="/movies" className="links">Movies</a>


        <a href='/about' className="links">About</a>
        <a href='/contact' className="links">Contact Us</a>
        <input className="search" type="text" placeholder="Search movies, cinemas.." />
      </div>
    </div>
  )
}


export default Header;
