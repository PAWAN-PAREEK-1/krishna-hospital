import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../Style/Navbar.css";
// import logo from "../Assets/img/logo.svg";
// import arrow from "../Assets/img/twoarrow.svg";
// import search from "../Assets/img/search.svg";


const Navbar = ({activeUrl}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>
      <div className="navbar ">
        <div className="logo">
          <img src={""} alt="" />
        </div>
        <nav>
          <div
            className={`menuIcon ${menuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
{}
          <ul className="NavbarList ">
            <li  className={activeUrl === "/" ? "active" : null}>
              <NavLink
                exact
                to="/"

                onClick={closeMenu}
              >
                Home
              </NavLink>
              <div></div>
            </li>
            <li className={activeUrl == "/About" ? "active" : null}>
              <NavLink to="/About"  onClick={closeMenu}>
                About Us
              </NavLink>
<div></div>
            </li>
            <li className={activeUrl == "/Pateint" ? "active" : null}>
              <NavLink to="/Pateint"  onClick={closeMenu}>
              Pateint
              </NavLink>
<div></div>
            </li>
            <li className={activeUrl == "/Facility" ? "active" : null}>
              <NavLink
                to="/Facility"
                // className="active"
                onClick={closeMenu}
              >
                Facility

              </NavLink>
<div></div>
            </li>
            <li className={activeUrl == "/Gallery" ? "active" : null}>
              <NavLink
                to="/Gallery"
                // className="active"
                onClick={closeMenu}
              >
                Gallery

              </NavLink>
              <div></div>
            </li>


            <li className={activeUrl == "/Blog" ? "active" : null}>
              <NavLink
                to="/Blog"
                // className="active"
                onClick={closeMenu}
              >
               Blog

              </NavLink>
              <div></div>
            </li>
            <li className={activeUrl == "/Contact" ? "active" : null}>
              <NavLink to="/Contact"  onClick={closeMenu}>
              Contact

              </NavLink>
              <div></div>
            </li>
          </ul>
        </nav>

        <div className="right-nav">
          <div className="search">
            <a href="">
              <img src={""} alt="" />
            </a>
          </div>
          <div className="quote-btn cursor-pointer">
            <a href="">Get Quotes <img src={""} alt="" /> </a>
          </div>
        </div>
      </div>
      {menuOpen && (
        <div className="mobileNav">
          <div className="closebtn" onClick={() => setMenuOpen(false)}>
            <img src="../public/assets/img/close.svg" alt="" />
          </div>
          <ul>
          <li>
              <NavLink
                exact
                to="/"
                className="active"
                onClick={closeMenu}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" className="active" onClick={closeMenu}>
                About us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Pateint"
                className="active"
                onClick={closeMenu}
              >
                Pateint
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Facility"
                className="active"
                onClick={closeMenu}
              >
                Facility
              </NavLink>
            </li>
            <li>
              <NavLink to="/Gallery" className="active" onClick={closeMenu}>
              Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/Blog" className="active" onClick={closeMenu}>
              Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contact"
                className="active"
                onClick={closeMenu}
              >
               Contact
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </div>
    //   <NavLink to="/Gallery" className="active" onClick={closeMenu}>
    //   Gallery
    // </NavLink>
  );
};

export default Navbar;
