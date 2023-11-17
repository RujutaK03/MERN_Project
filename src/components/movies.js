import React from 'react';
import { Link } from 'react-router-dom'; 
import './style1.css'; // Assuming you have a style.css file for your styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {  faInstagram, faFacebook, faYoutube, faTwitter, faAppStore, faGooglePlay, faCcPaypal, faGooglePay, faApplePay, faAmazonPay, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.jpg';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img3 from './img3.jpg';
import img4 from './img4.gif';
import icon1 from './icon1.jpg';
import icon2 from './icon2.jpg';
import icon3 from './icon3.jpg';
import icon4 from './icon4.jpg';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Header from './header.js';
import Footer from './footer.js';
import Info from './Info.js';
import MyModal from './MyModal.js';
const Movies = () => {
  const iconStyle = { color: '#66fcf1',padding:"5px" };
  const linkStyle = { textDecoration: 'none' };
  const [showModal, setShowModal] = useState(false);

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

    return(
        <div class="bg-dark pt-3 px-3">
            <h2 class="text-center mov text-white bg-dark">NOW SHOWING</h2>
            <div class="d-flex justify-content-evenly">
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                <img src={img2} height="150px" width="120px"/>
                <div>
                  <h3 class="mov m-2">Batman Begins</h3>
                  <h5 class="mov m-2 text-white">8.9/10</h5>
                  <Link to="/info" class="link ">
                  <button class=" align-items-right hpbt rounded " onclick="/info">
                    View Info
                  </button></Link>
                  <Link to="#">
                    <button className="align-items-right hpbt rounded" onClick={handleShow}>
                      Book Tickets
                    </button>
                  </Link>
                  <MyModal showModal={showModal} handleClose={handleClose} />
                  
                </div>
              </div>
              </div>
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                  <img src={img2} height="150px" width="120px"/>
                  <div>
                    <h3 class="mov m-2">Batman Begins</h3>
                    <h5 class="mov m-2 text-white">8.9/10</h5>
                    <Link to="/info" class="link">
                      <button class="align-items-right hpbt rounded" onclick="/info">
                        View Info
                      </button></Link>
                      <Link to="#">
                        <button className="align-items-right hpbt rounded" onClick={handleShow}>
                          Book Tickets
                        </button>
                      </Link>
                      <MyModal showModal={showModal} handleClose={handleClose} />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-evenly">
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                <img src={img2} height="150px" width="120px"/>
                <div>
                  <h3 class="mov m-2">Batman Begins</h3>
                  <h5 class="mov m-2 text-white">8.9/10</h5>
                  <Link to="/info" class="link">
                    <button class=" align-items-right hpbt rounded" onclick="/info">
                      View Info
                    </button></Link>
                    <Link to="#">
                      <button className="align-items-right hpbt rounded" onClick={handleShow}>
                        Book Tickets
                      </button>
                    </Link>
                    <MyModal showModal={showModal} handleClose={handleClose} />
                </div>
              </div>
              </div>
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                  <img src={img2} height="150px" width="120px"/>
                  <div>
                    <h3 class="mov m-2">Batman Begins</h3>
                    <h5 class="mov m-2 text-white">8.9/10</h5>
                    <Link to="/info" class="link">
                      <button class="align-items-right hpbt rounded" onclick="/info">
                        View Info
                      </button></Link>
                      <Link to="#">
                        <button className="align-items-right hpbt rounded" onClick={handleShow}>
                          Book Tickets
                        </button>
                      </Link>
                      <MyModal showModal={showModal} handleClose={handleClose} />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-evenly">
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                <img src={img2} height="150px" width="120px"/>
                <div>
                  <h3 class="mov m-2">Batman Begins</h3>
                  <h5 class="mov m-2 text-white">8.9/10</h5>
                  <Link to="/info" class="link">
                    <button class=" align-items-right hpbt rounded" onclick="/info">
                      View Info
                    </button></Link>
                    <Link to="#">
                      <button className="align-items-right hpbt rounded" onClick={handleShow}>
                        Book Tickets
                      </button>
                    </Link>
                    <MyModal showModal={showModal} handleClose={handleClose} />
                </div>
              </div>
              </div>
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                  <img src={img2} height="150px" width="120px"/>
                  <div>
                    <h3 class="mov m-2">Batman Begins</h3>
                    <h5 class="mov m-2 text-white">8.9/10</h5>
                    <Link to="/info" class="link">
                      <button class="align-items-right hpbt rounded" onclick="/info">
                        View Info
                      </button></Link>
                      <Link to="#">
                        <button className="align-items-right hpbt rounded" onClick={handleShow}>
                          Book Tickets
                        </button>
                      </Link>
                      <MyModal showModal={showModal} handleClose={handleClose} />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-evenly">
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                <img src={img2} height="150px" width="120px"/>
                <div>
                  <h3 class="mov m-2">Batman Begins</h3>
                  <h5 class="mov m-2 text-white">8.9/10</h5>
                  <Link to="/info" class="link">
                    <button class="m-2 align-items-right hpbt rounded" onclick="/info">
                      View Info
                    </button></Link>
                    <Link to="#">
                      <button className="align-items-right hpbt rounded" onClick={handleShow}>
                        Book Tickets
                      </button>
                    </Link>
                    <MyModal showModal={showModal} handleClose={handleClose} />
                </div>
              </div>
              </div>
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                  <img src={img2} height="150px" width="120px"/>
                  <div>
                    <h3 class="mov m-2">Batman Begins</h3>
                    <h5 class="mov m-2 text-white">8.9/10</h5>
                    <Link to="/info" class="link">
                      <button class=" align-items-right hpbt rounded" onclick="/info">
                        View Info
                      </button></Link>
                      <Link to="#">
                        <button className="align-items-right hpbt rounded" onClick={handleShow}>
                          Book Tickets
                        </button>
                      </Link>
                      <MyModal showModal={showModal} handleClose={handleClose} />
                    </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-evenly">
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                <img src={img2} height="150px" width="120px"/>
                <div>
                  <h3 class="mov m-2">Batman Begins</h3>
                  <h5 class="mov m-2 text-white">8.9/10</h5>
                  <Link to="/info" class="link">
                    <button class="m-2 align-items-right hpbt rounded" onclick="/info">
                      View Info
                    </button></Link>
                    <Link to="#">
                      <button className="align-items-right hpbt rounded" onClick={handleShow}>
                        Book Tickets
                      </button>
                    </Link>
                    <MyModal showModal={showModal} handleClose={handleClose} />
                </div>
              </div>
              </div>
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                  <img src={img2} height="150px" width="120px"/>
                  <div>
                    <h3 class="mov m-2">Batman Begins</h3>
                    <h5 class="mov m-2 text-white">8.9/10</h5>
                    <Link to="/info" class="link">
                      <button class="m-2 align-items-right hpbt rounded p-2" onclick="/info">
                        View Info
                      </button></Link>
                      <Link to="#">
                        <button className="align-items-right hpbt rounded" onClick={handleShow}>
                          Book Tickets
                        </button>
                      </Link>
                      <MyModal showModal={showModal} handleClose={handleClose} />
                  </div>
                </div>
              </div>
            </div>
            <h2 class="text-center mov text-white bg-dark">UPCOMING MOVIES</h2>
            <div class="d-flex justify-content-evenly">
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                <img src={img2} height="150px" width="120px"/>
                <div>
                  <h3 class="mov m-2">Batman Begins</h3>
                  <h5 class="mov m-2 text-white">8.9/10</h5>
                  <Link to="/info" class="link ">
                  <button class=" align-items-right hpbt rounded " onclick="/info"disa >
                    View Info
                  </button></Link>
                  <Link to="#">
                    <button className="align-items-right hpbt rounded" onClick={handleShow} disabled>
                      Book Tickets
                    </button>
                  </Link>
                  <MyModal showModal={showModal} handleClose={handleClose} />
                  
                </div>
              </div>
              </div>
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                  <img src={img2} height="150px" width="120px"/>
                  <div>
                    <h3 class="mov m-2">Batman Begins</h3>
                    <h5 class="mov m-2 text-white">8.9/10</h5>
                    <Link to="/info" class="link">
                      <button class="align-items-right hpbt rounded" onclick="/info">
                        View Info
                      </button></Link>
                      <Link to="#">
                        <button className="align-items-right hpbt rounded" onClick={handleShow} disabled>
                          Book Tickets
                        </button>
                      </Link>
                      <MyModal showModal={showModal} handleClose={handleClose} />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-evenly">
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                <img src={img2} height="150px" width="120px"/>
                <div>
                  <h3 class="mov m-2">Batman Begins</h3>
                  <h5 class="mov m-2 text-white">8.9/10</h5>
                  <Link to="/info" class="link">
                    <button class=" align-items-right hpbt rounded" onclick="/info">
                      View Info
                    </button></Link>
                    <Link to="#">
                      <button className="align-items-right hpbt rounded" onClick={handleShow} disabled>
                        Book Tickets
                      </button>
                    </Link>
                    <MyModal showModal={showModal} handleClose={handleClose} />
                </div>
              </div>
              </div>
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                  <img src={img2} height="150px" width="120px"/>
                  <div>
                    <h3 class="mov m-2">Batman Begins</h3>
                    <h5 class="mov m-2 text-white">8.9/10</h5>
                    <Link to="/info" class="link">
                      <button class="align-items-right hpbt rounded" onclick="/info">
                        View Info
                      </button></Link>
                      <Link to="#">
                        <button className="align-items-right hpbt rounded" onClick={handleShow} disabled>
                          Book Tickets
                        </button>
                      </Link>
                      <MyModal showModal={showModal} handleClose={handleClose} />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-evenly">
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                <img src={img2} height="150px" width="120px"/>
                <div>
                  <h3 class="mov m-2">Batman Begins</h3>
                  <h5 class="mov m-2 text-white">8.9/10</h5>
                  <Link to="/info" class="link">
                    <button class=" align-items-right hpbt rounded" onclick="/info">
                      View Info
                    </button></Link>
                    <Link to="#">
                      <button className="align-items-right hpbt rounded" onClick={handleShow} disabled>
                        Book Tickets
                      </button>
                    </Link>
                    <MyModal showModal={showModal} handleClose={handleClose} />
                </div>
              </div>
              </div>
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                  <img src={img2} height="150px" width="120px"/>
                  <div>
                    <h3 class="mov m-2">Batman Begins</h3>
                    <h5 class="mov m-2 text-white">8.9/10</h5>
                    <Link to="/info" class="link">
                      <button class="align-items-right hpbt rounded" onclick="/info">
                        View Info
                      </button></Link>
                      <Link to="#">
                        <button className="align-items-right hpbt rounded" onClick={handleShow} disabled>
                          Book Tickets
                        </button>
                      </Link>
                      <MyModal showModal={showModal} handleClose={handleClose} />
                  </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-evenly">
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                <img src={img2} height="150px" width="120px"/>
                <div>
                  <h3 class="mov m-2">Batman Begins</h3>
                  <h5 class="mov m-2 text-white">8.9/10</h5>
                  <Link to="/info" class="link">
                    <button class="m-2 align-items-right hpbt rounded" onclick="/info">
                      View Info
                    </button></Link>
                    <Link to="#">
                      <button className="align-items-right hpbt rounded" onClick={handleShow} disabled>
                        Book Tickets
                      </button>
                    </Link>
                    <MyModal showModal={showModal} handleClose={handleClose} />
                </div>
              </div>
              </div>
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                  <img src={img2} height="150px" width="120px"/>
                  <div>
                    <h3 class="mov m-2">Batman Begins</h3>
                    <h5 class="mov m-2 text-white">8.9/10</h5>
                    <Link to="/info" class="link">
                      <button class=" align-items-right hpbt rounded" onclick="/info">
                        View Info
                      </button></Link>
                      <Link to="#">
                        <button className="align-items-right hpbt rounded" onClick={handleShow} disabled>
                          Book Tickets
                        </button>
                      </Link>
                      <MyModal showModal={showModal} handleClose={handleClose} />
                    </div>
                </div>
              </div>
            </div>
            <div class="d-flex justify-content-evenly">
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                <img src={img2} height="150px" width="120px"/>
                <div>
                  <h3 class="mov m-2">Batman Begins</h3>
                  <h5 class="mov m-2 text-white">8.9/10</h5>
                  <Link to="/info" class="link">
                    <button class="m-2 align-items-right hpbt rounded" onclick="/info">
                      View Info
                    </button></Link>
                    <Link to="#">
                      <button className="align-items-right hpbt rounded" onClick={handleShow} disabled>
                        Book Tickets
                      </button>
                    </Link>
                    <MyModal showModal={showModal} handleClose={handleClose} />
                </div>
              </div>
              </div>
              <div class="card w-50 bg-black m-3">
                <div class="d-flex">
                  <img src={img2} height="150px" width="120px"/>
                  <div>
                    <h3 class="mov m-2">Batman Begins</h3>
                    <h5 class="mov m-2 text-white">8.9/10</h5>
                    <Link to="/info" class="link">
                      <button class="m-2 align-items-right hpbt rounded p-2" onclick="/info">
                        View Info
                      </button></Link>
                      <Link to="#">
                        <button className="align-items-right hpbt rounded" onClick={handleShow} disabled>
                          Book Tickets
                        </button>
                      </Link>
                      <MyModal showModal={showModal} handleClose={handleClose} />
                  </div>
                </div>
              </div>
            </div>
          </div>
    )}
export default Movies;
