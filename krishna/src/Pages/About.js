import { lazy, Suspense } from "react";
import hero from "../Assets/img/apagemain.svg";
import con from "../Assets/img/confi.svg";
import cal from "../Assets/img/cal.svg";
import time from "../Assets/img/time.svg";
import heart from "../Assets/img/heart.svg";
import d1 from "../Assets/img/d1.svg";
import d2 from "../Assets/img/d2.svg";
import "../Style/About.css";

import "../Style/Global.css";
const Loading = lazy(() => import("../Components/Loading"));
const Navbar = lazy(() => import("../Components/Navbar"));
const Footer = lazy(() => import("../Components/Footer"));

const About = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <Navbar activeUrl={"/About"} />

      <div>
        <div className="hero-all">
          <h2>About Us</h2>
        </div>

        <div className="about-page index">
          <div className="about-main">
            <div className="about-left">
              <div className="span-box about-span">
                <div className="span-box-1 about-span-box"></div>
                <h3>High Quality Patient Care</h3>
              </div>

              <h1>About Us</h1>
              <p>
                Krishna Medical Hospital and ICU was set with the aim of giving
                the best care to all its patients. The objective is to ensure
                that the patient is looked after until he is completely healthy
                and recovered. Nothing comes above the care of the patient. We
                wish to provide our services of utmost care in the most
                affordable, cost-effective way. To do so, the critical care unit
                at Krishna Medical Hospital has its faculty at the side of the
                patients who are in life-threatening situations or require
                intensive care. We also see that a team of experienced
                physicians, doctors and surgeons are there to keep track of the
                patient’s medical condition. Our team is compassionate and puts
                high-quality patient care above all.
              </p>
            </div>
            <div className="about-right">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
        <div className="about-box about-box-page">
          <div className="about-box-1">
            <img src={con} alt="" />
            <div className="about-right-box">
              <h4>Confidential</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
              </p>
            </div>
          </div>
          <div className="about-box-1">
            <img src={heart} alt="" />
            <div className="about-right-box">
              <h4>Comfortable To Use</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
              </p>
            </div>
          </div>
          <div className="about-box-1">
            <img src={time} alt="" />
            <div className="about-right-box">
              <h4>24 Hour Services</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
              </p>
            </div>
          </div>
          <div className="about-box-1">
            <img src={cal} alt="" />
            <div className="about-right-box">
              <h4>Flexible</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam.
              </p>
            </div>
          </div>
        </div>

        <div className="about-doc">
          <div className="doc-box">
            <img src={d1} alt="" />

            <div className="doc-detail">
              <h2>Dr. Karsan V. Nandaniya</h2>
              <h4>M.D (Medicine)</h4>
              <h3>Diploma In Critical Care (MUMBAI)</h3>
              <h3>Consultant Physician and Intensivist</h3>
            </div>
          </div>

          <div className="doc-box">
            <img src={d2} alt="" />

            <div className="doc-detail">
              <h2>Dr. Gopan S. Baldaniya</h2>
              <h4>M.B, D.T.C.D</h4>
              <h3>Consultant TB and Chest Physician</h3>
            </div>
          </div>
        </div>



        <Footer/>
      </div>
    </Suspense>
  );
};

export default About;
