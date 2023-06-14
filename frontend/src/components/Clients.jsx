import React from "react";
import img1 from "../assets/clients/DCPL.png";
import img2 from "../assets/clients/dth.png";
import img3 from "../assets/clients/kalaya_tower.png";
import img4 from "../assets/clients/OFCTS_Siddhatva.png";
import img5 from "../assets/clients/Orbit_Source_Final.png";
import img6 from "../assets/clients/Ray.png";
import img7 from "../assets/clients/mytaxfiling.png";
import img8 from "../assets/clients/akruti.png";
import "./Clients.css";
import scroll from "../assets/scroll-up.png";
import { Link } from "react-router-dom";

const Clients = () => {
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
      <div class="section clients" id="clients">
        <div class="container">
          {/* <div class="small-header">Happy Clients</div> */}
          <div class="inner-container">
            <div
              class="main-header"
              style={{ marginLeft: "3rem", marginBottom: "1rem" }}
            >
              <h1>Our Trusted Clients</h1>
            </div>
            <div class="client-logos">
              <div class="client-logos-inner">
                <div class="logo-col">
                  <img src={img1} alt="Hiranandani" />
                </div>
                <div class="logo-col">
                  <img src={img2} alt="Vodafone" />
                </div>
                <div class="logo-col">
                  <img src={img3} alt="Cadd Center" />
                </div>
                <div class="logo-col">
                  <img src={img4} alt="HDFC Realty" />
                </div>
                <div class="logo-col">
                  <img src={img5} alt="SBI" />
                </div>
                <div class="logo-col">
                  <img src={img6} alt="Deepali Designs" />
                </div>
                <div class="logo-col">
                  <img src={img7} alt="Deepali Designs" />
                </div>
                <div class="logo-col">
                  <img src={img8} alt="Deepali Designs" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-down">
          <div className="scroll-down-arrow">
            {/* <div className="scroll-down-text">Scroll Down</div> */}
            <Link to="#about" onClick={(e) => smoothScroll(e, "#main")}>
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

export default Clients;
