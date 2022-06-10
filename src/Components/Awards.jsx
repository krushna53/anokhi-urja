import img from "../Images/image4.png";
export const Awards = (props) => {
  return (
    <>
      <div className="anokhiUrja-awards container-spacing">
        <h2 class="commonTitleFontSize">Awards</h2>
        <img class="sectionLogo" src={img} alt="image4" />
        {props.data
          ? props.data.map((d, i) => (
              <div key={`${d.name}-${i}`} className="anokhiUrja-awards-flex">
                <div className="awards-image">
                  <img
                    src={d.awardimg1}
                    alt="ownerImage"
                    className="awards-img"
                    id="onwer"
                  />
                  <img
                    src={d.awardimg2}
                    alt="ownerImage"
                    className="awards-img"
                  />
                </div>
                <div className="awards-info">
                    <h3>{d.awardinfo}</h3>
                </div>
              </div>
            ))
          : "loading"}
      </div>
    </>
  );
};
