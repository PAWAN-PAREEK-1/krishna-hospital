import React, { useState } from "react";
import "../Style/Blog.css";
import play from "../Assets/img/play.svg";
import b1 from "../Assets/img/b1.svg";
import b2 from "../Assets/img/b2.svg";
import prev from "../Assets/img/prev.svg";
import next from "../Assets/img/next.svg";
import rightarrow from "../Assets/img/rightarrow.svg";


const Blog = () => {
  // Sample blog post data (you can replace this with your actual data)
  const blogPosts = [
    {
      image: b1,
      title: "Extra Sugar is so Sweet",
      content: "Extra Sugar is so Sweet, but acts like a slow poison! An excess of sweetened foods and beverages can lead to weight gain, blood sugar",
      date:"July 12, 2022 No Comments",
      link:""
    },
    {
      image: b2,
      title: "Plan to lower your Blood Pressure.",
      content: "If you’re like most people with high blood pressure, drugs are a major part of your plan to lower your blood pressure. Take medications as",
      date:"July 12, 2022 No Comments",
      link:""
    },

      {
        image: b2,
        title: "Plan to lower your Blood Pressure.",
        content: "If you’re like most people with high blood pressure, drugs are a major part of your plan to lower your blood pressure. Take medications as",
        date:"July 12, 2022 No Comments",
        link:""
      },
      {
        image: b1,
        title: "Extra Sugar is so Sweet",
        content: "Extra Sugar is so Sweet, but acts like a slow poison! An excess of sweetened foods and beverages can lead to weight gain, blood sugar",
        date:"July 12, 2022 No Comments",
        link:""
      },
      {
        image: b2,
        title: "Plan to lower your Blood Pressure.",
        content: "If you’re like most people with high blood pressure, drugs are a major part of your plan to lower your blood pressure. Take medications as",
        date:"July 12, 2022 No Comments",
        link:""
      },    {
        image: b1,
        title: "Extra Sugar is so Sweet",
        content: "Extra Sugar is so Sweet, but acts like a slow poison! An excess of sweetened foods and beverages can lead to weight gain, blood sugar",
        date:"July 12, 2022 No Comments",
        link:""
      },

    // Add more blog posts as needed
  ];

  const [startIndex, setStartIndex] = useState(0);

  const prevClickHandler = () => {
    setStartIndex((prevIndex) => (prevIndex === 0 ? blogPosts.length - 2 : prevIndex - 2));
  };

  const nextClickHandler = () => {
    setStartIndex((prevIndex) => (prevIndex === blogPosts.length - 2 ? 0 : prevIndex + 2));
  };

  return (
    <div>
      <div className="index blogbg">
        <div className="main-blog">
          <div className="blog-top">
            <div className="med-top med-top2">
              <div className="span-box about-span ">
                <div className="span-box-1 about-span-box med-span-box"></div>
                <h3>Latest Insights</h3>
              </div>
              <h1>Blog</h1>
            </div>
          </div>
          <div className="blog-bottom">
            <div className="blogs">

              {blogPosts.slice(startIndex, startIndex + 2).map((post, index) => (
                <div className="blog-post" key={index}>
                  <img src={post.image} alt={post.title} />
                  <div className="blog-detail">
                  <h2>{post.title}</h2>
                  <h4>{post.date}</h4>
                  <p>{post.content}</p>
                  <a href={post.link}><h3>Read More <img src={rightarrow} alt="" /></h3></a>
                  </div>
                </div>
              ))}

            </div>
            <div className="blog-buttons">
              <img id="bprev" onClick={prevClickHandler} src={prev} alt="" />
             <img id="bnext" onClick={nextClickHandler} src={next} alt="" />
            </div>
          </div>
          <a href="">
                <div className="all-btn blog-btn">
                  <h4>
                  View More <img src={play} alt="" />
                  </h4>
                </div>
              </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
