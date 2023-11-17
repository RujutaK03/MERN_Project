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
        axios.get('http://localhost:8080/display-theatre')
            .then((response) => setTheatres(response.data))
            .catch((error) => console.error(error))
    }, []);

    return (
        <div class="bg-black">
            <AdminHeader />
            <div class="container my-3">
            <h1 class="mov"> All Theatres </h1>
            {theatres.map((theatre, index) => (
                <div key={index}>
                    <img src={`http://localhost:8080/get-theatre/${theatre.image.filename}`}
                        alt={theatre.name}
                        style={{ 'maxWidth': '300px', 'maxHeight': '300px' }} />

                    <h5 class="text-white"> {theatre.name} </h5>
                    <h5 class="text-white"> Location : {theatre.location} </h5>
                </div>
            ))}
            </div>
            <Footer />
        </div>
    )
}

export default DisplayTheatre;
