import React from 'react'
import "../Style/Price.css";

const Price = () => {
  return (
    <div>
        <div className="index">
            <div className="main-price">
                <div className="price-up">
                <div className="med-top med-top2">
              <div className="span-box about-span ">
                <div className="span-box-1 about-span-box med-span-box"></div>
                <h3>Schedule a Home Visit</h3>
              </div>
              <h1>Free Home Visit</h1>
            </div>
                </div>

                <div className="price-bottom">
                    <div className="price-box">
                        <h2>Basic Health Checkup</h2>
                        <div className="right-price">
                            <h3>Rate @ 1800/-</h3>
                            <h4>Just @ 1200/-</h4>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Price