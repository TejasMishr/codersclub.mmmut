import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import logo from "../assets/dsc_logo.png";
import "./Navbar.css";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMoblileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  return (
    <>
      <IconContext.Provider value={{ color: " gray" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <NavLink
              to="/GDSC-BIET-Website/"
              className="navbar-logo"
              onClick={closeMoblileMenu}
            >
              <img className="logo_img" src={logo} alt="GDSC logo" /> GDSC BIET
            </NavLink>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/GDSC-BIET-Website/"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                  aria-current="page"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/GDSC-BIET-Website/event"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Events
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/GDSC-BIET-Website/projects"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/GDSC-BIET-Website/team"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Team
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  activeClassName="active_menu"
                  to="/GDSC-BIET-Website/contact"
                  className="nav-links"
                  onClick={closeMoblileMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}
