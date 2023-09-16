import { lazy, Suspense } from 'react';
import contact from "../Assets/img/contact.svg";
import play from "../Assets/img/play.svg";
import cface from "../Assets/img/cface.svg";
import cinsta from "../Assets/img/cinsta.svg";
import clink from "../Assets/img/clink.svg";
import ctwitter from "../Assets/img/ctwitter.svg";
import conbg2 from "../Assets/img/conbg2.svg";
const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));
const Footer = lazy(() => import("../Components/Footer"));


const Contact = () => {
  return (

    <Suspense fallback={<div><Loading /></div>}>

      <Navbar activeUrl={"/Contact"} />

      <div>
        <div className="hero-all">
          <h2>Contact Us</h2>
        </div>

        <div className="index">
          <div className="index-contact">
            <div className="contact-up">
              <div className="med-top med-top2">
                <div className="span-box about-span ">
                  <div className="span-box-1 about-span-box med-span-box"></div>
                  <h3>Contact Us For Further Information !</h3>
                </div>
                <h1>Get In Touch</h1>
                <p>We at Krishna Hospital believe in making available High Quality, expert healthcare to people by inventing, adapting World's Best technologies and practices.</p>
              </div>
            </div>
            <div className="contact-bottom">

              <div className="contact-left contact-left-page">
                <img src={conbg2} alt="" />
              </div>
              <div className="contact-right">
                <div className="con">
                <div className="contact-form contact-form-page ">
                  <h2>Contact Us</h2>
                  <div className="inputs">
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Your Email' />
                    <input type="text" placeholder='Your Number' />
                    <textarea name="message" id="" cols="30" rows="5" placeholder='Enter your Message'></textarea>
                  </div>

                  <a href="">
                    <div className="all-btn blog-btn">
                      <h4>
                        Submit<img src={play} alt="" />
                      </h4>
                    </div>
                  </a>


                </div>

                <div className="social-fe">
                <div className="social-icons-conatct">

                  <div className="social-detail">
                  <h3>Mobile  Number</h3>
                  <h4>+1012 3456 789</h4>
                  </div>
                  <div className="social-detail de">
                  <h3>Email</h3>
                  <h4>demo@gmail.com</h4>
                  </div>
                  <div className="social-detail de">
                  <h3>Address</h3>
                  <h4>132 Dartmouth Street Boston, Massachusetts 02156 United States</h4>
                  </div>

                  </div>

                  <div className="social-2">
                    <h2>Social icons</h2>

                    <div className="social-links">
                      <img src={cface} alt="" />
                      <img src={cinsta} alt="" />
                      <img src={clink} alt="" />
                      <img src={ctwitter} alt="" />
                    </div>

</div>
                  </div>




                </div>

              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>

    </Suspense>
  )
}

export default Contact