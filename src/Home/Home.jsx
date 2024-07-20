import React from 'react'
import Banner from '../BannerSection/Banner'
import Services from '../Services/Services';
import Event from '../Event/Event';
import Activity from '../Activity/Activity';
import Testimonial from '../Testimonial/Testimonial';
import Youtube from '../Youtube/Youtube';
import Footer from '../Footer/Footer';
import Attraction from '../Attraction/Attraction';
import MetaTags from 'react-meta-tags';

import  { useLayoutEffect } from 'react'

function Home() {
  useLayoutEffect(()=>{
    window.scrollTo(0,0)
   })
  return (
    <>
    <MetaTags>
      <title>Farmhouse in Wada | Omkar Nature Farm</title>
        <meta title="Farmhouse in Wada | Omkar Nature Farm" />
        <meta
          name="description"
          content="Discover the charm of rural living at our picturesque Farmhouse in Wada. Nestled amidst serene landscapes, our farmhouse offers a tranquil retreat ."
        />
        <meta
          name="keywords"
          content="Farmhouse in Wada,Farmhouse in Wada for Family,Best Farmhouse in Wada,Farmhouse for Events in Wada,Farmhouse with Private Pool in Wada,Private Farmhouse in Wada,Farmhouse near Wada"
        />
        <link rel="canonical" href="https://omkarnaturefarm.in/Farmhouse in Wada" />
        <meta http-equiv="cache-control" content="no-cache" />
        <meta http-equiv="expires" content="0" />
        <meta http-equiv="pragma" content="no-cache" />
        <meta property="og:title" content="Farmhouse in Wada | Omkar Nature Farm" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://omkarnaturefarm.in/Farmhouse in Wada"/>
        <meta property="og:description" content="Discover the charm of rural living at our picturesque Farmhouse in Wada. Nestled amidst serene landscapes, our farmhouse offers a tranquil retreat " />
        <meta property="og:image" content="https://omkarnaturefarm.in/static/media/omkar-nature.87735681decd4a0e08d7.jpeg" />       
      </MetaTags>
    <Banner/>
   <Services/>
    <Event/>
    <Activity/>
    <Attraction/>
    <Testimonial/>
    {/* <Youtube/> */}
   <Footer/>
    </>
  )
}

export default Home
