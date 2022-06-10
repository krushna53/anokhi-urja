import img from "../Images/image4.png";
export const OurProducts = (props) => {
  return (
    <>
      <div className="anokhiUrja-productSlider container-spacing" id="Product">
        <h2 className="commonTitleFontSize">Our Products</h2>
        <img class="ProductSlider-sectionLogo" src={img} alt="image4" />
        {props.data
          ? props.data.map((d, i) => (
            <div className=""></div>
          )): "loading"}
      </div>
    </>
  );
};
