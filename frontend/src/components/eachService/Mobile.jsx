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

const Mobile = () => {
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
    document.title = "SPL | App Development";
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
          <div class="banner-title">App Development</div>

          <div class="banner-subtitle">
            <span>Android&nbsp;Apps</span>
            <span className="slash">|</span>
            <span>IOS&nbsp;Apps</span>
            <span className="slash">|</span>
            <span>Cross-platform&nbsp;Apps</span>
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
                  <h1>Website Design</h1>
                </div>
                <p>
                  Formulating stunning and best performing apps is our passion.
                  Mobile strategy, design & development are our key expertise.
                </p>
                <p>
                  The mobile phone has become a vital tool for all types and
                  sizes of businesses that are looking to expand, grow, attract
                  more audience and boost their e-commerce sales.
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
                  <h1>Web Development</h1>
                </div>
                <p>
                  Your app’s main purpose is to generate results hence at every
                  step our team makes sure:
                </p>
                <h3>Marketing Tool</h3>
                <p>
                  Mobile apps work as a great marketing tool and help your
                  business get ahead of competitors
                </p>
                <h3>Stronger Brand Building </h3>
                <p>
                  Aims at strengthening and educating the customer about your
                  brand. The more he believes in you, the more he listens to you
                  and your sales pitches, and eventually commits to your brand.
                </p>
                <h3>Customer Loyalty </h3>
                <p>
                  The most interesting fact about a mobile application is that
                  it lets entrepreneurs directly interact with their customers.
                  This is highly important for cultivating customer loyalty.
                </p>
                <h3>Improve Accessibility </h3>
                <p>
                  Mobile apps can provide great exposure to reach the target
                  audience on multiple platforms at the same time
                </p>
                <h3>Improve Customer Service </h3>
                <p>
                  An expeditious customer service determines the success of any
                  business. No matter how good your products and services are,
                  you will not be able to increase sales without having a
                  world-class customer service.
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
        </div>  */}
      </div>
    </div>
  );
};

export default Mobile;
