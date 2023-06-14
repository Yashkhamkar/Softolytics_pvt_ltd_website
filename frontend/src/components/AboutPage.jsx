import React, { useEffect } from "react";
import "./eachService/OneService.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import scroll from "../assets/scroll-down.png";
import scrollup from "../assets/scroll-up.png";

const AboutPage = () => {
  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  };
  const smoothScrollup = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    document.title = "SPL | About us";
  }, []);
  return (
    <div>
      <div className="data-main">
        <Navbar />
        <div
          class="section small-banner"
          id="small-banner"
          style={{ backgroundColor: "#eceaeb" }}
        >
          <div class="banner-title">About-Us</div>

          <div class="banner-subtitle">
            Transforming Business to Digital Platform
          </div>
          <div className="scroll-down">
            <div className="scroll-down-arrow">
              {/* <div className="scroll-down-text">Scroll Down</div> */}
              <Link to="#about" onClick={(e) => smoothScroll(e, "#FA")}>
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
        <div className="section about" id="FA">
          <div className="container">
            {/* <div className="small-header">Who We Are</div> */}
            <div className="inner-containers">
              <div className="main-headers">
                <h1>Know Us</h1>
              </div>
              <p className="paras">
                Softolytics Private Limited is a software development division
                of Siddhatva Brands with an enthusiastic team, catering software
                solutions to an extensive range of industries and enterprises,
                and an intelligent business solution. We are based in Pune,
                India, and we provide a business solution in a global market. We
                are specialized in developing business-grade applications and
                customer-focused services to help our client's business to save
                time, reduce redundancy in the process, make it economical, and
                ultimately increase business efficiency.
              </p>
              <p className="paras">
                Enterprise resource planning (ERP), business process management
                (BPM), customer relationship management (CRM), data analytics &
                reporting (Tableau, Power BI), web development, including
                full-stack development, app development including cross platform
                development, and IT solutions remain the featured
                specializations of Softolytics.
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
              <Link to="#about" onClick={(e) => smoothScroll(e, "#FV")}>
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
        <div
          className="section about"
          id="FV"
          style={{ backgroundColor: "#eceaeb" }}
        >
          <div className="container">
            {/* <div className="small-header">Who We Are</div> */}
            <div className="inner-containers">
              <div className="main-headers">
                <h1>Our Vision</h1>
              </div>
              <p className="paras">
                Softolytics vision is to be a prominent software developing
                company that promotes every business/enterprise to transform
                into a digital enterprise with excellent technology and assist
                them in achieving their goals
              </p>
              <p className="paras">
                <ul style={{ listStyle: "outside" }}>
                  <li>
                    Transform our client’s business into a digital platform and
                    improve performance
                  </li>
                  <li>
                    Perform in-depth analysis of our client’s business and
                    advice on the elegant business solutions to achieve their
                    requirements.
                  </li>
                  <li>
                    Bolster the ability to harness the agile software
                    implantation methodology.
                  </li>
                  <li>
                    Solve the toughest challenges by catering to technical
                    excellence, consultation, and digitization.
                  </li>
                  <li>
                    Excellent quality output by rigorous coding, intensive
                    testing, and optimization.
                  </li>
                </ul>
              </p>
            </div>
          </div>
          <div className="scroll-down">
            <div className="scroll-down-arrow">
              {/* <div className="scroll-down-text">Scroll Down</div> */}
              <Link to="#about" onClick={(e) => smoothScroll(e, "#FM")}>
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
        <div className="section about" id="FM">
          <div className="container">
            {/* <div className="small-header">Who We Are</div> */}
            <div className="inner-containers">
              <div className="main-headers">
                <h1>Our Mission</h1>
              </div>
              <p className="paras">
                Provide cost effective high quality innovative solution &
                services, powered by state-of-the-art technologies, anchored on
                our basic principles of:
              </p>
              <p className="paras">
                <ul style={{ listStyle: "outside" }}>
                  <li>Explore</li>
                  <li>Innovate</li>
                  <li>Improve</li>
                </ul>
              </p>
              <p className="paras">
                The strong R&D team of Softolytics is constantly working to
                upgrade existing solutions and develop new products. Softolytics
                is transparent and accountable to customers, shareholders,
                partners, and employees and strive to deliver on commitments and
                results
              </p>
            </div>
          </div>
          <div className="scroll-down">
            <div className="scroll-down-arrow">
              {/* <div className="scroll-down-text">Scroll Down</div> */}
              <Link to="#about" onClick={(e) => smoothScroll(e, "#FQ")}>
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
        <div
          className="section about"
          id="FQ"
          style={{ backgroundColor: "#eceaeb" }}
        >
          <div className="container">
            {/* <div className="small-header">Who We Are</div> */}
            <div className="inner-containers">
              <div className="main-headers">
                <h1>Quality Policy</h1>
              </div>
              <p className="paras">
                Softolytics believe that the business/enterprises expect
                continually improving digital services. The company aims to
                consistently improve the services we provide to carry out our
                clients’ requirements and produce a finished work that can be
                justifiably proud of. Our quality policy is strongly driven by
                the below-mentioned management principles and behaviors:
              </p>
              <p className="paras">
                <ul style={{ listStyle: "outside" }}>
                  <li>
                    Build a mutually profitable relationship with our customers.
                  </li>
                  <li>
                    Provide techno-economical, viable, and innovative technical
                    solutions.
                  </li>
                  <li>
                    Achieve our commitments for quality, economy, and schedule.
                  </li>
                  <li>
                    Enhance systematic research and use of best preventive
                    practices.
                  </li>
                  <li>Drive continual innovation & improvement.</li>
                </ul>
              </p>
            </div>
          </div>
          <div className="scroll-down">
            <div className="scroll-down-arrow">
              {/* <div className="scroll-down-text">Scroll Down</div> */}
              <Link to="#about" onClick={(e) => smoothScrollup(e, "#small-banner")}>
                <div className="scroll-down-img-container">
                  <img
                    className="scroll-down-img"
                    src={scrollup}
                    alt="scroll down"
                  />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
