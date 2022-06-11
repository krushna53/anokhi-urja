import img from "../Images/image4.png";
import { useState } from "react";
import { FaArrowAltCircleRight ,FaArrowAltCircleLeft } from 'react-icons/fa'
export const ImageSlider = (props) => {
    const [current, setCurrent] = useState(0);
    const length = props.length;

    const nextSlide = () => {
        setCurrent(current === length -1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
  return (
    <>
      <div className="Slider">
        {/* <h2 className="commonTitleFontSize">Our Products</h2>
        <img className="sectionLogo" src={img} alt="image4"/> */}
        <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}/>
        <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide}/>
        {props.data
          ? props.data.map((d, index) => (
            <div className={index === current ? 'slide active' : 'slide'}>
                {index === current && (
                <img className="slider-img" src={d.image} alt="sliderImage"/>
            )}
            </div>
          )): "loading"}
      </div>
    </>
  );
};
