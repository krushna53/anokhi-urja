import img from "../Images/image4.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarker,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
export const Contactform = (props) => {
  return (
    <>
      <div className="anokhiUrja-contactform container-spacing" id="contactus">
        <h2>Contact Us</h2>
        <img src={img} alt="image4" className="sectionLogo" />
        {props.data
          ? props.data.map((d, i) => (
              <div className="contact-container">
                <div className="content">
                <div className="get-in-touch">
                  <div className="address details">
                    <FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon>
                    <div className="sub-topic">Address</div>
                    <p>{d.location}</p>
                  </div>
                  <div className="phone details">
                    <FontAwesomeIcon icon={faPhone}></FontAwesomeIcon>
                    <div className="sub-topic">Phone</div>
                    <p>{d.mobile}</p>
                  </div>
                  <div className="email details">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    <div className="sub-topic">Email</div>
                    <p>{d.email}</p>
                  </div>
                </div>
                <div className="contact-form">
                  <div className="sub-topic-text">Connect With Us</div>
                  <p>{d.message}</p>
                  <form action="#">
                    <div class="inputBox">
                      <input
                        type="text"
                        name="Name"
                        id="Name"
                        autofocus="autofocus"
                        placeholder="Your Name"
                        required="required"
                        className="field-name"
                      />
                    </div>
                    <div class="inputBox">
                      <input
                        type="email"
                        name="email"
                        id="Email"
                        autofocus="autofocus"
                        placeholder="Your Email"
                        required="required"
                        className="field-email"
                      />
                    </div>
                    <div class="inputBox">
                      <input
                        type="number"
                        name="Mobile"
                        id="Mobile"
                        autofocus="autofocus"
                        placeholder="Your Mobile"
                        required="required"
                        className="field-mobile"
                      />
                    </div>
                    <div class="inputBox">
                      <button type="button" name="Submit" id="submit" className="submit-btn" value="Submit">Submit</button>
                    </div>
                  </form>
                </div>
                </div>
              </div>
            ))
          : "loading"}
      </div>
    </>
  );
};
