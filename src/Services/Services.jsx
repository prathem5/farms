import roomservice from "../Assets/omkar-room-updated.avif"
import bestservice from "../Assets/center-bedroom-updated-img.avif"
import './service.css'
import villaimg from '../Assets/classic-villa-img-updated.avif'
import { Link } from 'react-router-dom'
import { Fade } from 'react-awesome-reveal'
function Services() {
  return (
    <>
     <div className="container">
     <section className="roomsFacility mt-lg-5" id="roomsFacility">
  <div className="titleSection d-block d-sm-none">
    <h2>Rooms Services</h2>
  </div>
  <div className="container d-flex justify-content-center align-content-center ">
    <div className="row d-flex justify-content-center align-content-center ">
      <div className="col-lg-4 p-0 m-0 d-flex justify-content-center align-content-center ">
        <div className="roomCard aos-init aos-animate" data-aos="fade-left">
          <Fade direction='right'>
          <div className="RoomsImage">
            <img src={roomservice} />
          </div>
          </Fade>
          
          <div className="roomText">
            <h2>A/C Room'S</h2>
            <p>
            Relax in our stylish AC room, complete with premium comforts and a tranquil ambiance for the perfect getaway.
            </p>
            <div className="d-flex justify-content-center align-item-center">
              <div className="buttonnav p-2">
                <Link to='/accomodation'>View Details</Link>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4 p-0 m-0  d-none d-sm-block d-flex justify-content-center align-content-center ">
        <div
          className="roomCard"
          style={{
            transform: "scale(1.09)",
            zIndex: 1,
            WebkitBoxShadow: "-1px 0px 18px 4px rgba(0,0,0,0.75)",
            MozBoxShadow: "-1px 0px 10px 4px rgba(0,0,0,0.9)",
            boxShadow: "-1px 0px 10px 4px rgba(0,0,0,0.75)"
          }}
        >
          <div className="RoomsImage">
            <img src={bestservice} alt="best resort in palghar" />
          </div>
          <div
            className="roomtext1"
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              top: 0,
              left: 0,
              backgroundColor: "transparent",
              backgroundImage:
                "linear-gradient(to left, rgba(255, 255, 255, 0.4) 100%, #ffffff 100%)",
              backdropFilter: "blur(3px)"
            }}
          >
            <div className="titleSection">
              <h3 style={{ fontWeight: "bold", textAlign: "center" }}>
                Rooms Services
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="col-lg-4 p-0 m-0 d-flex justify-content-center align-content-center ">
        <div className="roomCard aos-init aos-animate" data-aos="fade-right">
        
        <div className="RoomsImage">
        <div className="villclas">
<Fade direction='left'>
       <img
        src={villaimg}
        />
</Fade>
</div>
</div>
          <div className="roomText">
            <h2>Classic Villa</h2>
            <p>
            Escape to our luxurious villa, boasting expansive living spaces, breathtaking views, and deluxe amenities for an unforgettable retreat.
            </p>
            <div className="d-flex justify-content-center align-item-center mt-5">
              <div className="buttonnav p-2">
                <Link to='/accomodation'>View Details</Link>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
     </div>

    </>
  )
}

export default Services
