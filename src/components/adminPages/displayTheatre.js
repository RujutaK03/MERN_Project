import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style1.css';
import AdminHeader from './adminHeader';
import Footer from '../footer';

const DisplayTheatre = () => {
    const [theatres, setTheatres] = useState([]);

    useEffect(() => {
        axios.get('https://mern-project-deployment-1.onrender.com/display-theatre')
            .then((response) => setTheatres(response.data))
            .catch((error) => console.error(error))
    }, []);

    return (
        <div class="bg-black">
            <AdminHeader />
            <div class="container my-3">
            <h1 class="mov m-4"> All Theatres </h1>
            <div class="d-flex flex-wrap ">
            {theatres.map((theatre, index) => (
                <div key={index} class="m-4">
                    <img src={`${theatre.image.cloudinaryURL}`}
                        alt={theatre.name}
                        class="theatreimg rounded"/>

                    <h5 class="text-white"> {theatre.name} </h5>
                    <h5 class="text-white"> Location : {theatre.location} </h5>
                </div>
            ))}
        </div>
            </div>
            <Footer />
        </div>

    )
}

export default DisplayTheatre;
