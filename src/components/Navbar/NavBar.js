import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../../css/navbar.css";
import logo from "../../images/weblogo.png"
function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <img src= {logo} className="nav-teamlogo" width="70" height="50" alt='Senior Design Logo' />
          <NavLink exact to="/color" className="nav-logo">
            LightHouse
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            {/* <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/about"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                About
              </NavLink>
            </li> */}
            <li className="nav-item">
              <NavLink
                exact
                to="/color"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Color
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/pattern"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Pattern
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
