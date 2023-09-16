import React from 'react';
import { lazy, Suspense } from 'react';
import "../Style/Medical.css";
import "../Style/Global.css";
import bad from "../Assets/img/bad.svg";
import arrow from "../Assets/img/arrow.svg";
import time from "../Assets/img/24.svg";
import dig from "../Assets/img/dig.svg";
import build from "../Assets/img/build.svg";
import play from "../Assets/img/play.svg";

const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));
const Footer = lazy(() => import("../Components/Footer"));

const medBoxData = [
  {
    title: "I.C.U equipped..",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec sapien ut felis finibus.",
    imgSrc: bad,
  },
  {
    title: "24 Hours Emergency",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec sapien ut felis finibus.",
    imgSrc: time,
  },
  {
    title: "Mediclaim facility ava..",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec sapien ut felis finibus.",
    imgSrc: build,
  },
  {
    title: "Diagnosis..",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec sapien ut felis finibus.",
    imgSrc: dig,
  },
  {
    title: "I.C.U equipped..",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec sapien ut felis finibus.",
    imgSrc: bad,
  },
  {
    title: "24 Hours Emergency",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec sapien ut felis finibus.",
    imgSrc: time,
  },
  {
    title: "Mediclaim facility ava..",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec sapien ut felis finibus.",
    imgSrc: build,
  },
  {
    title: "Diagnosis..",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec sapien ut felis finibus.",
    imgSrc: dig,
  },
];

const Facility = () => {
  return (
    <Suspense fallback={<div><Loading /></div>}>
      <Navbar activeUrl={"/Facility"} />
      <div>
        <div className="hero-all">
          <h2>Facility</h2>
        </div>
        <div className="index">
          <div className="med-index">
            <div className="med-top">
              <div className="span-box about-span ">
                <div className="span-box-1 about-span-box med-span-box"></div>
                <h3>Medical Infrastructure List</h3>
              </div>
              <h1>Health Facilities</h1>
              <p>Krishna Hospital has been a one-stop place for all health issues.</p>
            </div>
            <div className="med-bottom med-bottom-page ">
              {medBoxData.map((box, index) => (
                <a href="/" key={index}>
                  <div className="med-box med-box-page">
                    <h2>{box.title}</h2>
                    <p>{box.description}</p>
                    <img src={box.imgSrc} alt="" id="med-top-img" />
                    <img src={arrow} alt="" id="med-bottom-img" className="hover-image" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Suspense>
  );
};

export default Facility;
