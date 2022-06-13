import img from "../Images/image4.png";

export const ImageSlider = (props) => {
  return (
    <>
      <div className="anokhiUrja-productSlider container-spacing" id="Product">
        <h2 className="commonTitleFontSize">Our Products</h2>
        <img class="sectionLogo" src={img} alt="image4" />
        {props.data
          ? props.data.map((d, i) => (
              <div></div>
            ))
          : "loading"}
      </div>
    </>
  );
};
