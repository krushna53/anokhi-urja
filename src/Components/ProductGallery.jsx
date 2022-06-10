import img from "../Images/image4.png";
export const ProductGallery = (props) => {
  return (
    <>
      <div className="anokhiUrja-gallery">
        <h2 className="commonTitleFontSize">PRODUCT-GALLERY</h2>
        <img class="sectionLogo" src={img} alt="Image54" />
        {props.data
          ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="gallery-contenar">
                <div class="gallery-image">
                  <img src={d.img1} alt="powerbox1" />
                </div>
                <div class="gallery-image">
                  <img src={d.img2} alt="powerbox1" />
                </div>
                <div class="gallery-image">
                  <img src={d.img3} alt="powerbox1" />
                </div>
                <div class="gallery-image">
                  <img src={d.img4} alt="powerbox1" />
                </div>
                <div class="gallery-image">
                  <img src={d.img4} alt="powerbox1" />
                </div>
                <div class="gallery-image">
                  <img src={d.img4} alt="powerbox1" />
                </div>
                <div class="gallery-image">
                  <img src={d.img4} alt="powerbox1" />
                </div>
                <div class="gallery-image">
                  <img src={d.img4} alt="powerbox1" />
                </div>
              </div>
            ))
          : "loading"}
      </div>
    </>
  );
};
