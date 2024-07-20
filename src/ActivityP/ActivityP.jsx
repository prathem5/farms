import React, { useLayoutEffect } from 'react'
import { Link } from 'react-router-dom'
import collagee from "../Assets/birthday-decor-updated-img.avif"
import { Fade } from 'react-awesome-reveal'
import MetaTags from 'react-meta-tags';
import "./acti.css"
function ActivityP() {
  useLayoutEffect(()=>{
   window.scrollTo(0,0)
  })
  return (
    <>
 <MetaTags>
      <title>Best Farmhouse in Wada | Omkar Nature Farm</title>
        <meta title="Best Farmhouse in Wada | Omkar Nature Farm" />
        <meta
          name="description"
          content="Discover the ultimate getaway at the Best Farmhouse in Wada. Experience unparalleled luxury and serenity amidst nature's embrace. Book your dream stay!"
        />
        <meta
          name="keywords"
          content="Farmhouse in Wada,Farmhouse in Wada for Family,Best Farmhouse in Wada,Farmhouse for Events in Wada,Farmhouse with Private Pool in Wada,Private Farmhouse in Wada,Farmhouse near Wada"
        />
        <link rel="canonical" href="https://omkarnaturefarm.in/ Best Farmhouse in Wada" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Farmhouse in Wada for Family | Omkar Nature Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omkarnaturefarm.in/Farmhouse in Wada"/>
        <meta property="og:description" content="Discover the ultimate getaway at the Best Farmhouse in Wada. Experience unparalleled luxury and serenity amidst nature's embrace. Book your dream stay! " />
        <meta property="og:image" content="https://omkarnaturefarm.in/static/media/omkar-nature.87735681decd4a0e08d7.jpeg" />       
      </MetaTags>
<div className="homeScroll3">
  <div className="homeSection" id="home">
  <div className="homeSection" id="home">
    <div className="homeText">
      <h1 style={{ color: "#fff" }}>Activity</h1>
    </div>
  </div>
  </div>
</div>

    
    <section id="activity">
  <div className="titleSection">
    <h3>Our Activity</h3>
  </div>
  <div className="container">
    <div className="row">
      
      <div className="col-lg-3 aos-init aos-animate" data-aos="fade-right">
      <Fade direction='left'>
        <div className="row">
          <div className="col-lg-12">
            <div className="activityText">
              <h3>Wifi&amp; Lawn</h3>
              <p>
              Enjoy complimentary WiFi access along with the expansive greenery of our lush lawn at Omkar Nature Farm. 
              </p>
            </div>
          </div>
          <div className="col-lg-12">
          <div className="activityText">
         
              <h3>Swimming pool</h3>
              <p>Dive into relaxation at our refreshing swimming pool at the Best Farmhouse in Wada. Book your stay now for the ultimate rejuvenating experience!</p>
              
            </div>
        
         
          </div>
          <div className="col-lg-12">
            
            <div className="activityText">
              <h3>Badminton</h3>
              <p>
              Enjoy badminton matches in our spacious court.
              </p>
            </div>
            
        
          </div>
        </div>
      </Fade>
      </div>
      
      <div className="col-lg-6">
        <Fade direction='zoom-in-up' duration={1000}>
        <div className="activeImage aos-init aos-animate" data-aos="zoom-in-up">
          <img
            src={collagee}
            alt="Best Farmhouse in Wada"
          />
        </div>
        </Fade>
        
      </div>
      <div className="col-lg-3 aos-init aos-animate" data-aos="fade-left">
        <Fade direction='right'>
        <div className="row">
          <div className="col-lg-12">
            <div className="activityText">
              <h3>Cricket</h3>
              <p>
              Experience thrilling cricket matches in our expansive field at the Best Farmhouse in Wada, where players of all levels can enjoy the excitement of the game.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="activityText">
              <h3>football</h3>
              <p>
              Experience thrilling football matches on our expansive field, perfect for sports enthusiasts and fun-filled gatherings.
              </p>
            </div>
          </div>
          <div className="col-lg-12">
            <div className="activityText">
              <h3>chess and carrom</h3>
              <p>
              Indulge in chess and carrom in our cozy indoor lounge area for ultimate relaxation.
              </p>
            </div>
          </div>
        </div>
        </Fade>
       
      </div>
      <div className="d-flex justify-content-center align-item-center mt-5">
        <div className="buttonnav p-2">

          <Link to="/contect-us"  className="programServiceButton"
            data-bs-toggle="modal"
            data-bs-target="#">

Enquiry Now
          
          </Link>
         
        </div>
      </div>
    </div>
  </div>
</section>


    </>
  )
}

export default ActivityP
