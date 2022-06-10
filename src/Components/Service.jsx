import img from "../Images/image4.png";
export const Service = (props) => {
  return (
    <>
      <div id="service" className="commonWidth container-spacing anokhi-urja-service-section">
        <div className="anokhi-urja-servicewrapper">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="anokhi-urja-service">
                  <h2 class="commonTitleFontSize">OUR SERVICES</h2>
                  <img class="sectionLogo" src={img} alt="image4"></img>
                  <div className="subtext">{d.subheading}</div>
                  <div className="anokhi-urja-blogsection">
                      <div className="blogs">
                          <img src={d.cardimage1} alt="cardImage"/>
                          <h2>{d.cardheading1}</h2>
                          <p className="blogText">{d.cardinfo1}</p>
                      </div>
                      <div className="blogs">
                          <img src={d.cardimage2} alt="cardImage"/>
                          <h2>{d.cardheading2}</h2>
                          <p className="blogText">{d.cardinfo2}</p>
                      </div>
                      <div className="blogs">
                          <img src={d.cardimage3} alt="cardImage"/>
                          <h2>{d.cardheading3}</h2>
                          <p className="blogText">{d.cardinfo3}</p>
                      </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </>
  );
};
