import React from "react";
import "../Style/About.css";

import con from "../Assets/img/confi.svg";
import cal from "../Assets/img/cal.svg";
import time from "../Assets/img/time.svg";
import heart from "../Assets/img/heart.svg";
import hero from "../Assets/img/about-main.svg";
import play from "../Assets/img/play.svg";

const About = () => {
  return (
    <div>
      <div className="index">
        <div className="about-main">
          <div className="about-left">
            <div className="span-box about-span">
              <div className="span-box-1 about-span-box"></div>
              <h3>High Quality Patient Care</h3>
            </div>

            <h1>About Us</h1>
            <p>Krishna Medical Hospital and ICU was set with the aim of giving the best care to all its patients. The objective is to ensure that the patient is looked after until he is completely healthy and recovered.</p>
            <div className="about-box">
                <div className="about-box-1">
                        <img src={con} alt="" />
                    <div className="about-right-box">
                            <h4>Confidential</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.</p>
                    </div>
                </div>
                <div className="about-box-1">
                        <img src={heart} alt="" />
                    <div className="about-right-box">
                            <h4>Comfortable To Use</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.</p>
                    </div>
                </div>
                <div className="about-box-1">
                        <img src={time} alt="" />
                    <div className="about-right-box">
                            <h4>24 Hour Services</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.</p>
                    </div>
                </div>
                <div className="about-box-1">
                        <img src={cal} alt="" />
                    <div className="about-right-box">
                            <h4>Flexible</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.</p>
                    </div>
                </div>

            </div>

            <a href="">
                <div className="all-btn">
                  <h4>
                  View More <img src={play} alt="" />
                  </h4>
                </div>
              </a>
          </div>
          <div className="about-right"></div>
          <img src={hero} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
