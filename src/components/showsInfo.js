import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSearchParams,useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style1.css';
import Header from './header';
import Footer from './footer';
import { Link } from 'react-router-dom';
import MovieSeatSelection from './seating'


const ShowInfo = () => {
    const [shows, setShows] = useState([{
        movieId: "", theatreId: "", showTimes: [""], ticketPrice: 0,
    }])
    const [data, setData] = useState(false);

    const [searchParams] = useSearchParams();
    const movieId = searchParams.get("movieId");
    const theatreId = searchParams.get("theatreId");
    const date = searchParams.get("date");
    const email=searchParams.get('email');
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("https://mern-project-deployment-1.onrender.com/get-shows", {
            params: { movieId: movieId, theatreId: theatreId }
        })
            .then((res) => {
                if (res.data && res.data.length > 0) {
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

    const handleClick = (movieId, theatreId, showTime, email, date, price) => {
        navigate(`/Seat?movieId=${movieId}&theatreId=${theatreId}&showTime=${showTime}&email=${email}&date=${date}&ticketPrice=${price}`)
    }
    
    return (
        <div class="bg-black">
            <Header />
            
            {data ? (
                <>
                    {shows.map((show, idx) => (
                        <div key={idx} class="my-3 container">
                            <h1 class="mov container my-3">Available Shows</h1>
                            <h5 class="text-white"> Ticket Price Per Person : Rs. {show.ticketPrice} </h5>
                            <div class="d-flex">
                            {
                                show.showTimes.map((showTime, index) => (
                                    
                                    <div key={index} >
                                        
                                        
                                        <Link
                                            to={`/Seat?movieId=${movieId}&&theatreId=${theatreId}&&email=${email}&&date=${date}&&showTime=${showTime}&&ticketPrice=${show.ticketPrice}`}
                                            ><button class="border mar my-2 rounded" onClick={() => handleClick(movieId, theatreId, showTime, email, date, show.ticketPrice)}><b>{showTime}</b></button>
                                        </Link>
                                    </div>
                                ))
                            }
                        </div>
                        </div>
                    ))}
                </>
            ) : (<>
                <div class="text-white m-2 h2 text-center"> No Shows Available </div></>)}
                        <Footer />
        </div>
    )

}

export default ShowInfo;
