import img from "../Images/image4.png";
export const Blog = (props) => {
  return (
    <>
      <div className="commonWidth mainbox container-spacing" id="video">
        <div id="BlogSection">
        <h2 className="commonTitleFontSize">VIDEO SECTION</h2>
                <img className="sectionLogo" src={img} alt="image4"/>
                <div className="flex-container">
                    <div className="flex-item-left"><iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="" frameborder="0" height="315"
                            src="https://www.youtube.com/embed/a1pv0zI2rhc?start=10" title="YouTube video player"
                            width="600"></iframe>
                    </div>

                    <div className="flex-item-right"><iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="" frameborder="0" height="315"
                            src="https://www.youtube.com/embed/JA0MCi8mWX0?start=25" title="YouTube video player"
                            width="600"></iframe>
                    </div>
                </div>
        </div>
      </div>
    </>
  );
};
