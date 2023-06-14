import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import img1 from "../../assets/web-design-page/1.png";
import img2 from "../../assets/web-design-page/2.png";
import img3 from "../../assets/web-design-page/3.png";
import img4 from "../../assets/web-design-page/4.png";
import "./OneService.css";
import scroll from "../../assets/scroll-down.png";
import scrollup from "../../assets/scroll-up.png";

const Bmp = () => {
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
    document.title = "SPL | BPM";
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
          <div class="banner-title">Business Process Management (BPM)</div>

          <div class="banner-subtitle">
            <span>Business &nbsp;Process</span>
            <span className="slash">|</span>
            <span>Process&nbsp;Improvement</span>
            <span className="slash">|</span>
            <span>Process&nbsp;Optimization</span>
          </div>
          <div className="scroll-down">
            <div className="scroll-down-arrow">
              {/* <div className="scroll-down-text">Scroll Down</div> */}
              <Link to="#about" onClick={(e) => smoothScroll(e, "#web-design")}>
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
        <div className="section inner-service" id="web-design">
          <div className="container">
            <div className="small-header">STUNNING WEBSITE DESIGN</div>
            <div className="inner-container">
              <div className="half">
                <div className="main-header">
                  <h1>Process Management</h1>
                </div>
                <p>
                  Our experienced team suggests various methods to discover,
                  analyze, measure, model, improve, optimize, and automate
                  business processes.
                </p>
                <p>
                  Business process management (BPM) is the practice of modeling,
                  analyzing, and optimizing end-to-end business processes to
                  help meet your strategic business goals, such as the
                  improvement of your customer experience framework. BPM
                  methodology can be applied to tasks and processes that are
                  often repeated, ongoing, or predictable
                </p>
                <p>
                  Using BPM, you can evaluate your existing processes to find
                  ways to improve efficiency, reduce costs and errors, and
                  support digital transformation efforts.
                </p>
              </div>
              <div className="half">
                <div className="inner-service-img">
                  <img src={img4} alt="Web Design" />
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-down">
            <div className="scroll-down-arrow">
              {/* <div className="scroll-down-text">Scroll Down</div> */}
              <Link
                to="#about"
                onClick={(e) => smoothScroll(e, "#web-development")}
              >
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
          className="section inner-service"
          id="web-development"
          style={{ backgroundColor: "#eceaeb" }}
        >
          <div className="container">
            <div className="small-header">Crafting Customised Applications</div>
            <div className="inner-container">
              <div className="half">
                <div className="main-header">
                  <h1>BPM Methodology</h1>
                </div>
                <p>BPM methodology consists of following steps:</p>
                <h3>Analyze </h3>
                <p>
                  Analyze the process which exists. Consider what works or where
                  a problem exists.
                </p>
                <h3>Model </h3>
                <p>
                  Use process model to explore how your new approach would work
                  with a variety of potential scenarios and variables.
                </p>
                <h3>Model </h3>
                <p>
                  Use process model to explore how your new approach would work
                  with a variety of potential scenarios and variables.
                </p>
                <h3>Monitor </h3>
                <p>
                  After your new process has been implemented, you’ll need to
                  monitor and measure it to see if there is an improvement
                </p>
                <h3>Optimize & Automate </h3>
                <p>
                  Continually monitor and optimize it. If the new process is
                  working well, consider if any tasks can be automated.{" "}
                </p>
              </div>
              <div className="half">
                <div className="inner-service-img">
                  <img src={img3} alt="Web Development" />
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-down">
            <div className="scroll-down-arrow">
              {/* <div className="scroll-down-text">Scroll Down</div> */}
              <Link to="#about" onClick={(e) => smoothScroll(e, "#e-commerce")}>
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
        {/* <div className="section inner-service" id="e-commerce">
          <div className="container">
            <div className="small-header">e-Commerce Solutions</div>
            <div className="inner-container">
              <div className="half">
                <div className="main-header">
                  <h1>e-Commerce Websites</h1>
                </div>
                <p>
                  We have been designing E-commerce web design solutions for
                  brands and businesses which have become icons of success and
                  hence understand very well what motivates people to buy online
                  as well as what owners want from their E-commerce sites.
                </p>
                <p>
                  We can boast of proven expertise in creating secure, reliable
                  and search engine friendly on-line shops.
                </p>
                <p>
                  The experience we have gained working on several web projects
                  helps us create compelling , intuitive websites that appeal to
                  your audience, are easy to use, really show your products in
                  their best light , helping you gain and retain more customers
                  and increase your profits.
                </p>
              </div>
              <div className="half">
                <div className="inner-service-img">
                  <img src={img2} alt="E Commerce" />
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-down">
            <div className="scroll-down-arrow">
              {/* <div className="scroll-down-text">Scroll Down</div> */}
        {/* <Link
                to="#about"
                onClick={(e) => smoothScroll(e, "#web-maintenance")}
              >
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
        </div> */}
        {/* <div
          className="section inner-service"
          id="web-maintenance"
          style={{ backgroundColor: "#eceaeb" }}
        >
          <div className="container">
            <div className="small-header">Maintenance And Support</div>
            <div className="inner-container">
              <div className="half">
                <div className="main-header">
                  <h1>Web Maintenance</h1>
                </div>
                <p>
                  We just don’t design your website and leave you at that. We
                  offer attractive maintenance packages(completely optional) so
                  that we are there to look after your website continually to
                  ensure that it stays up to date and looking great now, in the
                  future and well beyond.
                </p>
                <p>
                  Using our maintenance and support is like having your own
                  in-house team to fine tune your website.
                </p>
              </div>
              <div className="half">
                <div className="inner-service-img">
                  <img src={img1} alt="Web Maintenance" />
                </div>
              </div>
            </div>
          </div>
          <div className="scroll-down">
            <div className="scroll-down-arrow">
              {/* <div className="scroll-down-text">Scroll Down</div> */}
        {/* <Link
                to="#about"
                onClick={(e) => smoothScrollup(e, "#small-banner")}
              >
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
        </div>*/}
      </div>
    </div>
  );
};

export default Bmp;
