import React from 'react';
import { useEffect, useState } from "react";
import './styles.css'; // Assuming you have a styles.css file for your styles
import { Link } from 'react-router-dom';
import logo from "./logo.png";
import Axios from "axios";

const SignUp = () => {
    const[data,setData]=useState({
        name:"",
        email:"",
        password:"",
        cpassword:""
    });
    const handleChange=(e)=>{
        const value=e.target.value;
        setData({
            ...data,
            [e.target.name]:value
        });
    };
    const handleSubmit=(e)=>{
        e.preventDefault();
        const userData={
            name:data.name,
            email:data.email,
            password:data.password,
            cpassword:data.cpassword
        };
        Axios.post("https://mern-project-deployment-1.onrender.com/userRoute/register",userData).then((response)=>{
            console.log("This is the response");
            console.log(response.data.message);
            if(response.data.status==200){
                document.getElementById("emailexists").innerHTML=response.data.message;
                document.getElementById("userregistered").innerHTML="";
            }
            else{
                document.getElementById("userregistered").innerHTML=response.data.message;
                document.getElementById("emailexists").innerHTML="";
            }
        });
    };
    
    
    
    
    return (
        
        <div className="container1">
            <img src={logo} alt="Movie Ticket Booking Logo" className="logo" />
            <div className="signup-box">
                <h2>Create an Account</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input value={data.name} onChange={handleChange} type="text" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={data.email} onChange={handleChange} type="email" name="email" required />
                    </div>
                    
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input value={data.password} onChange={handleChange} type="password" name="password" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="cpassword">Confirm Password</label>
                        <input value={data.cpassword} onChange={handleChange} type="password" name="cpassword" required />
                    </div>
                    <div>
                        <p  id="emailexists" className="text-danger"></p>
                        <p id="userregistered" className='text-success'></p>
                    </div>
                    <button type="submit">Sign Up</button>
                </form>
                <div className="login-link">
                    <p>Already have an account? <Link to="/login">Login </Link></p>
                    <p>Admin? <Link to="/admin-login">Admin Login</Link></p>
                </div>
            </div>
        </div>
    
    );
}

export default SignUp;
