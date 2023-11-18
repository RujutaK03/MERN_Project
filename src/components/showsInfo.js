import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style1.css';
import Header from './header';
import Footer from './footer';

const ShowInfo = () => {
    const [shows, setShows] = useState([{
        movieId: "", theatreId: "", showTimes: [""], ticketPrice: 0,
    }])
    const [data, setData] = useState(false);

    const [searchParams] = useSearchParams();
    const movieId = searchParams.get("movieId");
    const theatreId = searchParams.get("theatreId");
    const date = searchParams.get("date")

    useEffect(() => {
        axios.get("http://localhost:8080/get-shows", {
            params: { movieId: movieId, theatreId: theatreId }
        })
            .then((res) => {
                if (res.status === 200) {
                    setShows(res.data);
                    setData(true);
                } else {
                    setData(false);
                }
            })
            .catch((error) => {
                console.log(error); setData(false);
            })
    }, [movieId, theatreId]);

    return (
        <div>
            <Header />

            {data ? (
                <>
                    {shows.map((show, idx) => (
                        <div key={idx}>
                            <h5> Ticket Price Per Person : Rs. {show.ticketPrice} </h5>
                            {
                                show.showTimes.map((showTime, index) => (
                                    <div key={index}>
                                        <h6>{showTime}</h6>
                                    </div>
                                ))
                            }
                        </div>
                    ))}
                </>
            ) : (<p> No Shows Available </p>)}

            <Footer />
        </div>
    )

}

export default ShowInfo;