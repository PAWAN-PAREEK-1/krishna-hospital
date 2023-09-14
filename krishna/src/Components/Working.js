import React from "react";
import "../Style/About.css";
import "../Style/Work.css";
import work from "../Assets/img/work.svg";
import wtime from "../Assets/img/wtime.svg";
import wcall from "../Assets/img/wcall.svg";

const Working = () => {
  return (
    <div>
      <div className="index">
        <div className="work-index">
          <div className="work-left">
            <img src={work} alt="" />

            <h3>Working Hour</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              est urna, viverra et malesuada nec, euismod ut ante. Donec sapien
              nibh, blandit id turpis non, rutrum sagittis justo. Integer non
              varius lacus.
            </p>
            <div className="work-time">
              <h4>Mon-Sat</h4>
              <h4>
                <img src={wtime} alt="" />
                10:00AM - 1:00PM
              </h4>
            </div>

            <hr />
            <div className="work-time">
              <h4>Mon-Sat</h4>
              <h4>
                <img src={wtime} alt="" />
                10:00AM - 1:00PM
              </h4>
            </div>
            <a href="">
              <div className="all-btn work-btn">
                <h4>
                  <img src={wcall} alt="" /> Book Appointment
                </h4>
              </div>
            </a>
          </div>
          <div className="work-right">
                <div className="work-box">
                    <h2>Advanced Facilities</h2>
                    <p>Medical hospitals have one of the most advanced treatment facilities dedicated to medicine. These facilities aid in medical research and innovation. The critical care facilities are said to be one of the largest and most advanced units in the region, giving medical and post-surgical patients the best care there is.</p>
                </div>
                <div className="work-box wbox2">
                    <h2>Advanced Facilities</h2>
                    <p>Medical hospitals have one of the most advanced treatment facilities dedicated to medicine. These facilities aid in medical research and innovation. The critical care facilities are said to be one of the largest and most advanced units in the region, giving medical and post-surgical patients the best care there is.</p>
                </div>
                <div className="work-box wbox3">
                    <h2>Advanced Facilities</h2>
                    <p>Medical hospitals have one of the most advanced treatment facilities dedicated to medicine. These facilities aid in medical research and innovation. The critical care facilities are said to be one of the largest and most advanced units in the region, giving medical and post-surgical patients the best care there is.</p>
                </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Working;
