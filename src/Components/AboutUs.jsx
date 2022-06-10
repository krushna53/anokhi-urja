import img from "../Images/image4.png";
export const AboutUs = (props) => {
    return (
        <div id="aboutus" className="anokhiUrja-AboutUs container-spacing">
            <h2 class="commonTitleFontSize">About Us</h2>
            <img class="sectionLogo" src={img} alt="image4"></img>
            {props.data
                ? props.data.map((d, i) => (
                    <div
                        key={`${d.name}-${i}`}
                        className="anokhiUrja-AboutUs-flex">
                        {" "}
                        <div class="AboutUs-info">
                            <h3>{d.subheading}</h3>
                            <p>{d.paragraph}</p>
                        </div>
                        <div class="aboutus-image">
                            <img
                                src={d.aboutusImage}
                                alt="solar-panels"
                                class="solar-img"
                            />
                        </div>
                    </div>
                ))
                : "loading"}
        </div>
    );
};
