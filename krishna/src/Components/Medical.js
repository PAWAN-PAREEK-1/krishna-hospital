import React from "react";
import "../Style/Medical.css";
import "../Style/Global.css";
import bad from "../Assets/img/bad.svg";
import arrow from "../Assets/img/arrow.svg";
import time from "../Assets/img/24.svg";
import dig from "../Assets/img/dig.svg";
import build from "../Assets/img/build.svg";
import play from "../Assets/img/play.svg";

const Medical = () => {
  return (
    <div>
      <div className="index">
        <div className="med-index">
          <div className="med-top">
            <div className="span-box about-span ">
              <div className="span-box-1 about-span-box med-span-box"></div>
              <h3>Medical Infrastructure List</h3>

            </div>
            <h1>Health Facilities</h1>
            <p>Krishna Hospital have been a one stop put for all health issues.</p>
          </div>
          <div className="med-bottom">

          <a href=""><div className="med-box">
            <h2>I.C.U equipped..</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec sapien ut felis finibus.</p>
            <img src={bad} alt="" id="med-top-img" />
            <img src={arrow} alt="" id="med-bottom-img" class="hover-image" />
          </div></a>
          <a href=""><div className="med-box">
            <h2>24 Hours Emergency</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec sapien ut felis finibus.</p>
            <img src={time} alt="" id="med-top-img" />
            <img src={arrow} alt="" id="med-bottom-img" class="hover-image" />
          </div></a>
          <a href=""><div className="med-box">
            <h2>Mediclaim facility ava..</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec sapien ut felis finibus.</p>
            <img src={build} alt="" id="med-top-img" />
            <img src={arrow} alt="" id="med-bottom-img" class="hover-image" />
          </div></a>
          <a href=""><div className="med-box">
            <h2>Diagnosis..</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec sapien ut felis finibus.</p>
            <img src={dig} alt="" id="med-top-img" />
            <img src={arrow} alt="" id="med-bottom-img" class="hover-image" />
          </div></a>
          </div>

          <a href="">
                <div className="all-btn">
                  <h4>
                  View More <img src={play} alt="" />
                  </h4>
                </div>
              </a>
        </div>
      </div>
    </div>
  );
};

export default Medical;
