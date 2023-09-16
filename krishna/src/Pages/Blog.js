import React, { useState, lazy, Suspense } from "react";
import "../Style/Blog.css";
import play from "../Assets/img/play.svg";
import b1 from "../Assets/img/b1.svg";
import b2 from "../Assets/img/b2.svg";
import rightarrow from "../Assets/img/rightarrow.svg";

const Loading = lazy(() => import('../Components/Loading'));
const Navbar = lazy(() => import('../Components/Navbar'));
const Footer = lazy(() => import("../Components/Footer"));

const Blog = () => {
  const blogPosts = [
    {
      image: b1,
      title: "Extra Sugar is so Sweet",
      content: "Extra Sugar is so Sweet, but acts like a slow poison! An excess of sweetened foods and beverages can lead to weight gain, blood sugar",
      date: "July 12, 2022 No Comments",
      link: "",
    },
    {
      image: b2,
      title: "Plan to lower your Blood Pressure.",
      content: "If you’re like most people with high blood pressure, drugs are a major part of your plan to lower your blood pressure. Take medications as",
      date: "July 12, 2022 No Comments",
      link: "",
    },
    {
      image: b1,
      title: "Extra Sugar is so Sweet",
      content: "Extra Sugar is so Sweet, but acts like a slow poison! An excess of sweetened foods and beverages can lead to weight gain, blood sugar",
      date: "July 12, 2022 No Comments",
      link: "",
    },
    {
      image: b2,
      title: "Plan to lower your Blood Pressure.",
      content: "If you’re like most people with high blood pressure, drugs are a major part of your plan to lower your blood pressure. Take medications as",
      date: "July 12, 2022 No Comments",
      link: "",
    },
    {
      image: b1,
      title: "Extra Sugar is so Sweet",
      content: "Extra Sugar is so Sweet, but acts like a slow poison! An excess of sweetened foods and beverages can lead to weight gain, blood sugar",
      date: "July 12, 2022 No Comments",
      link: "",
    },
    {
      image: b2,
      title: "Plan to lower your Blood Pressure.",
      content: "If you’re like most people with high blood pressure, drugs are a major part of your plan to lower your blood pressure. Take medications as",
      date: "July 12, 2022 No Comments",
      link: "",
    },
    {
      image: b1,
      title: "Extra Sugar is so Sweet",
      content: "Extra Sugar is so Sweet, but acts like a slow poison! An excess of sweetened foods and beverages can lead to weight gain, blood sugar",
      date: "July 12, 2022 No Comments",
      link: "",
    },
    {
      image: b2,
      title: "Plan to lower your Blood Pressure.",
      content: "If you’re like most people with high blood pressure, drugs are a major part of your plan to lower your blood pressure. Take medications as",
      date: "July 12, 2022 No Comments",
      link: "",
    },
    {
      image: b1,
      title: "Extra Sugar is so Sweet",
      content: "Extra Sugar is so Sweet, but acts like a slow poison! An excess of sweetened foods and beverages can lead to weight gain, blood sugar",
      date: "July 12, 2022 No Comments",
      link: "",
    },
    {
      image: b2,
      title: "Plan to lower your Blood Pressure.",
      content: "If you’re like most people with high blood pressure, drugs are a major part of your plan to lower your blood pressure. Take medications as",
      date: "July 12, 2022 No Comments",
      link: "",
    },
    {
      image: b1,
      title: "Extra Sugar is so Sweet",
      content: "Extra Sugar is so Sweet, but acts like a slow poison! An excess of sweetened foods and beverages can lead to weight gain, blood sugar",
      date: "July 12, 2022 No Comments",
      link: "",
    },
    {
      image: b2,
      title: "Plan to lower your Blood Pressure.",
      content: "If you’re like most people with high blood pressure, drugs are a major part of your plan to lower your blood pressure. Take medications as",
      date: "July 12, 2022 No Comments",
      link: "",
    },
    // Add more blog posts as needed
  ];

  const [postsToShow, setPostsToShow] = useState(6); // Initially, show 2 blog posts

  // Handler for "Load More" button
  const loadMoreClickHandler = () => {
    setPostsToShow(postsToShow + 3); // Increase the number of posts to show by 3
  };

  return (
    <Suspense fallback={<Loading />}>
      <Navbar activeUrl={"/Blog"} />
      <div>
        <div className="hero-all">
          <h2>Contact Us</h2>
        </div>
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
              <div className="blogs blogs-page">
                {blogPosts.slice(0, postsToShow).map((post, index) => (
                  <div className="blog-post blog-post-page" key={index}>
                    <img src={post.image} alt={post.title} />
                    <div className="blog-detail">
                      <h2>{post.title}</h2>
                      <h4>{post.date}</h4>
                      <p>{post.content}</p>
                      <a href={post.link}>
                        <h3>
                          Read More <img src={rightarrow} alt="" />
                        </h3>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>

              <div className="all-btn blog-btn load-more-button" onClick={loadMoreClickHandler}>
                <h4 >
                Load More<img  src={play} alt="" />
                </h4>
              </div>

          </div>
        </div>
      </div>
      <Footer />
    </Suspense>
  );
};

export default Blog;
