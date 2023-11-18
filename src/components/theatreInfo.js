import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style1.css';
import Header from './header';
import Footer from './footer';

const TheatreInfo = () => {
    const [theatres, setTheatres] = useState([{
        name: "", image: {}, location: "",
    }]);

    const [searchParams] = useSearchParams();
    const movieId = searchParams.get('movieId');
    const city = searchParams.get('city');
    const date = searchParams.get('date');

    const navigate = useNavigate();

    useEffect(() => {
        axios.get('https://mern-project-deployment-1.onrender.com/get-theatre-by-location', {
            params: { city: city }
        })
            .then((response) => { setTheatres(response.data); console.log(theatres); })
            .catch((error) => console.error(error))
    }, []);

    const handleClick = (movieId, theatreId, date) => {
        navigate(`/shows?movieId=${movieId}&theatreId=${theatreId}&date=${date}`)
    }

    return (
        <div class="bg-black">
            <Header />
            <div class="container my-3">
                <h1 class="mov"> Theatres in {city} </h1>
                {theatres.map((theatre, index) => (
                    <div key={index} onClick={() => handleClick(movieId, theatre._id, date)}>
                        <img src={`${theatre.image.cloudinaryURL}`}
                            alt={theatre.name}
                            style={{ 'maxWidth': '300px', 'maxHeight': '300px' }} />

                        <h5 class="text-white"> {theatre.name} </h5>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default TheatreInfo;
