import { lazy, Suspense } from "react";
import "../Style/Home.css";
import "../Style/Global.css";
import hero from "../Assets/img/hero-main.svg";
import play from "../Assets/img/play.svg";
import facebook from "../Assets/img/facebook.svg";
import insta from "../Assets/img/insta.svg";
import twitter from "../Assets/img/teitter.svg";
import link from "../Assets/img/link.svg";
import done from "../Assets/img/done.svg";
import person from "../Assets/img/person.svg";

const Loading = lazy(() => import("../Components/Loading"));
const Navbar = lazy(() => import("../Components/Navbar"));
const About = lazy(() => import("../Components/About"));
const Medical = lazy(() => import("../Components/Medical"));
const Working = lazy(() => import("../Components/Working"));
const Gallery = lazy(() => import("../Components/Gallery"));
const Blog = lazy(() => import("../Components/Blog"));
const Price = lazy(() => import("../Components/Price"));
const Insurance = lazy(() => import("../Components/Insurance"));
const Contact = lazy(() => import("../Components/Contact"));
const Attachment = lazy(() => import("../Components/Attachment"));



const Home = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <Navbar activeUrl={"/"} />

      <div>
        <div className="main-index">
          <div className="index-social">
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={insta} alt="" />
            </a>
            <a href="">
              <img src={twitter} alt="" />
            </a>
            <a href="">
              <img src={link} alt="" />
            </a>
            <hr />
          </div>
          <div className="hero-index">
            <div className="hero-left">
              <div className="span-box index-span">
                <div className="span-box-1"></div>
                <h3>krishna Hospital</h3>
              </div>
              <h1>Good Health is Our Promise!</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nec
                sapien ut felis finibus efficitur non id libero. Donec dignissim
                ornare enim.
              </p>
              <a href="">
                <div className="all-btn">
                  <h4>
                    Make an appointment <img src={play} alt="" />
                  </h4>
                </div>
              </a>
            </div>
            <div className="hero-right">
              <img src={hero} alt="" />
              <div className="index-box">
                <div className="index-box-left">
                  <img src={done} alt="" />
                </div>
                <div className="index-box-right">
                  <h3>Book an appointment</h3>
                  <h5>Online appointment</h5>
                </div>
              </div>
              <div className="index-box2">
                <div className="index-box-left">
                  <img src={person} alt="" />
                </div>
                <div className="index-box-right2">
                  <h3>24 Hour Doctor</h3>
                  <h5>Specialist</h5>
                </div>
              </div>
            </div>
          </div>
        </div>

        <About/>
        <Medical/>
        <Working/>
        <Gallery/>
        <Blog/>
        <Price/>
        <Insurance/>
        <Contact/>
        <Attachment/>
      </div>
    </Suspense>
  );
};

export default Home;
