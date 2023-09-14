import React from "react";
import "../Style/Gallery.css";

const Gallery = () => {
  return (
    <div>
      <div className="index">
        <div className="gallery-index">
          <div className="med-top">
            <div className="span-box about-span ">
              <div className="span-box-1 about-span-box med-span-box"></div>
              <h3>Visual Gallery</h3>
            </div>
            <h1>Gallery</h1>
          </div>

          <div className="gallery-down">
          <input type="radio" name="position" defaultChecked />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <input type="radio" name="position" />
        <main id="carousel">
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <div className="item" />
          <main>
          </main></main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
