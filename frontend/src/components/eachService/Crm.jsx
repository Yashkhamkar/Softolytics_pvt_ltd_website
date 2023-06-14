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

const Crm = () => {
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
    document.title = "SPL | CRM";
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
          <div class="banner-title">Customer Relationship Management (CRM)</div>

          <div class="banner-subtitle">
            <span>Responsive&nbsp;Websites</span>
            <span className="slash">|</span>
            <span>Corporate&nbsp;Websites</span>
            <span className="slash">|</span>
            <span>E&nbsp;-&nbsp;Commerce&nbsp;Websites</span>
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
            <div className="small-header">STUNNING CRM</div>
            <div className="inner-container">
              <div className="half">
                <div className="main-header">
                  <h1>Customer Retention</h1>
                </div>
                <p>
                  Customer retention is every company’s dream. We provide CRM
                  system to stay connected with customers, streamline processes,
                  & improve profitability.
                </p>
                <p>
                  Everyone knows that “The customer is always right.” However,
                  in a lot of businesses, there are two big difficulties with
                  this piece of wisdom: They don’t know quite who their
                  customers are and they may not have a good feel for what the
                  customer wants or thinks. Customer Relationship Management
                  (CRM) solutions offer a way to stay in touch with customers
                  and keep them engaged for ongoing revenue growth.
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
            <div className="small-header">Benefits Of CRM</div>
            <div className="inner-container">
              <div className="half">
                <div className="main-header">
                  <h1>Adopting Crm</h1>
                </div>
                <p>
                  At Softolytics you can have some major benefits of adopting
                  CRM, especially when it’s integrated with ERP:
                </p>
                <h3>Improve customer relationships </h3>
                <p>
                  This sounds pretty basic, but it’s one of the most important
                  elements of a growing business. You can instantly get a
                  complete view of the customer, including proposals and orders
                  in progress, new leads within accounts, customer service
                  history, etc.
                </p>
                <h3>Manage sales more effectively </h3>
                <p>
                  CRM gives sales managers a total overview of customer
                  accounts. Sales reps can use the CRM solution to create
                  opportunities and build sales forecasts
                </p>
                <h3>Establish and maintain customer master data </h3>
                <p>
                  Customer data, especially for multiple locations and contacts,
                  can easily get disaggregated. With duplicates and missing
                  data, customer data management and communication suffer. CRM
                  gives your company a standard master data record for each
                  customer.
                </p>
                <h3>Product, Quote, Price, and Inventory </h3>
                <p>
                  Sales representatives get access to Products, Quote, Prices,
                  and Inventory for customer proposals, check product
                  availability and communicate order status to customers.
                </p>
                <h3>Payments</h3>
                <p>
                  Payment is the completion of the sales quote-to-cash process.
                  If your payment data is accessible to the CRM, a sales
                  representative can be aware of payment due and help in the
                  collections.
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
          </div> */}
        {/* // </div> */}
      </div>
    </div>
  );
};

export default Crm;
