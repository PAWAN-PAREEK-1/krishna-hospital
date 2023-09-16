import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import "../Style/Footer.css";
import logo from "../Assets/img/logo2.svg";
// import fbg from "../Assets/img/fbg.svg";
// import fbg2 from "../Assets/img/fbg2.svg";
import fface from "../Assets/img/fface.svg";
import finsta from "../Assets/img/Finsta.svg";
import flink from "../Assets/img/flink.svg";
import ftwitter from "../Assets/img/ftwitter.svg";
import flocation from "../Assets/img/flocation.svg";
import fcall from "../Assets/img/fcall.svg";
import fbag from "../Assets/img/fbag.svg";

const Footer = () => {
  return (
    <div>
      <div className="index-footer">
        <footer>
          <div className="col-1">
            <img src={logo} alt="" />

            <div className="f-social">
              <img src={fface} alt="" />
              <img src={finsta} alt="" />
              <img src={flink} alt="" />
              <img src={ftwitter} alt="" />
            </div>
          </div>
          <div className="col-main">
            <div className="col-2">
              <h1>Quick Links</h1>
              <Link to="/About">About Us</Link>
              <Link to="/">Our Doctors</Link>
              <Link to="/Pateint">Patient & Visitors</Link>
              <Link to="/Facility">Facility</Link>
              <Link to="/Blog">Blog</Link>
              <Link to="/Contact">Contact Us</Link>
            </div>
            <div className="col-2">
            <h1>Support</h1>
              <Link to="/">Privacy policy</Link>
              <Link to="/">Terms & Condition</Link>
              <Link to="/">Faq</Link>


            </div>
            <div className="col-2">
              <h1>Contact Us</h1>

              <a href=""><h2> <img src={fcall} alt="" />9825300424  9714533633</h2></a>
              <a href=""><h2> <img src={fbag} alt="" />info@domain.com</h2></a>
              <a href=""><h2> <img src={flocation} alt="" />Shubham Residency, opp. Sardar <br /> Patel Park, Parvat Patiya Surat.</h2></a>

            </div>
          </div>
        </footer>

        <div className="copy">
          <h2>Copyright © 2023 FloralTech. All rights reserved.</h2>
        </div>
      </div>
    </div>
  )
}

export default Footer;
