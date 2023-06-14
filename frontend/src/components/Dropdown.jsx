import React, { useState } from "react";
import { openings } from "../assets/job/openings";
import "./Dropdown.css";
import scrollup from "../assets/scroll-up.png";
import { Link } from "react-router-dom";

const Dropdown = () => {
  const [clicked, setClicked] = useState(null);

  const handleToggle = (index) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
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
  return (
    <div>
      <div
        className="section inner-service"
        style={{ backgroundColor: "#eceaeb" }}
        id="openings"
      >
        <div className="container" style={{ marginTop: "-2rem" }}>
          <h1
            style={{
              marginBottom: "3rem",
              marginRight: "57rem",
              color: "#15ada1",
              fontFamily: "Aladin",
            }}
          >
            Current Job Openings
          </h1>
          <div className="boxaccordion">
            <div className="containerwidth">
              {openings.map((opening, index) => (
                <div className="wrapper" key={index}>
                  <button
                    className="toggles"
                    onClick={() => handleToggle(index)}
                  >
                    {opening.title}
                    {clicked === index ? (
                      <i className="fas fa-minus icon"></i>
                    ) : (
                      <i className="fas fa-plus icon"></i>
                    )}
                  </button>
                  <div className={`content ${clicked === index ? "show" : ""}`}>
                    <hr />
                    <div className="text">Experience: {opening.Experience}</div>
                    <br />
                    <div className="text">Location: {opening.Location}</div>
                    <br />
                    <div className="text">
                      Education Qualifications:{" "}
                      {opening["Education Qualification"]}
                    </div>
                    <br />
                    Required Skills:
                    <ul>
                      {opening["Required Skills"].map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Dropdown;
