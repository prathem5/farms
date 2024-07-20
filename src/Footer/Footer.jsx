import React from 'react'
import omLogo from '../Assets/omkar-nature.jpeg'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { CiYoutube } from "react-icons/ci";
import { Link } from 'react-router-dom'




function Footer() {
  return (
    <>
      <footer id="footer">
  <div className="footer-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 footer-contact">
          <img src={omLogo} alt="Eeras logo " />
          <p>
            <a style={{ color: "#fff" }} href="tel:+91 7028725777">
              {" "}
              <strong>Phone:</strong> +91 8976256998
            </a>
            <br />
            <a
              style={{ color: "#fff" }}
              href="mailto:eerasagroresort@gmail.com"
            >
              <strong>Email:</strong>farmomkarnature@gmail.com
            </a>
            <br />
          </p>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Useful Links</h4>
          <ul>
            <li>
              <i className="fa fa-chevron-right" />
              <Link to="/">Home</Link>
               
            </li>
            <li>
              <i className="fa fa-chevron-right" />{" "}
              <Link to="/about-us">About US</Link>
              
            </li>
            <li>
              <i className="S" />{" "}
              <Link to="">Services</Link>
             
            </li>
            <li>
              <i className="fa fa-chevron-right" />{" "}
              <Link to="/activitypage">Activities</Link>
              
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Quick Link</h4>
          <ul>
            <li>
              <i className="fa fa-chevron-right" />
              <Link to="/accomodation">Accommodation</Link>
             
            </li>
            <li>
              <i className="fa fa-chevron-right" />{" "}
              <Link to="/gallery">Gallery</Link>
              
            </li>
            {/* <li>
              <i className="fa fa-chevron-right" />{" "}
              <Link to="">Near by Near By Attraction Points</Link>
              <a href="gallery.html"></a>
            </li> */}
            <li>
              <i className="fa fa-chevron-right" />
              <Link to="/contect-us">Contact Us</Link>
              
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-md-6 footer-links">
          <h4>Our Social Networks</h4>
          <div className="social-links mt-3">
            <a
              href="https://www.facebook.com/omkarnaturefarmwada"
              className="facebook"
              target="_blank"
            >
             <FaFacebookSquare />

            </a>
            <a
              href="https://www.instagram.com/omkarnaturefarm?igsh=MWZ2emdsYWdwcnJqOA=="
              className="instagram"
              target="_blank"
            >
            <FaInstagram />

            </a>
          
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container footer-bottom clearfix">
    <div className="copyright">
      {" "}
      © Copyright{" "}
      <strong>
        <span style={{ color: "#2e4e3d" }}>omkar nature farm </span>
      </strong>
      . All Rights Reserved{" "}
    </div>
    <div className="credits">
      Designed by{" "}
      <a href="https://skdm.in/" style={{ color: "#f26522" }}>
        Shree Krishna Digital
      </a>{" "}
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer
