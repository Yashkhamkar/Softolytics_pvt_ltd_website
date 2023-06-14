import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import scroll from "../assets/scroll-down.png";
import { Link } from "react-router-dom";
import img1 from "../assets/home-slider/banner.jpg";
import img2 from "../assets/home-slider/banner3.jpg";
import "./slider.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import withAutoplay from "react-awesome-slider/dist/autoplay";

const Slider = () => {
  const AutoplaySlider = withAutoplay(AwesomeSlider);
  const smoothScroll = (e, target) => {
    e.preventDefault();
    const element = document.querySelector(target);
    const topOffset = element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: topOffset,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    document.title = "SPL | ERP, Web Design, CRM, BPM";
  }, []);
  return (
    <div id="main">
      <AutoplaySlider
        className="aws-btn"
        bullets={false}
        organicArrows={false}
        infinite={true}
        play={true}
        interval={3500}
        transitionDelay={500}
        animation="cubeAnimation"
      >
        <div data-src={img1} />
        <div data-src={img2} />
      </AutoplaySlider>
      <div className="scroll-down">
        <div className="scroll-down-arrow">
          <Link to="#about" onClick={(e) => smoothScroll(e, "#about")}>
            <div className="scroll-down-img-container">
              <img className="scroll-down-img" src={scroll} alt="scroll down" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slider;
