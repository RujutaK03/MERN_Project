import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import Index from './components/Index';
import Info from './components/Info';
import MyModal from './components/MyModal';
import MoviePage from './components/moviespage';
import About from './components/about';
import Contact from './components/contact';
import Ratings from './components/ratings';
import AddMovie from './components/adminPages/addMovie';
import AddShows from './components/adminPages/addShows';
import AddTheatre from './components/adminPages/addTheatre';
import DisplayMovie from './components/adminPages/displayMovie';
import DisplayTheatre from './components/adminPages/displayTheatre';
import TheatreInfo from './components/theatreInfo';
import ShowInfo from './components/showsInfo';
import MovieSeatSelection from './components/seating';
import AdminLogin from'./components/adminPages/AdminLogin';
import AdminHome from './components/adminPages/adminHome';
// index.js or App.js
//import { library } from '@fortawesome/fontawesome-svg-core';
//import { faInstagram, faFacebook, faYoutube, faTwitter, faAppStore, faGooglePlay, faCcPaypal, faGooglePay, faApplePay, faAmazonPay, faPaypal } from '@fortawesome/free-brands-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//library.add(faInstagram, faFacebook, faYoutube, faTwitter, faAppStore, faGooglePlay, faCcPaypal, faGooglePay, faApplePay, faAmazonPay, faPaypal);

// The rest of your application code

function App() {
  return (
    <Router>
      <div>
        {/* Common components like header or navigation can go here */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/info/:movieId" element={<Info />} />
          <Route path="/citydate" element={<MyModal />} />
          <Route path="/ratings" element={<Ratings />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/theatres" element={<TheatreInfo />} />
          <Route path="/shows" element={<ShowInfo />} />
          <Route path="/AddMovie" element={<AddMovie />} />
          <Route path="/AddShows" element={<AddShows />} />
          <Route path="/AddTheatre" element={<AddTheatre />} />
          <Route path="/DisplayMovie" element={<DisplayMovie />} />
          <Route path="/DisplayTheatre" element={<DisplayTheatre />} />
          <Route path="/admin-login" element={<AdminLogin/>}/>
          <Route path="/AdminHome" element={<AdminHome />} />
          <Route path="/Seat" element={<MovieSeatSelection />} />
          <Route path="/" element={<Index />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
