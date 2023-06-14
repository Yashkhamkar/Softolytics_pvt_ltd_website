import React from "react";
import service1 from "../assets/CRM.png";
import service2 from "../assets/erp.png";
import service3 from "../assets/App_development.png";
import service4 from "../assets/pngegg.png";
import service5 from "../assets/BPM.png";
import service6 from "../assets/Buniness Analytics.png";
import "./Services.css";
import ScrollDownButton from "./ScrollDownButton";
import { BiRightArrow } from "react-icons/bi";
import scroll from "../assets/scroll-down.png";
const Services = () => {
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
      <div className="section services" id="ser">
        <div className="container" style={{ marginBottom: "4rem" }}>
          {/* <div className="small-header">What We Do</div> */}
          <div className="inner-container">
            <div className="main-headers">
              <h1 style={{ marginLeft: "5rem" }}>Our Services</h1>
            </div>
            <div className="services-outer">
              <div className="services-inner">
                <div className="service-col">
                  <div className="service">
                    <a href="/erp" className="service-data">
                      <div className="service-img">
                        <img src={service2} alt="Websites" />
                      </div>
                      <div className="service-text">
                        <div className="service-title">
                          <h3>ERP Implementations</h3>
                        </div>
                        <p className="disc">
                          We not only provide ERP software, but we do train our
                          clients to get familiar with the ERP system.
                        </p>
                        <div class="service-btn">
                          <p>Know More</p>
                          {/* <span className="arrow"></span> */}
                          <BiRightArrow className="arrow" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="service-col">
                  <div className="service">
                    <a href="/web" className="service-data">
                      <div className="service-img">
                        <img src={service4} alt="Graphic Design" />
                      </div>
                      <div className="service-text">
                        <div className="service-title">
                          <h3>Websites</h3>
                        </div>
                        <p className="disc">
                          Stunning website is just the beginning. We not only
                          design & develop websites but we create a lively hood
                          in them.
                        </p>
                        <div class="service-btn">
                          <p>Know More</p>
                          <BiRightArrow className="arrow" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="service-col">
                  <div className="service">
                    <a href="/crm" className="service-data">
                      <div className="service-img">
                        <img src={service1} alt="Marketing" />
                      </div>
                      <div className="service-text">
                        <div className="service-title">
                          <h3>CRM</h3>
                        </div>
                        <p className="disc">
                          Customer retention is every company’s dream. We
                          provide CRM system to stay connected with customers,
                          streamline processes, & improve profitability.
                        </p>
                        <div class="service-btn">
                          <p>Know More</p>
                          <BiRightArrow className="arrow" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="service-col">
                  <div className="service">
                    <a href="/data" className="service-data">
                      <div className="service-img">
                        <img src={service6} alt="Mobile Apps" />
                      </div>
                      <div className="service-text">
                        <div className="service-title">
                          <h3>Data Analytics & Reporting</h3>
                        </div>
                        <p className="disc">
                          Our certified professional helps individuals &
                          organizations make sense of data and find hidden
                          patterns, unseen trends, discover correlations……
                        </p>
                        <div class="service-btn">
                          <p>Know More</p>
                          <BiRightArrow className="arrow" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="service-col">
                  <div className="service">
                    <a href="/bpm" className="service-data">
                      <div className="service-img">
                        <img src={service5} alt="Social Media" />
                      </div>
                      <div className="service-text">
                        <div className="service-title">
                          <h3>Business Process Management</h3>
                        </div>
                        <p className="disc">
                          Our experienced team suggests various methods to
                          discover, analyze, measure, model, improve, optimize,
                          and automate business processes.
                        </p>
                        <div class="service-btn">
                          <p>Know More</p>
                          <BiRightArrow className="arrow" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="service-col">
                  <div className="service">
                    <a href="/mobile" className="service-data">
                      <div className="service-img">
                        <img src={service3} alt="E-Commerce Solution" />
                      </div>
                      <div className="service-text">
                        <div className="service-title">
                          <h3>App development</h3>
                        </div>
                        <p className="disc">
                          Formulating stunning and best performing apps is our
                          passion. Mobile strategy, design & development are our
                          key expertise.
                        </p>
                        <div class="service-btn">
                          <p>Know More</p>
                          <BiRightArrow className="arrow" />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <div className="scroll-down-arrow">
            {/* <div className="scroll-down-text">Scroll Down</div> */}
            <a href="#about" onClick={(e) => smoothScroll(e, "#clients")}>
              <div className="scroll-down-img-container">
                <img
                  className="scroll-down-img"
                  src={scroll}
                  alt="scroll down"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
