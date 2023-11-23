import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  // State to track the login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // State to store user input for email and password
  const [data, setData] = useState({ email: '', password: '' });

  // UseNavigate hook to navigate to other pages
  const navigate = useNavigate();

  // useEffect to log the value of isLoggedIn after it changes
  useEffect(() => {
    console.log('isLoggedIn updated:', isLoggedIn);
  }, [isLoggedIn]);
 const handleClick = (email) => {
    navigate(`/movies?email=${email}`);
  };
  // Dummy function to simulate login. Replace it with your actual login logic.
  const handleLogin = () => {
    // Define or get userData from user input
    const userData = {
      email: data.email,
      password: data.password,
    };
   Axios.post("https://mern-project-deployment-1.onrender.com/userRoute/login",userData).then((response)=>{
          console.log("This is the response");
          console.log(response.data.message);
          if(response.data.status==200){
             
              
              
              
   
              document.getElementById("userdoesnotexist").innerHTML=response.data.message;
              document.getElementById("userexists").innerHTML="";
              
              
              
  
          }
          else{
              console.log(data.email);
              handleClick(data.email);
              //handleRedirect();
              document.getElementById("userexists").innerHTML=response.data.message;
              document.getElementById("userdoesnotexist").innerHTML="";
          }
    
      });
  };

  // Dummy function to simulate logout. Replace it with your actual logout logic.
  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="header1">
      <header className="header">
        <img src={logo} alt="logo" height="60px" width="80px" />
        <h1 className="title">World Of Cinema</h1>
        {isLoggedIn ? (
          // Render logout button if the user is logged in
          <div className="usericon" onClick={handleLogout}>
            <FontAwesomeIcon icon={faUser} />
          </div>
        ) : (
          // Render login button with Link to the signup page
          <Link to="/signup" className="signin">
            <h2 className="sign">Signup</h2>
            <FontAwesomeIcon icon={faUser} className="usericon" />
          </Link>
        )}
      </header>
      <div className="topnav position-static">
        <a href='/' className="links">Home</a>
        <a href="/movies" className="links">Movies</a>
        <a href='/about' className="links">About</a>
        <a href='/contact' className="links">Contact Us</a>
        {isLoggedIn && <Link to="/" className="links">Profile</Link>}
      </div>
    </div>
  );
};

export default Header;

