import "./eventt.css";
import { CiStar } from "react-icons/ci";
import getTo from '../Assets/getToGet.jpg'
import annyver from '../Assets/omkar-sky-decor-second-updated-img.avif'
import birthdayImage from '../Assets/birthday-decor-updated-img.avif'
import { Fade } from 'react-awesome-reveal';
import MetaTags from 'react-meta-tags';

function EventPage() {
  return (
    <>
    <MetaTags>
      <title>Farmhouse for Events in Wada | Omkar Nature Farm</title>
        <meta title="Farmhouse for Events in Wada | Omkar Nature Farm" />
        <meta
          name="description"
          content="Looking for a Farmhouse for Events in Wada? Our picturesque venue offers the perfect blend of rustic charm and modern amenities. Book now !!"
        />
        <meta
          name="keywords"
          content="Farmhouse in Wada,Farmhouse in Wada for Family,Best Farmhouse in Wada,Farmhouse for Events in Wada,Farmhouse with Private Pool in Wada,Private Farmhouse in Wada,Farmhouse near Wada"
        />
        <link rel="canonical" href="https://omkarnaturefarm.in/ Farmhouse for Events in Wada" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Farmhouse for Events in Wada | Omkar Nature Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omkarnaturefarm.in/Farmhouse for Events in Wada"/>
        <meta property="og:description" content="Looking for a Farmhouse for Events in Wada? Our picturesque venue offers the perfect blend of rustic charm and modern amenities. Book now !! " />
        <meta property="og:image" content="https://omkarnaturefarm.in/static/media/omkar-nature.87735681decd4a0e08d7.jpeg" />       
      </MetaTags>
      <div className="homeSc">
        <div className="homeSection" id="home">
          <div className="homeText">
            <h1>Event</h1>
            <ul>
              {[...Array(4)].map((_, index) => (
                <li key={index}>
                  <span className="material-symbols-outlined"><CiStar /></span>
                </li>
              ))}
            </ul>
            <p>occasion</p>
            {/* <div className="d-flex justify-content-center align-item-center mt-5">
              <Link to='/contect-us' className="programServiceButton">
                Book Now
              </Link>
            </div> */}
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 sm-2-sm-12">
              <Fade direction="left">
                <div className="event-image">
                  <img src={birthdayImage} alt="Farmhouse for Events in Wada" />
                </div>
              </Fade>
            </div>
            <div className="col-lg-6 col-sm-12">
              <div className="titleSection">
                <h2 className="roomText">Birthday</h2>
                <div className="birthdaydetail">
                  <p>
                    

                  Where birthday dreams come true! Our scenic venue offers spacious event spaces, delicious catering, and entertainment options for a memorable celebration. With professional event planning services and affordable rates, we ensure your special day is stress-free and unforgettable. Escape to the countryside and let us create magical memories for you and your guests at our Farmhouse for Events in Wada. Contact us now to book your ultimate birthday experience!
                  </p>  
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12 order-md-1 order-2">
              <div className="titleSection">
                <h2>Pre-wedding Shoot</h2>
                <div className="birthdaydetail">
                 <p> 
Welcome to Omkar Farm House – where we also offer picturesque pre-wedding shooting opportunities! Our stunning venue provides the perfect backdrop for capturing your love story before the big day. With sprawling outdoor areas and charming indoor spaces, we'll help you create timeless memories to cherish forever. Contact us to schedule your pre-wedding shoot at our Farmhouse for Events in Wada and let us make your journey to 'I do' even more magical!





</p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 order-md-2 order-1">
              <Fade direction="right">
                <div className="event-image">
                <img src={annyver}alt="Farmhouse for Events" />
                </div>
              </Fade>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12 order-md-1 order-22">
              <Fade direction="left">
                <div className="event-image">
                  <img src="https://cdn.cdnparenting.com/articles/2022/03/12133939/1904891599.webp" alt=" Events in Wada" />
                </div>
              </Fade>
            </div>
            <div className="col-lg-6 col-sm-12 order-md-2 order-1">
              <div className="titleSection">
                <h2>Anniversary Celebration</h2>
                <div className="birthdaydetail">
                  <p>
                  We create enchanting moments for anniversary celebrations! Amidst the serene countryside, our venue offers intimate event spaces, gourmet catering, and tailored packages to mark your special milestone. Let us orchestrate a romantic ambiance with scenic views and impeccable service. Whether it's your first or fiftieth anniversary, make it unforgettable at Omkar Nature Farm . Contact us to plan your dream anniversary celebration today
                   </p>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6 col-sm-12 order-md-1 order-2">
              <div className="titleSection">
                <h2>Get-Together</h2>
                <div className="birthdaydetail">
                 <p>
                 Welcome to our picturesque farm, the perfect venue for memorable get-togethers at our Farmhouse for Events in Wada! Gather your loved ones amidst our scenic surroundings and spacious event spaces. Enjoy delicious catering, fun activities, and a relaxed atmosphere that fosters connections and laughter. Whether it's a family reunion, friends' gathering, or corporate retreat, let our farm be the backdrop for your unforgettable get-together. Contact us to plan your next gathering and create cherished memories together!
                 </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 order-md-2 order-1">
              <Fade direction="right">
                <div className="event-image order-md-2 order-1">
                  <img src={getTo} alt=" Events in Wada" />
                </div>
              </Fade>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default EventPage;
