import React from 'react';
import { Fade, Slide } from "react-awesome-reveal";
import attra from "../Assets/omkar-attraction-img-updated.avif"
import "./attraction.css";

function Attraction() {
  return (
    <>
      <div className="titleSection aos-init aos-animate" data-aos="fade-up">
        <Fade direction='right'>
          <h3 className="text-center">Nearest Attraction</h3>
        </Fade>
      </div>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="moto">
                <img src={attra} alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 col-md-12 contenth2">
              <Fade direction='up'>
                <h3 className='attra'>Kohoj Fort</h3>
              </Fade>
              <p className='paragraph'>
                

              Nestled in the picturesque Sahyadri range, Kohoj Fort stands as a symbol of Maharashtra's rich heritage and natural beauty. Dating back to the 15th century, this historical marvel entices adventurers with its rugged trails and ancient ruins. As trekkers ascend its slopes, they're greeted by panoramic views of lush valleys and distant horizons, offering a serene escape into nature's embrace. Nearby, our Farmhouse in Wada provides an ideal retreat, allowing visitors to extend their exploration of this enchanting region..
</p>
<p>
The fort's weathered ramparts and crumbling bastions whisper tales of valor and resilience, echoing the struggles of bygone eras. Exploring Kohoj Fort unveils hidden chambers and secret passageways, each revealing a piece of Maharashtra's storied past. More than a historical landmark, Kohoj Fort serves as a reminder of our shared cultural legacy, urging us to preserve and cherish our ancestral treasures. It stands as a testament to the enduring spirit of Maharashtra, beckoning travelers to embark on a journey through time and immerse themselves in the beauty and history of this captivating destination. Enhance your adventure by staying at our Farmhouse in Wada, where comfort and history converge.


              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Attraction;
