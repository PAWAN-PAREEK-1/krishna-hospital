import React from "react";
import "../Style/Gallery.css";
import "../Style/Global.css";
import g1 from "../Assets/img/g1.svg";

const Gallery = () => {
  return (
    <div>
      <div className="index">
        <div className="gallery-index">
          <div className="med-top g-top">
            <div className="span-box about-span ">
              <div className="span-box-1 about-span-box med-span-box"></div>
              <h3 className="mobile-h3">Visual Gallery</h3>
            </div>
            <h1 className="mobile-h1">Gallery</h1>
          </div>

          <div className="gallery-down">
          <input type="radio" name="position" defaultChecked />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <main id="carousel">
          <div className="item" ></div>
          <div className="item" ></div>
          <div className="item" ></div>
          <div className="item" ></div>
          <div className="item" ></div>
          <main>
          </main></main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
