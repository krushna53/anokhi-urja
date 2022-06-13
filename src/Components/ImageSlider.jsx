import img from "../Images/image4.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const ImageSlider = (props) => {
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: false,
  };

  return (
    <>
      <div className="anokhiUrja-productSlider container-spacing" id="Product">
        <h2 className="commonTitleFontSize">Our Products</h2>
        <img class="sectionLogo" src={img} alt="image4" />
        {props.data
          ? props.data.map((d, i) => (
              <Slider>
                <div key={`${d.id}-${i}`} className="slider product-slider">
                  <div>
                    <div className="sliderImageWrapper">
                      <img src={d.image} alt="" className="sliderimg" />
                    </div>
                  </div>
                </div>
              </Slider>
            ))
          : "loading"}
      </div>
    </>
  );
};
