import React from 'react';
import { Link } from 'react-router-dom';
import './style1.css'; // Assuming you have a style.css file for your styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState, useEffect} from 'react';
import axios from 'axios';
import MyModal from './MyModal.js';
import { useSearchParams, useNavigate } from 'react-router-dom';

const Movies = () => {
  const navigate = useNavigate();
  const [searchParams]=useSearchParams();
  const getemail=searchParams.get('email');
  //console.log(email);
  const [showModal, setShowModal] = useState(false);
  const [movieId, setMovieId] = useState('');
  const [email,setEmail]=useState('');
  const handleShow = (id,email) => {
    setShowModal(true);
    if (!movieId){
      setMovieId(id);
      setEmail(email);
      
    } else {
      setMovieId('');

    }
    
  };
  
  const handleClose = () => setShowModal(false);

  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://mern-project-deployment-1.onrender.com/display-movie")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => { console.log(err); })
  }, []);

  return (
    <div className="bg-dark pt-3 px-3">
      <h2 className="text-center mov text-white bg-dark ">NOW SHOWING</h2>
      
      <div className="d-flex flex-wrap justify-content-evenly" >
        
      {data.map((movie, index) => (
        
          <div className="card card2 bg-black m-3" key={index}>
            <div className="d-flex ">
              <img src={`${movie.moviePoster.cloudinaryURL}`} alt={movie.title} height="150px" width="120px" class="rounded" />
              <div>
                <h3 className="mov m-2">{movie.title}</h3>
                <h5 className="mov m-2 text-white"> {movie.duration.hours} hrs {movie.duration.minutes} mins </h5>
                <Link to={`/info/${movie._id}`} className="link ">
                  <button className=" align-items-right hpbt rounded ">
                    View Info
                  </button></Link>
                <Link to="#">
                  <button className="align-items-right hpbt rounded" onClick={() => handleShow(movie._id,getemail)}>
                    Book Tickets
                  </button>
                </Link>
                <MyModal showModal={showModal} handleClose={handleClose} movieId={movieId} email={email}/>

              </div>
            </div>
          </div>
       
      ))
      }
      
    </div>
  
    </div>

  )
}
export default Movies;
