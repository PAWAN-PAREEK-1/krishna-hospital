import { lazy, Suspense } from "react";
import "../Style/Blog.css";
import "../Style/Global.css";
import rightarrow from "../Assets/img/rightarrow.svg";
import p1 from "../Assets/img/p1.svg";
import p2 from "../Assets/img/p2.svg";
import fface from "../Assets/img/fface.svg";
import finsta from "../Assets/img/Finsta.svg";
import flink from "../Assets/img/flink.svg";
import ftwitter from "../Assets/img/ftwitter.svg";
const Loading = lazy(() => import("../Components/Loading"));
const Navbar = lazy(() => import("../Components/Navbar"));

const Pblog = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loading />
        </div>
      }
    >
      <Navbar activeUrl={"/Pblog"} />

      <div>
        <div className="hero-all">
          <h2>Blog</h2>
        </div>

        <div className="index">
          <div className="pblog">
            <div className="pblog-detail">
              <img src={p1} alt="" />

              <div className="p-blog-page">
                <div className="b-de">
                  <h2>Recent Post</h2>

                  <div className="pb-de">
                    <img src={p2} alt="" />

                    <div className="pb-pb">
                      <h4>Side Effects Of Antibiotics</h4>
                      <h5>July 12, 2022 No Comments</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="pb-de">
                    <img src={p2} alt="" />

                    <div className="pb-pb">
                      <h4>Junk Food And Concentrate</h4>
                      <h5>July 12, 2022 No Comments</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                      </p>
                    </div>
                  </div>
                  <hr />
                  <div className="pb-de">
                    <img src={p2} alt="" />

                    <div className="pb-pb">
                      <h4>Symptoms Of Malaria</h4>
                      <h5>July 12, 2022 No Comments</h5>
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-social">
                  <h3>Follow Us On</h3>
                  <div className="p-social-link">
                    <img src={fface} alt="" />
                    <img src={finsta} alt="" />
                    <img src={flink} alt="" />
                    <img src={ftwitter} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        <div className="page-blog-detail">
          <h1>Plan to lower your Blood Pressure.</h1>
          <h6>July 12, 2022 No Comments</h6>
          <p>If you’re like most people with high blood pressure, drugs are a major part of your plan to lower your blood pressure. Take medications as scheduled, at the same time every day. Do not stop taking or change your medications unless you first talk with your doctor. Even if you feel good, continue to take your medications. Stopping drugs suddenly can make the condition worse.</p>
          <p>If you’re like most people with high blood pressure, drugs are a major part of your plan to lower your blood pressure. Take medications as scheduled, at the same time every day. Do not stop taking or change your medications unless you first talk with your doctor. Even if you feel good, continue to take your medications. Stopping drugs suddenly can make the condition worse.</p>
        </div>

        </div>
      </div>
    </Suspense>
  );
};

export default Pblog;
