import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faY } from '@fortawesome/free-solid-svg-icons'
import { faYoutube, faWhatsapp, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
export const Footer = (props) => {
  return (
    <>
      <footer>
      {props.data
          ? props.data.map((d, i) => (
            <div className="anokhiUrja-Footer">
                <div>
                    <img src={d.footerlogo} alt="logo" class="footer-logo" />
                </div>
                <div className="left box">
                    <h3>{d.subheading1}</h3>
                    <div className="content">
                    <ul>
                            <li><a href="#aboutus">{d.quicklink1}</a></li>
                            <li><a href="#contactUs">{d.quicklink2}</a></li>
                            <li><a href="#service">{d.quicklink3}</a></li>
                            <li><a href="#Product">{d.quicklink4}</a></li>
                        </ul>
                    </div>
                </div>
                <div className="middle box">
                    <h3>{d.subheading2}</h3>
                    <div className="social-media content">
                        <FontAwesomeIcon className='social-media-icons' icon={faFacebook}></FontAwesomeIcon>
                        <FontAwesomeIcon className='social-media-icons' icon={faInstagram}></FontAwesomeIcon>
                        <FontAwesomeIcon className='social-media-icons' icon={faYoutube}></FontAwesomeIcon>
                        <FontAwesomeIcon className='social-media-icons' icon={faWhatsapp}></FontAwesomeIcon>
                    </div>
                </div>
                <div className="right box">
                    <h3>{d.subheading3}</h3>
                    <div className="content">
                        <h4>{d.addressh}</h4>
                        <p>{d.address}</p>
                        
                    </div>
                </div>
            </div>
          )) : "loading"}
      </footer>
    </>
  );
};
