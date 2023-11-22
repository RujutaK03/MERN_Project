import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () => {
  // State to track the login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // UseNavigate hook to navigate to other pages
  const navigate = useNavigate();

  // Dummy function to simulate login. Replace it with your actual login logic.
  const handleLogin = () => {
    Axios.post("https://mern-project-deployment-1.onrender.com/userRoute/login", userData).then((response) => {
      console.log("This is the response");
      console.log(response.data.message);
      if (response.data.status === 200) {
        navigate("/");
        document.getElementById("userdoesnotexist").innerHTML = response.data.message;
        document.getElementById("userexists").innerHTML = "";
        setIsLoggedIn(true);
      }
    })};

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
          // Render login button if the user is not logged in
          <Link to="/login" className="link">
            <button className="signin" type="button" onClick={handleLogin}>
              <h2 className="sign">Login</h2>
              <FontAwesomeIcon icon={faUser} className="usericon" />
            </button>
          </Link>
        )}
      </header>
      <div className="topnav position-static">
        {/* Other navigation links */}
        <input className="search" type="text" placeholder="Search movies, cinemas.." />
      </div>
    </div>
  );
};

export default Header;
