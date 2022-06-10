import React, { useState, useEffect } from "react";
import { AboutUs } from "./Components/AboutUs";
import { Service } from "./Components/Service";
import { Awards } from "./Components/Awards";
import { OurProducts } from "./Components/OurProducts";
import { Blog } from "./Components/Blog";
import { ProductGallery } from "./Components/ProductGallery";
import Jsondata from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import './css/style.css';

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

function App() {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(Jsondata);
  }, []);

  return (
    <>
      <div>
          <AboutUs data={landingPageData.AboutUs}/>
          <Awards data={landingPageData.Awards}/>
          {/* <OurProducts data={landingPageData.ourproducts}/> */}
          <ProductGallery data={landingPageData.ProductGallery}/>
          <Service data={landingPageData.Service}/>
          <Blog/>
      </div>
    </>
  );
}

export default App;
