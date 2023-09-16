import React, { lazy, Suspense, useState } from 'react';
import active from "../Assets/img/active.svg";
import q1 from "../Assets/img/q1.svg";
import q2 from "../Assets/img/q2.svg";
import q3 from "../Assets/img/q3.svg";
import q4 from "../Assets/img/q4.svg";
import q5 from "../Assets/img/q5.svg";
import q6 from "../Assets/img/q6.svg";
import q7 from "../Assets/img/q7.svg";
import q8 from "../Assets/img/q8.svg";
import q9 from "../Assets/img/q9.svg";
import q10 from "../Assets/img/q10.svg";
import q11 from "../Assets/img/q11.svg";
import q12 from "../Assets/img/q12.svg";


const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));
const Footer = lazy(() => import("../Components/Footer"));


const Gallery = () => {
  const [activeHeading, setActiveHeading] = useState(null);

  // Define your data structure with headings and associated images
  const galleryData = [
    {
      heading: "Patient Rooms",
      images: [

        { title: "Image 21", url: q1 },
        { title: "Image 22", url:  q2  },
        { title: "Image 21", url:  q3  },
        { title: "Image 22", url:  q4  },
        { title: "Image 21", url:  q5  },
        { title: "Image 22", url: q6  },
        { title: "Image 21", url:  q7 },
        { title: "Image 22", url: q8 },
        { title: "Image 21", url: q9 },
        { title: "Image 22", url: q10  },
        { title: "Image 21", url:q11 },
        { title: "Image 22", url: q12 },

      ],
    },
    {
      heading: "Medical Staff",
      images: [
        { title: "Image 21", url: q1 },
        { title: "Image 22", url:  q2  },
        { title: "Image 21", url:  q3  },
        { title: "Image 22", url:  q4  },
        { title: "Image 21", url:  q5  },
        { title: "Image 22", url: q6  },
        { title: "Image 21", url:  q7 },
        { title: "Image 22", url: q8 },
        { title: "Image 21", url: q9 },
        { title: "Image 22", url: q10  },
        { title: "Image 21", url:q11 },
        { title: "Image 22", url: q12 },
      ],
    },
    {
      heading: "Medical Services",
      images: [
        { title: "Image 21", url: q1 },
        { title: "Image 22", url:  q2  },
        { title: "Image 21", url:  q3  },
        { title: "Image 22", url:  q4  },
        { title: "Image 21", url:  q5  },
        { title: "Image 22", url: q6  },
        { title: "Image 21", url:  q7 },
        { title: "Image 22", url: q8 },
        { title: "Image 21", url: q9 },
        { title: "Image 22", url: q10  },
        { title: "Image 21", url:q11 },
        { title: "Image 22", url: q12 },

      ],
    },
    {
      heading: "Emergency Care",
      images: [
        { title: "Image 21", url: q1 },
        { title: "Image 22", url:  q2  },
        { title: "Image 21", url:  q3  },
        { title: "Image 22", url:  q4  },
        { title: "Image 21", url:  q5  },
        { title: "Image 22", url: q6  },
        { title: "Image 21", url:  q7 },
        { title: "Image 22", url: q8 },
        { title: "Image 21", url: q9 },
        { title: "Image 22", url: q10  },
        { title: "Image 21", url:q11 },
        { title: "Image 22", url: q12 },

      ],
    },
    {
      heading: "Inpatient and Outpatient Care",
      images: [
        { title: "Image 21", url: q1 },
        { title: "Image 22", url:  q2  },
        { title: "Image 21", url:  q3  },
        { title: "Image 22", url:  q4  },
        { title: "Image 21", url:  q5  },
        { title: "Image 22", url: q6  },
        { title: "Image 21", url:  q7 },
        { title: "Image 22", url: q8 },
        { title: "Image 21", url: q9 },
        { title: "Image 22", url: q10  },
        { title: "Image 21", url:q11 },
        { title: "Image 22", url: q12 },

      ],
    },
    {
      heading: "Medical Equipment",
      images: [
        { title: "Image 21", url: q1 },
        { title: "Image 22", url:  q2  },
        { title: "Image 21", url:  q3  },
        { title: "Image 22", url:  q4  },
        { title: "Image 21", url:  q5  },
        { title: "Image 22", url: q6  },
        { title: "Image 21", url:  q7 },
        { title: "Image 22", url: q8 },
        { title: "Image 21", url: q9 },
        { title: "Image 22", url: q10  },
        { title: "Image 21", url:q11 },
        { title: "Image 22", url: q12 },

      ],
    },
    {
      heading: "Support Services",
      images: [
        { title: "Image 21", url: q1 },
        { title: "Image 22", url:  q2  },
        { title: "Image 21", url:  q3  },
        { title: "Image 22", url:  q4  },
        { title: "Image 21", url:  q5  },
        { title: "Image 22", url: q6  },
        { title: "Image 21", url:  q7 },
        { title: "Image 22", url: q8 },
        { title: "Image 21", url: q9 },
        { title: "Image 22", url: q10  },
        { title: "Image 21", url:q11 },
        { title: "Image 22", url: q12 },

      ],
    },
    {
      heading: "Research and Education",
      images: [
        { title: "Image 21", url: q1 },
        { title: "Image 22", url:  q2  },
        { title: "Image 21", url:  q3  },
        { title: "Image 22", url:  q4  },
        { title: "Image 21", url:  q5  },
        { title: "Image 22", url: q6  },
        { title: "Image 21", url:  q7 },
        { title: "Image 22", url: q8 },
        { title: "Image 21", url: q9 },
        { title: "Image 22", url: q10  },
        { title: "Image 21", url:q11 },
        { title: "Image 22", url: q12 },
      ],
    },
    {
      heading: "Administration",
      images: [
        { title: "Image 21", url: q1 },
        { title: "Image 22", url:  q2  },
        { title: "Image 21", url:  q3  },
        { title: "Image 22", url:  q4  },
        { title: "Image 21", url:  q5  },
        { title: "Image 22", url: q6  },
        { title: "Image 21", url:  q7 },
        { title: "Image 22", url: q8 },
        { title: "Image 21", url: q9 },
        { title: "Image 22", url: q10  },
        { title: "Image 21", url:q11 },
        { title: "Image 22", url: q12 },

      ],
    },


  ];

  const handleHeadingClick = (index) => {
    setActiveHeading(index);
  };

  return (
    <Suspense fallback={<div><Loading/></div>}>
      <Navbar activeUrl={"/Gallery"}/>
      <div>
        <div className="hero-all">
          <h2>Gallery</h2>
        </div>

        <div className="index">
          <div className="row">
            {/* Left Side Div */}
            <div className="col-md-4">
              <div className="left-div">

                <ul>
                  {galleryData.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleHeadingClick(index)}
                      className={activeHeading === index ? 'active' : ''}
                    >
                    <h1>{item.heading} <img id="activeimg" src={active} alt="" /></h1>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side Div */}
            <div className="col-md-8">
              <div className="right-div gallery">
                {activeHeading !== null && galleryData[activeHeading].images.map((image, index) => (
                  <div key={index} className="image-item image">
                    <img
                      src={image.url}
                      alt={image.title}
                      style={{ width: '100%', height: 'auto' }} // Full-width images
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Suspense>
  );
};

export default Gallery;
