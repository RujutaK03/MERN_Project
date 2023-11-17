import { useState, useEffect } from 'react';
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../style1.css';
import AdminHeader from './adminHeader';
import Footer from '../footer';

const DisplayMovie = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/display-movie")
            .then((res) => {
                setData(res.data);
            })
            .catch((err) => { console.log(err); })
    }, []);

    // const filenames = photos.map(photo => photo.filename);
    console.log(data);

    return (
        <div class="bg-black">
            <AdminHeader />
            <div class="container my-3">
            <h1 class="mov"> Movie Posters </h1>

            {data.map((movie, index) => (
                <div key={index}>
                    <img src={`http://localhost:8080/get-poster/${movie.moviePoster.filename}`}
                        alt={movie.title}
                        style={{ 'maxWidth': '300px', 'maxHeight': '300px' }} />

                    <h5 class="text-white"> {movie.title} </h5>
                    <p class="text-white">{movie.description}</p>
                    <h6 class="text-white">Release Date: {new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(movie.releaseDate))}</h6>
                    <h6 class="text-white">Duration : {movie.duration.hours} hrs {movie.duration.minutes} mins </h6>
                    <p class="text-white"> Genres: </p>

                    {movie.genre.map((g, id) => (
                        <div key={id}><p class="text-white">{g}</p></div>
                    ))}

                    <p class="text-white">  Languages : </p>

                    {movie.language.map((l, id) => (
                        <div key={id}><p class="text-white">{l}</p></div>
                    ))}

                    <h6 class="text-white"> Cast : </h6>
                    {movie.castImages.map((cast, id) => (
                        <div key={id}>
                            <img src={`http://localhost:8080/get-cast/${cast.filename}`}
                                alt={cast.name}
                                style={{ 'maxWidth': '300px', 'maxHeight': '300px' }} />

                            <h5 class="text-white"> {cast.name} </h5>
                        </div>
                    ))}

                    <h6> Director : </h6>
                    {movie.directorImages.map((director, id) => (
                        <div key={id}>
                            <img src={`http://localhost:8080/get-director/${director.filename}`}
                                alt={director.name}
                                style={{ 'maxWidth': '300px', 'maxHeight': '300px' }} />

                            <h5 class="text-white"> {director.name} </h5>
                        </div>
                    ))}

                </div>
            ))}
        </div>
            <Footer />
            </div>
    );
}

export default DisplayMovie;
