import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header";
import { Banner } from "./Components/Banner";
import { AboutUs } from "./Components/AboutUs";
import { Service } from "./Components/Service";
import { Awards } from "./Components/Awards";
import { OurProducts } from "./Components/OurProducts";
import { Blog } from "./Components/Blog";
import { Clientsection } from "./Components/Clientsection";
import { Contactform } from "./Components/Contactform";
import { ProductGallery } from "./Components/ProductGallery";
import { Footer } from "./Components/Footer";
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
      <div className="anokhiUrja-container">
          <Header data={landingPageData.Header}/>
          <Banner data={landingPageData.Banner}/>
          <AboutUs data={landingPageData.AboutUs}/>
          <Awards data={landingPageData.Awards}/>
          <OurProducts data={landingPageData.OurProducts}/>
          <ProductGallery data={landingPageData.ProductGallery}/>
          <Service data={landingPageData.Service}/>
          <Blog/>
          <Clientsection data={landingPageData.Clientsection}/>
          <Contactform data={landingPageData.Contactform}/>
          <Footer data={landingPageData.Footer}/>
          <div class="anokhiUrja-copy-right">
            <h2>Copyright © 2022 Anokhi Urja</h2>
        </div>
      </div>
    </>
  );
}

export default App;
