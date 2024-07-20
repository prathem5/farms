import React, { useState } from 'react';
import omkarNature from "../Json/JsonDaata";
import  { useLayoutEffect } from 'react'
import { Image } from 'antd';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import MetaTags from 'react-meta-tags';
function GalleryP() {
  const [items, setItems] = useState(omkarNature);
  useLayoutEffect(()=>{
    window.scrollTo(0,0)
   })

  const filterItems = (category) => {
    if (category === 'All') {
      setItems(omkarNature);
    } else {
      const updatedItems = omkarNature.filter((item) => item.category === category);
      setItems(updatedItems);
    }
  };

  return (
    <>
    <MetaTags>
      <title>Private Farmhouse in Wada | Omkar Nature Farm</title>
        <meta title="Private Farmhouse in Wada | Omkar Nature Farm" />
        <meta
          name="description"
          content="Experience the epitome of tranquility at our Private Farmhouse in Wada. Escape the hustle and bustle, surrounded by nature's beauty. Book your stay now!"
        />
        <meta
          name="keywords"
          content="Farmhouse in Wada,Farmhouse in Wada for Family,Best Farmhouse in Wada,Farmhouse for Events in Wada,Farmhouse with Private Pool in Wada,Private Farmhouse in Wada,Farmhouse near Wada"
        />
        <link rel="canonical" href="https://omkarnaturefarm.in/ Private Farmhouse in Wada" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Private Farmhouse in Wada | Omkar Nature Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omkarnaturefarm.in/Farmhouse in Wada"/>
        <meta property="og:description" content="Experience the epitome of tranquility at our Private Farmhouse in Wada. Escape the hustle and bustle, surrounded by nature's beauty. Book your stay now! " />
        <meta property="og:image" content="https://omkarnaturefarm.in/static/media/omkar-nature.87735681decd4a0e08d7.jpeg" />       
      </MetaTags>
     <p className='d-none'>
Experience the epitome of exclusivity and tranquility at Omkar Farm House, your Private Farmhouse in Wada. Nestled amidst the serene landscapes of Wada, our farmhouse offers a secluded retreat for those seeking ultimate privacy and relaxation.

At Omkar Farm House, immerse yourself in the beauty of nature as you unwind in your own private sanctuary. Whether you're enjoying a leisurely stroll through our lush gardens, taking a refreshing dip in the pool, or simply basking in the serenity of the countryside, every moment here is crafted to rejuvenate your senses and soothe your soul.

With spacious accommodations and luxurious amenities, our Private Farmhouse in Wada provides the perfect setting for intimate gatherings, family vacations, or romantic escapes. Whether you're planning a weekend getaway or an extended stay, our farmhouse is your haven away from the hustle and bustle of city life.

Book your stay at Omkar Farm House today and experience the allure of a Private Farmhouse in Wada like never before. Reconnect with nature, create unforgettable memories, and indulge in the luxury of seclusion—all within the idyllic surroundings of our esteemed farmhouse. Welcome to your home away from home, where tranquility meets luxury, and every moment is cherished. Welcome to Omkar Farm House.</p>
    
       <div className="homeScroll4">
        <div className="homeSection" id="home">
          <div className="homeText">
            <h1 style={{ color: "#fff" }}>Gallery</h1>
          </div>
        </div>
      </div>
    
     
  
    <div className="container">



      <section className="myGallery">
        <div className="titleSection">
          <h3>Browse our Gallery</h3>
        </div>
        <div className="filters filter-button-group">
          <ul>
            <li className="active">
              <a href="#all" onClick={() => filterItems('All')}>All</a>
            </li>
            <li>
              <a href="#room" onClick={() => filterItems('room')}>Room</a>
            </li>
            <li>
              <a href="#swimmingpool" onClick={() => filterItems('Swimmingpool')}>Swimming Pool</a>
            </li>
            <li>
              <a href="#events" onClick={() => filterItems('events')}>Events</a>
            </li>
            <li>
              <a href="#activities" onClick={() => filterItems('activity')}>Activities</a>
            </li>
          </ul>
        </div>

        {/* <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 col-xl-3 hero" style={{ marginBottom: "20px" }}>
              <div id="containergallery" className="isotope" style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <div className="grid-item" data-filter={item.category} data-page={1} style={{ left: 0, top: 0 }}>
                
  <Image
    
    src={item.imageUr1} alt="" style={{ marginBottom: "10px", maxWidth: "100%", alignSelf: "center" }} />
    <div className="overlay">{item.title}</div>

                  
                </div>
              </div>
            </div>
          ))}
        </div> */}

<Box>
      <ImageList variant="masonry" cols={4} gap={8}>
        {items.map((item) => (
          <ImageListItem key={item.img}>
            <Image
              srcSet={`${item.imageUr1}?w=248&fit=crop&auto=format&dpr=2 2x`}
              src={`${item.imageUr1}?w=248&fit=crop&auto=format`}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
      </section>
    </div>
    </>
  );
}

export default GalleryP;
