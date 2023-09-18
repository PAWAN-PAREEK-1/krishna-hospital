import React from "react";
import "../Style/Insurance.css";
import "../Style/Global.css";
import i1 from "../Assets/img/i1.svg";
import i2 from "../Assets/img/i2.svg";
import i3 from "../Assets/img/i3.svg";
import i4 from "../Assets/img/i4.svg";
import i5 from "../Assets/img/i5.svg";
import i6 from "../Assets/img/i6.svg";
import i7 from "../Assets/img/i7.svg";
import i8 from "../Assets/img/i8.svg";

const Insurance = () => {
  return (
    <div>
        <div className="insurance">
      <div className="index">
        <div className="index-ins">
          <div className="ins-up">
            <div className="med-top med-top2">
              <div className="span-box about-span ">
                <div className="span-box-1 about-span-box med-span-box"></div>
                <h3 className="mobile-h3">Latest Insights</h3>
              </div>
              <h1 className="mobile-h1">Mediclaim (Insurance) Facility</h1>
            </div>
          </div>
          <div className="ins-bottom">
          <div className="ins-box">
            <img src={i1} alt="" />
            <h1>HDFC ERGO General</h1>
         </div>
         <div className="ins-box">
            <img src={i2} alt="" />
            <h1>TATA AIG Insurance</h1>
         </div>
         <div className="ins-box">
            <img src={i3} alt="" />
            <h1>Birla Sun Life Insurance</h1>
         </div>
         <div className="ins-box">
            <img src={i4} alt="" />
            <h1>Apollo Munich</h1>
         </div>
         <div className="ins-box">
            <img src={i5} alt="" />
            <h1>Cholamandalam MS</h1>
         </div>
         <div className="ins-box">
            <img src={i6} alt="" />
            <h1>IFFCO Tokio General</h1>
         </div>
         <div className="ins-box">
            <img src={i7} alt="" />
            <h1>Religare Health Insurance</h1>
         </div>
         <div className="ins-box">
            <img src={i8} alt="" />
            <h1>New India Assurance</h1>
         </div>
         </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Insurance;
