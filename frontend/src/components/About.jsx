import React from "react";
import "./About.css";
import google from "../assets/google-partners.png";
import { Link } from "react-router-dom";
import scroll from "../assets/scroll-down.png";

const About = () => {
  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="section about" id="about">
        <div className="container">
          {/* <div className="small-header">Who We Are</div> */}
          <div className="inner-containers">
            <div className="main-headers">
              <h1>Know Us</h1>
            </div>
            <p className="paras">
              Softolytics Private Limited is a software development division of
              Siddhatva Brands with an enthusiastic team, catering software
              solutions to an extensive range of industries and enterprises, and
              an intelligent business solution. We are based in Pune, India, and
              we provide a business solution in a global market. We are
              specialized in developing business-grade applications and
              customer-focused services to help our client's business to save
              time, reduce redundancy in the process, make it economical, and
              ultimately increase business efficiency.
            </p>
            <p className="paras">
              Enterprise resource planning (ERP), business process management
              (BPM), customer relationship management (CRM), data analytics &
              reporting (Tableau, Power BI), web development, including
              full-stack development, app development including cross platform
              development, and IT solutions remain the featured specializations
              of Softolytics.
            </p>
            <div className="fancy-text">
              We are Enthusiastic, Motivated, Friendly, Result & Technology
              Oriented
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <div className="scroll-down-arrow">
            {/* <div className="scroll-down-text">Scroll Down</div> */}
            <Link to="#about" onClick={(e) => smoothScroll(e, "#ser")}>
              <div className="scroll-down-img-container">
                <img
                  className="scroll-down-img"
                  src={scroll}
                  alt="scroll down"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
