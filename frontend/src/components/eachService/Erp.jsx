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

const Erp = () => {
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
    document.title = "SPL | ERP";
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
          <div class="banner-title">Enterprise Resourse Planning (ERP)</div>

          <div class="banner-subtitle">
            <span>ERP&nbsp;Software</span>
            <span className="slash">|</span>
            <span>ERP&nbsp;Implementations</span>
            <span className="slash">|</span>
            <span>ERP&nbsp;Customizations</span>
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
            <div className="small-header">ERP IMPLEMENTATIONS</div>
            <div className="inner-container">
              <div className="half">
                <div className="main-header">
                  <h1>ERP</h1>
                </div>
                <p>
                  We not only provide ERP software, but we do train our clients
                  to get familiar with the ERP system. Enterprise resource
                  planning (ERP) system acts as a glue that binds together the
                  different activities/systems in an organization. Our technical
                  team takes time to understand the work flow in your
                  organization, analyze the requirements and carefully prepare
                  the perfect user interface. We cater to small, medium &
                  large-scale organizations. ERP software is used to automate
                  and simplify individual activities across a business or
                  organization, such as accounting and procurement, project
                  management, customer relationship management inventory
                  management, compliance, and supply chain operations.
                </p>
                <p>Benefits of deploying ERP in your organization:</p>
                <ul>
                  <li>
                    Cost Saving, Improves Accuracy and Productivity - Automate
                    core business operations by reducing human errors, and free
                    up employee time and resources
                  </li>
                  <li>
                    Improves Business Insight - Accurate and complete reporting
                    help companies adequately plan, budget, forecast, and
                    communicate the state of operations to the organization and
                    interested parties, such as shareholders
                  </li>
                  <li>
                    Increases Efficiency - quickly access needed information for
                    clients, vendors, and business partners resulting in
                    improved customer & employee satisfaction and quicker
                    response rates
                  </li>
                  <li>
                    Enhance Collaboration - Break down communication barriers
                    for efficient collaboration and coordination to synchronize
                    work within departments for achieving faster and better
                    outcomes.
                  </li>
                </ul>
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
            <div className="small-header">Benefits of deploying ERP</div>
            <div className="inner-container">
              <div className="half">
                <div className="main-header">
                  <h1>Deploying ERP</h1>
                </div>
                <h3>Cost Saving, Improves Accuracy and Productivity</h3>
                <p>
                  Automate core business operations by reducing human errors,
                  and free up employee time and resources
                </p>
                <h3>Improves Business Insight</h3>
                <p>
                  Accurate and complete reporting help companies adequately
                  plan, budget, forecast, and communicate the state of
                  operations to the organization and interested parties, such as
                  shareholders
                </p>
                <h3>Increases Efficiency</h3>
                <p>
                  quickly access needed information for clients, vendors, and
                  business partners resulting in improved customer & employee
                  satisfaction and quicker response rates
                </p>
                <h3>Enhance Collaboration</h3>
                <p>
                  Break down communication barriers for efficient collaboration
                  and coordination to synchronize work within departments for
                  achieving faster and better outcomes.
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
              <div className="half"> */}
        {/* <div className="main-header">
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
          </div> */}
        {/* <div className="scroll-down">
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
                </div> */}
        {/* </Link> */}
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
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
        </div> */}
      </div>
    </div>
  );
};

export default Erp;
