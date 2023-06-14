import React from "react";
import "./Footer.css";
import { a } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mainfoo">
      <div className="footer-links">
        <div className="container cont">
          <div className="links-title">
            <h2>Useful Links</h2>
          </div>
          <div className="service-links">
            <div className="service-links-inner">
              <div className="service-link-col">
                <a href="/erp">ERP</a>
              </div>
              <div className="service-link-col">
                <a href="/web">Websites</a>
              </div>
              <div className="service-link-col">
                <a href="/data">Data analytics</a>
              </div>
              <div className="service-link-col">
                <a href="/bpm">Buisness Process Management</a>
              </div>
              <div className="service-link-col">
                <a href="/mobile">App Development</a>
              </div>
              <div className="service-link-col">
                <a href="/crm">CRM</a>
              </div>
            </div>
          </div>
          <div className="page-links">
            <div className="page-links-inner">
              <div className="page-link-col">
                <a href="/">Home</a>
              </div>
              <div className="page-link-col">
                <a href="/Aboutpage">About</a>
              </div>
              <div className="page-link-col">
                <a href="/carrers">Carrers</a>
              </div>
              <div className="page-link-col">
                <a href="/Servicepage">Services</a>
              </div>
              <div className="page-link-col">
                <a href="/contact">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; 2021-23 Softolytics private limited | All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
