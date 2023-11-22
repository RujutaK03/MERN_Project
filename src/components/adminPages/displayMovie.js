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
        axios.get("https://mern-project-deployment-1.onrender.com/display-movie")
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
            <h1 class="mov m-3"> Movie Posters </h1>

            {data.map((movie, index) => (
                <div key={index}>
                    <h4 class="text-white m-3"> {movie.title} </h4>
                    <div class="d-flex">
                    <div class="mx-3"><img src={`${movie.moviePoster.cloudinaryURL}`}
                        alt={movie.title}
                        style={{ 'maxWidth': '300px', 'maxHeight': '300px' }} class="rounded"/>
                    </div>
                    
                    <div>
                    
                    <p class="text-white">{movie.description}</p>
                    <h6 class="text-white">Release Date: {new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(movie.releaseDate))}</h6>
                    <h6 class="text-white">Duration : {movie.duration.hours} hrs {movie.duration.minutes} mins </h6>
                    
                    <p class="text-white"> Genres: </p>
                    
                    <div class="d-flex">
                    {movie.genre.map((g, id) => (
                        <div key={id}><p class="text-white">{g}&ensp;&ensp;</p></div>
                    ))}
                    </div>

                    <div class="row">
                    <div class="col-7">
                    <p class="text-white">  Languages : </p>
                    <div class="d-flex">
                    {movie.language.map((l, id) => (
                        <div key={id}><p class="text-white">{l}&ensp;&ensp;</p></div>
                    ))}
                    </div> 
                    </div>
                    <div class="col-5 my-3 d-flex justify-content-end">
                        <button class="movb rounded">Edit Movie</button>&ensp;&ensp;
                        <button class="movb mx-2 rounded">Delete Movie</button>
                    </div>
                    
                    </div>
                </div>
                </div>
                    <div class="d-flex">
                    <div>
                    <h6 class="text-white mx-3"> Cast : </h6>
                    <div class="d-flex justify-content-evenly">
                    {movie.castImages.map((cast, id) => (
                        <div key={id} class="mx-3">
                            <img src={`${cast.cloudinaryURL}`}
                                alt={cast.name}
                                class="movimg2 rounded" />

                            <h6 class="text-white"> {cast.name} </h6>
                        </div>
                    ))}
                </div>
                </div>
                    <div>
                    <h6 class="mx-3 text-white"> Director : </h6>
                    <div class="d-flex">
                    {movie.directorImages.map((director, id) => (
                        <div key={id} class="mx-3">
                            <img src={`${director.cloudinaryURL}`}
                                alt={director.name}
                                class="movimg2 rounded" />

                            <h6 class="text-white"> {director.name} </h6>
                        </div>
                    ))}
                </div>
                    </div>
                </div>
            </div>
                
            ))}
        </div>
            <Footer />
            </div>
 
    );
}

export default DisplayMovie;
