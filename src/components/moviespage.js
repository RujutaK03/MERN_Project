import React from 'react';
import './style1.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './header.js';
import Footer from './footer.js';
import Movies from './movies.js'

const MoviePage = () => {
  return (
    <div>
      <Header />
      <Movies />
      <Footer />
    </div>
  )
}
export default MoviePage;