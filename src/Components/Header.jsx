import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';
export const Header = (props) => {
  const [isMobile, setIsMobile] = useState(true);
  return (
    <>
      <div>
        {props.data
          ? props.data.map((d, i) => (
              <div className="anokhiUrja-header gridspaceWithCenter" id="Home">
                <div key={`${d.name}-${i}`} className="anokhiUrja-logo">
                  <a href="#Home">
                    <img src={d.logo} alt="logo" />
                  </a>
                </div>

                <div className={isMobile ? "anokhiUrja-navbar-mobile" : "anokhiUrja-navbar"} onClick={() => setIsMobile(false)}>
                  <ul>
                    {d.menuItems
                      ? d.menuItems.map((item) => {
                          return (
                            <li key={item.id}>
                              <a href={item.id}>{item.name}</a>
                            </li>
                          );
                        })
                      : "loading"}
                  </ul>
                  <button className="mobile-menu">{isMobile ? <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> : <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>}</button>
                </div>
                <div className="anokhiUrja-Con-button">
                  <button id="contact-popup">Contact Us</button>
                </div>
              </div>
            ))
          : "loading"}
      </div>
    </>
  );
};
