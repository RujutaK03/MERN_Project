import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style1.css';
import AdminHeader from './adminHeader';
import Footer from '../footer';

const AddShows = () => {
    const [movies, setMovies] = useState([]);
    const [theatres, setTheatres] = useState([]);
    const [formData, setFormData] = useState({
        movieId: '',
        theatreId: '',
        showTimes: [''],
        ticketPrice: 0,
    });

    useEffect(() => {
        axios.get('http://localhost:8080/movies')
            .then(response => setMovies(response.data))
            .catch(error => console.error(error));

        axios.get('http://localhost:8080/theatres')
            .then(response => setTheatres(response.data))
            .catch(error => console.error(error));
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };

    const handleShowTimeChange = (index, value) => {
        setFormData(prevFormData => {
            const newShowTimes = [...prevFormData.showTimes];
            newShowTimes[index] = value;
            return {
                ...prevFormData,
                showTimes: newShowTimes,
            };
        });
    };

    const handleAddShowTime = () => {
        setFormData(prevFormData => ({
            ...prevFormData,
            showTimes: [...prevFormData.showTimes, ''],
        }));
    };

    const handleRemoveShowTime = (index) => {
        setFormData(prevFormData => {
            const newShowTimes = [...prevFormData.showTimes];
            newShowTimes.splice(index, 1);
            return {
                ...prevFormData,
                showTimes: newShowTimes,
            };
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const Shows = new FormData();
            Shows.append('movieId', formData.movieId);
            Shows.append('theatreId', formData.theatreId);
            Shows.append('ticketPrice', formData.ticketPrice);

            formData.showTimes.forEach((time, index) => {
                Shows.append(`showTimes[${index}]`, time);
            });

            for (const pair of Shows.entries()) {
                console.log(pair[0] + ', ' + pair[1]);
            }

            const response = await fetch('http://localhost:8080/add-shows', {
                method: 'POST',
                body: Shows,
            });

            if (response.ok) {
                alert("Shows Added Successfully!");
            } else {
                console.error('Failed to add shows');
            }
        } catch (error) {
            console.error('Error : ', error);
        }
    };

    return (
        <div class="bg-black">
            <AdminHeader />
            <div class="container my-3">
            <h1 class="mov"> Add Shows </h1>
            <form onSubmit={handleSubmit}>
                <table class="m-3"><tr >
                    <th class="text-white p-3 ">
                <label htmlFor='movieId'> Select Movie : </label></th>
                <td>
                <select id="movieId" name="movieId" value={formData.movieId} onChange={handleInputChange} required>
                    <option value=""> Select a movie </option>
                    {movies.map((movie) => (
                        <option key={movie._id} value={movie._id}> {movie.title} </option>
                    ))}
                </select>
            </td>
            </tr>
            <tr><th class="text-white p-3 ">
                <label htmlFor='theatreId'> Select Theatre : </label></th>
                <td>
                <select id="theatreId" name="theatreId" value={formData.theatreId} onChange={handleInputChange} required>
                    <option value=""> Select a theatre </option>
                    {theatres.map((theatre) => (
                        <option key={theatre._id} value={theatre._id}> {theatre.name} </option>
                    ))}
                </select>
            </td>
            </tr>
            <tr>
                <th class="text-white p-3 "><label htmlFor='ticketPrice'> Price per Ticket : </label></th>
                <td><input type='number' id='ticketPrice' name='ticketPrice' value={formData.ticketPrice} onChange={handleInputChange} required />
                </td>
            </tr>
                
                {formData.showTimes.map((showTime, index) => (
                    <tr key={index}>
                        <th class="text-white p-3 ">
                        <label htmlFor={`showTime${index + 1}`}>{`Show Time ${index + 1} :`}</label>
                        </th>
                        <td>
                        <input
                            type="time"
                            id={`showTime${index + 1}`}
                            name={`showTime${index + 1}`}
                            value={showTime}
                            onChange={(event) => handleShowTimeChange(index, event.target.value)}
                            required
                        />
                        {index > 0 && (
                            <button type="button" onClick={() => handleRemoveShowTime(index)}> Remove </button>
                        )}</td>
                        
                    
                    </tr>
                
                ))}
            
            </table>
                <button class="add rounded"  type="button" onClick={handleAddShowTime}> Add Show Time </button><br />
                <br />
                <button class="add rounded" type="submit"> Add Shows </button>

            </form>
        </div>
        <Footer />
        </div>
        
    )

}

export default AddShows;
