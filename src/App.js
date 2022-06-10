import React, { useState, useEffect } from "react";
import { AboutUs } from "./Components/AboutUs";
import { Service } from "./Components/Service";
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
          <Service data={landingPageData.Service}/>
      </div>
    </>
  );
}

export default App;
