import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import {  faInstagram, faFacebook, faYoutube, faTwitter, faAppStore, faGooglePlay, faCcPaypal, faGooglePay, faApplePay, faAmazonPay, faPaypal } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './logo.jpg';
import img1 from './img1.jpg';
import img2 from './img2.jpg';
import img4 from './img4.gif';
import img3 from './img3.jpg';
import icon1 from './icon1.jpg';
import icon2 from './icon2.jpg';
import icon3 from './icon3.jpg';
import icon4 from './icon4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    const iconStyle = { color: '#66fcf1',padding:"5px" };
    const linkStyle = { textDecoration: 'none' };
  
    return (
        <footer className="bg-dark ">
            <br />
            <h4 className="text-center services">Our Services</h4>
    
            <div className="d-flex align-items-center justify-content-evenly">
              <div className="card card1 w-20 bg-black h-20 card1 p-2 m-2 rounded-5">
                <h5 className="service text-center">24/7 Customer support available</h5>
                <img src={icon1}  alt="4"className="servimg" />
              </div>
              <div className="card card1 w-20 bg-black card1 p-2 m-2 rounded-5">
                <h5 className="service text-center">Personalized Recommendations</h5>
                <img src={icon2}  alt="5" height="120px" width="120px" className="mx-auto" />
              </div>
              <div className="card card1 w-20 bg-black card1 p-2 m-2 rounded-5">
                <h5 className="service text-center">Instant Booking Confirmation</h5>
                <img src={icon3} alt='6' height="120px" width="120px" className="mx-auto" />
              </div>
              <div className="card card1 w-20 bg-black card1 p-2 m-2 rounded-5">
                <h5 className="service text-center">50% Refund On Cancellation</h5>
                <img src={icon4}  alt="7" height="120px" width="120px" className="mx-auto" />
              </div>
            </div>
            <br />
            <div className="d-flex bg-black">
              <div className="col-3 p-5 foot1">
                <p>
                  <strong>Contact</strong>
                </p>
                <p>
                  <strong>Address: </strong> 5, Mount Road Chennai-115
                </p>
                <p>
                  <strong>Phone: </strong>9878998790
                </p>
                <p>
                  <strong>Follow Us</strong>
                </p>
                <div className="icon">
                  <FontAwesomeIcon icon={faInstagram} style={iconStyle} />
                  <FontAwesomeIcon icon={faFacebook} style={iconStyle} />
                  <FontAwesomeIcon icon={faYoutube} style={iconStyle} />
                  <FontAwesomeIcon icon={faTwitter} style={iconStyle} />
                </div>
              </div>
              <div className="col-3 p-5 foot1">
                <p>
                  <strong>&ensp;About</strong>
                </p>
                <p>
                  <a href="#" className="footlinks">
                    About us
                  </a>
                </p>
    
                <p>
                  <a href="#" className="footlinks">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="#" className="footlinks">
                    Terms & Conditions
                  </a>
                </p>
                <p>
                  <a href="#" className="footlinks">
                    Contact Us
                  </a>
                </p>
              </div>
              <div className="col-3 p-5 foot1">
                <p>
                  <strong>&ensp;My Account</strong>
                </p>
                  <p>
                    <a href="#" className="footlinks">
                      About
                    </a>
                  </p>
                  <p>
                    <a href="#" className="footlinks">
                      Sign In
                    </a>
                  </p>
                  <p>
                    <a href="#" className="footlinks">
                      View Bookings
                    </a>
                  </p>
    
                  <p>
                    <a href="#" className="footlinks">
                      Help
                    </a>
                  </p>
                
              </div>
              <div className="col-3 p-5 foot1">
                <p>
                  <strong>Install App</strong>
                </p>
                <p>From app store or Google play</p>
    
                <i><FontAwesomeIcon icon={faAppStore} style={iconStyle} /></i>
                <i><FontAwesomeIcon icon={faGooglePlay} style={iconStyle} /></i>
    
                <br />
                <p>Secured Payments</p>
                <FontAwesomeIcon icon={faCcPaypal} style={iconStyle}/>
                <FontAwesomeIcon icon={faGooglePay} style={iconStyle} />
                <FontAwesomeIcon icon={faApplePay} style={iconStyle} />
                <FontAwesomeIcon icon={faAmazonPay} style={iconStyle} />
                <FontAwesomeIcon icon={faPaypal} style={iconStyle} />
              </div>
            </div>
          </footer>
    )}
    
        
export default Footer;
