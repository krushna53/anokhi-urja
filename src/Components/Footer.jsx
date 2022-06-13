import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Iframe from 'react-iframe';
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
                        <Iframe
                            url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3766.0547613618965!2d72.87335551421596!3d19.279984650540563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b15c15ec2309%3A0x1461ffd3b399ae26!2sAnokhi%20Urja!5e0!3m2!1sen!2sin!4v1653031342175!5m2!1sen!2sin"
                            height="260" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"/>
                    </div>
                </div>
            </div>
          )) : "loading"}
      </footer>
    </>
  );
};
