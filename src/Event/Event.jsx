import React from 'react'
import './event.css'
import eventbig from "../Assets/omkar-sky-decor-updated-img.avif"
import eventgetTo from "../Assets/omkar-drinks-updated-img.avif"
import birthday from '../Assets/birthday-decor-updated-img.avif'
import pre from '../Assets/pre-weeding-updated-img.avif'
import { Fade, Slide } from "react-awesome-reveal";
function Event() {
  return (
    <>
    
      <div className="facilitySection">
  <div className="row  p-0 m-0">
    <div
      className="col-lg-8 col-sm-6 p-0 m-0 failityBanner"
      id="facilityBg"
      style={{
        backgroundImage:"url('"+eventbig+"')",
        backgroundSize: "100% 100%",
        MozBackgroundSize: "cover",
        WebkitBackgroundSize: "cover",
        OBackgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "scroll"
      }}
    >
      
    </div>
    <div className="col-lg-4 col-sm-6 p-0 m-0">
      <div className="facilityCardBg">
        <div className="facilitiesCard">
          <div
            className="facilitiesText aos-init aos-animate"
            data-aos="fade-up"
          >
            <Fade direction='up'>
              <h2>Events &amp; Celebration</h2>
            </Fade>
            
          </div>
          <div className="facilitesList">
            <p>
            "Host your unforgettable events and celebrations with us at our Farmhouse in Wada! Our venue provides a charming setting, customizable packages, and attentive service to ensure your get-together, pre-wedding, birthday, or special occasion is nothing short of extraordinary. From exquisite catering to seamless coordination, let us bring your vision to life and create cherished memories that will last a lifetime. Get in touch with us today to start planning your perfect event experience!"
            </p>
            <ul>
              <li>Birthday Decoration </li>
              <li>Get-Together</li>
              <li>Pre-wedding Shoot</li>
              <li>Anniversary Celebration</li>
            </ul>
            <p />
          </div>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-sm-6 p-0 m-0">
      <div className="attrectionCard">
        <div className="attrectionImg">
        <img
            src={birthday}
          />
         
          <h3 className='eventh3'>Birthday Decoration</h3>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-sm-6 p-0 m-0">
      <div className="attrectionCard">
        <div className="attrectionImg">

        <img src={eventgetTo} />
       
          <h3 className='eventh3'>Get-Together</h3>
        </div>
      </div>
    </div>
    <div className="col-lg-4 col-sm-6 p-0 m-0">
      <div className="attrectionCard">
        <div className="attrectionImg">
          <img src={pre} alt="Eera's Restaurant Menu" />
          <h3 className='eventh3'>Pre-wedding Shoot </h3>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Event
