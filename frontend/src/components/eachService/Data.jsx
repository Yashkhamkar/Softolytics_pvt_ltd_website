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

const Data = () => {
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
    document.title = "SPL | Data Analytics & Reporting";
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
          <div class="banner-title">Data Analytics & Reporting</div>

          <div class="banner-subtitle">
            <span>Buisness&nbsp;Analytics</span>
            <span className="slash">|</span>
            <span>Web&nbsp;Scraping</span>
            <span className="slash">|</span>
            <span>Analytical&nbsp;Reports</span>
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
                  <h1>Data Analytics</h1>
                </div>
                <p>
                  Our certified professional helps individuals & organizations
                  make sense of data and find hidden patterns, unseen trends,
                  discover correlations……
                </p>
                <p>
                  Data analytics is a form of business intelligence, used to
                  solve specific problems and challenges within an organization.
                </p>
                <p>
                  Data analytics helps you to make sense of the past and to
                  predict future trends and behaviors; rather than basing your
                  decisions and strategies on guesswork, you’re making informed
                  choices based on what the data is telling you.
                </p>
                <p>
                  It allows organizations to digitally transform their business
                  and culture, becoming more innovative and forward-thinking in
                  their decision-making.
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
        {/* <div
          className="section inner-service"
          id="web-development"
          style={{ backgroundColor: "#eceaeb" }}
        >
          <div className="container">
            <div className="small-header">Crafting Customised Applications</div>
            <div className="inner-container">
              <div className="half">
                <div className="main-header">
                  <h1>Web Development</h1>
                </div>
                <h3>Expertise & Experience</h3>
                <p>
                  Systems developed for you should be able to evolve with time
                  as your business grows . No matter how complex or simple your
                  requirements may be we have the expertise and experience to
                  come up with an appropriate solution.
                </p>
                <h3>PLANNING FOR THE FUTURE</h3>
                <p>
                  Business models can change with times we ensure that your
                  application is easily scalable as you grow. From the very
                  beginning we analyze your requirement , plan and prepare for
                  every future eventuality be it visual design, platforms
                  security and it’s future functionality.
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
        {/* <Link to="#about" onClick={(e) => smoothScroll(e, "#e-commerce")}>
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
        <div className="section inner-service" id="e-commerce">
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
        </div>
        <div
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
        </div>  */}
      </div>
    </div>
  );
};

export default Data;
