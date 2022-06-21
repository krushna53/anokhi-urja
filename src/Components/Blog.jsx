import img from "../Images/image4.png";
import Iframe from 'react-iframe';
export const Blog = (props) => {
  return (
    <>
      <div className="commonWidth container-spacing" id="video">
        <div id="BlogSection">
        <h2>VIDEO SECTION</h2>
                <img src={img} alt="image4"/>
                <div className="flex-container">
                    <div className="flex-item-left"><Iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="" frameborder="0" height="315"
                            src="https://www.youtube.com/embed/a1pv0zI2rhc?start=10" title="YouTube video player"
                            width="600"></Iframe>
                    </div>

                    <div className="flex-item-right"><Iframe
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen="" frameborder="0" height="315"
                            src="https://www.youtube.com/embed/JA0MCi8mWX0?start=25" title="YouTube video player"
                            width="600"></Iframe>
                    </div>
                </div>
        </div>
      </div>
    </>
  );
};
