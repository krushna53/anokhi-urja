import React, { useState } from "react";
import logo from "../Images/anokhi-urja-New.png";
import "../css/navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";
export const Header = (props) => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <>
      <div>
        {props.data
          ? props.data.map((d, i) => (
              <nav key={`${d.name}-${i}`} className="navigation">
                <img src={logo} alt="logo" className="brand-name" />
                <button
                  className="hamburger"
                  onClick={() => {
                    setIsNavExpanded(!isNavExpanded);
                  }}
                >
                  <GiHamburgerMenu />
                </button>
                <div
                  className={
                    isNavExpanded
                      ? "navigation-menu expanded"
                      : "navigation-menu"
                  }
                >
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
                </div>
                <div className="navbar-contactbtn">
                  <button>Contact Us</button>
                </div>
              </nav>
            ))
          : "loading"}
      </div>
    </>
  );
};
