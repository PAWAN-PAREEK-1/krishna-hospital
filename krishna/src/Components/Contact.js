import React from 'react'
import "../Style/Contact.css"
import contact from "../Assets/img/contact.svg";
import play from "../Assets/img/play.svg";

const Contact = () => {
  return (
    <div>
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

                    <div className="contact-left">
                        <img src={contact} alt="" />
                    </div>
                    <div className="contact-right contact-com">
                        <div className="contact-form">
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
                    </div>

                </div>
            </div>
        </div>

    </div>
  )
}

export default Contact