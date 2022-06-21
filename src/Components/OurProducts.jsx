import img from "../Images/image4.png";
export const OurProducts = (props) => {
  return (
    <>
      <div className="anokhiUrja-productContainer container-spacing" id="product">
        <h2 className="commonTitleFontSize">Our Products</h2>
        <img src={img} alt="image4" className="sectionLogo" />
        {props.data
          ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="product-container"> 
                <div className="image-container">
                  <img src={d.img1} alt="product" className="product-img" />
                </div>
                <div className="image-container">
                  <img src={d.img2} alt="product" className="product-img" />
                </div>
                <div className="image-container">
                  <img src={d.img1} alt="product" className="product-img" />
                </div>
              </div>
            ))
          : "loading"}
      </div>
    </>
  );
};
