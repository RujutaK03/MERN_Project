import React from 'react';
import './styles.css'; // Assuming you have a styles.css file for your styles
import { Link } from 'react-router-dom';
import logo from "./logo.png"
const SignUp = () => {
    return (
        
        <div className="container1">
            <img src={logo} alt="Movie Ticket Booking Logo" className="logo" />
            <div className="signup-box">
                <h2>Create an Account</h2>
                <form>
                    <div className="input-group">
                        <label htmlFor="signup-username">Username</label>
                        <input type="text" id="signup-username" name="signup-username" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="signup-email">Email</label>
                        <input type="email" id="signup-email" name="signup-email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="signup-password">Password</label>
                        <input type="password" id="signup-password" name="signup-password" required />
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <div className="login-link">
                    <p>Already have an account? <Link to="/login">Login </Link></p>
                </div>
            </div>
        </div>
    
    );
}

export default SignUp;
