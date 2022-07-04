import React from "react";
import img from "../Images/image4.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export const Clientsection = (props) => {
  return (
    <div id="aboutus" className="anokhiUrja-AboutUs container-spacing">
      <h2 class="commonTitleFontSize">Clients Says</h2>
      <img class="sectionLogo" src={img} alt="image4"></img>
      {props.data
        ? props.data.map((d, i) => (
            <div key={`${d.name}-${i}`}>
              <Swiper
                slidesPerView={2}
                spaceBetween={30}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="client-div">
                    <div className="client-img">
                      <img src={d.image1} alt="client" />
                    </div>
                    <div className="client-comment">
                      <p>{d.comment}</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-div">
                    <div className="client-img">
                      <img src={d.image1} alt="client" />
                    </div>
                    <div className="client-comment">
                      <p>{d.comment}</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-div">
                    <div className="client-img">
                      <img src={d.image1} alt="client" />
                    </div>
                    <div className="client-comment">
                      <p>{d.comment}</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-div">
                    <div className="client-img">
                      <img src={d.image1} alt="client" />
                    </div>
                    <div className="client-comment">
                      <p>{d.comment}</p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="client-div">
                    <div className="client-img">
                      <img src={d.image1} alt="client" />
                    </div>
                    <div className="client-comment">
                      <p>{d.comment}</p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          ))
        : "loading"}
    </div>
  );
};
