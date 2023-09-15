import React from 'react'
import "../Style/Attachment.css";
import a1 from "../Assets/img/s4.svg";
import a2 from "../Assets/img/a3.svg";
import a3 from "../Assets/img/a2.svg";
import a4 from "../Assets/img/a1.svg";

const Attachment = () => {
  return (
    <div>
        <div className="index">
        <div className="med-top med-top2">
              <div className="span-box about-span ">
                <div className="span-box-1 about-span-box med-span-box"></div>
                <h3>Latest Insights</h3>
              </div>
              <h1>Attachments</h1>
                </div>

                <div className="com">

                <img src={a1} alt="" />
                <img src={a2} alt="" />
                <img src={a3} alt="" />
                <img src={a4} alt="" />
                </div>
        </div>
    </div>
  )
}

export default Attachment