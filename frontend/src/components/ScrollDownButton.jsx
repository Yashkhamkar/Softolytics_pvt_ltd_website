import React from "react";
import scroll from "../assets/scroll-down.png";
import { Link } from "react-router-dom";

const ScrollDownButton = ({ id }) => {
  const handleScroll = () => {
    window.scroll({
      top: window.pageYOffset + 775,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll-down">
      <div className="scroll-down-arrow">
        {/* <div className="scroll-down-text">Scroll Down</div> */}
        <Link to="#id">
          <div className="scroll-down-img-container">
            <img className="scroll-down-img" src={scroll} alt="scroll down" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ScrollDownButton;
