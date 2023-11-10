import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './styles.css'; // Assuming you have a styles.css file for your styles
import logo from "./logo.png"
const Login = () => {
  return (
    <div className="container">
      <img src={logo} alt="Movie Ticket Booking Logo" className="logo" />
      <div className="login-box">
        <h2>Welcome to World of Cinema</h2>
        <form>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
          <br />
          <label>
            <input type="checkbox" id="remember-me" name="remember-me" />
            Remember me
          </label>
        </form>
        <div className="forgot-password">
          <button>Forgot Password?</button>
        </div>
        <div className="text-center">
          <p>Don't have an account? <Link to="/signup">Sign Up</Link></p>
          {/* The Link component is used to navigate to the /signup route */}
        </div>
      </div>
    </div>
  );
}

export default Login;
