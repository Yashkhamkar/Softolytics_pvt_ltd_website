import React, { useEffect, useState } from "react";
import "./eachService/OneService.css";
import "./carrers.css";
import { Form, Link } from "react-router-dom";
import Navbar from "./Navbar";
import img1 from "../assets/web-design-page/1.png";
import img2 from "../assets/web-design-page/2.png";
import img3 from "../assets/web-design-page/3.png";
import img4 from "../assets/web-design-page/4.png";
import Dropdown from "./Dropdown";
import scrollup from "../assets/scroll-up.png";
import Swal from "sweetalert2";
import scroll from "../assets/scroll-down.png";
import { openings } from "../assets/job/openings";
import "./Dropdown.css";

const Carrers = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [option, setoption] = useState("");
  const [resume, setresume] = useState();
  const [ext, setext] = useState("");
  const [clicked, setClicked] = useState(null);

  const handleToggle = (index) => {
    if (clicked === index) {
      setClicked(null);
    } else {
      setClicked(index);
    }
  };
  const handleSubmit = () => {
    const formData = new FormData();
    if (!email || !name || !resume || !option) {
      return Swal.fire({
        icon: "warning",
        text: "Please fill all fields",
      });
    }
    if (ext !== "pdf") {
      return Swal.fire({
        icon: "warning",
        text: "Please select pdf format",
      });
    }
    formData.append("file", resume);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("position", option);
    fetch("/send/resume", {
      method: "POST",
      body: formData,
    }).then(() => {
      Swal.fire({
        icon: "success",
        text: "Message sent successfully",
      });
      window.location.reload();
    });
  };
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
    document.title = "SPL | Carrers";
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
          <div class="banner-title">Carrers at softolytics private limited</div>
          {/* <div class="search-boxes">
            <input type="text" placeholder="Search by Job Title" />
            <input type="text" placeholder="Search by Location" />
            <button class="search-btn">Search</button>
          </div> */}
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
            <div className="inner-container">
              <div className="halfs" style={{ marginLeft: "-3rem" }}>
                <div className="main-header">
                  <h1>Carrers</h1>
                </div>
                <p className="paragr">
                  We are very pleased about your interest in working with
                  Softolytics. At Softolytics we give our team the freedom and
                  responsibility to decide how they meet their deliverable and
                  targets. If you have ideas, ingenuity and a passion for making
                  a difference, come and be a part of our team.
                </p>
                <p className="paragr">
                  Every day we work with exceptional people, the latest and
                  greatest tech and leading companies across industries. As you
                  work for a growing company like Softolytics, there are
                  unlimited opportunities to move up the career ladder for
                  people who have a dream.
                </p>
                <p className="paragr">
                  ​If you are interested to be a part of Softolytics, please
                  send your updated CV to hr@softolytics.com
                  <a href="mailto:hr@softolytics.com">hr@softolytics.com</a>
                </p>
              </div>
              <div className="halfs" style={{ marginLeft: "3rem" }}>
                <div className="form-group">
                  <label className="form-label">Name:</label>
                  <input
                    type="text"
                    className="form-input"
                    name="name"
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Email:</label>
                  <input
                    type="email"
                    className="form-input"
                    name="email"
                    onChange={(e) => setemail(e.target.value)}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Job Position:</label>
                  <select
                    className="form-select"
                    name="jobPosition"
                    onChange={(e) => setoption(e.target.value)}
                  >
                    <option value="">Select job title</option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>
                    <option value="Fullstack Developer">
                      Fullstack Developer
                    </option>
                    <option value="Blockchain Developer">
                      Blockchain Developer
                    </option>
                    <option value="Devops Engineer">Devops Engineer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="Mobile Developer">Mobile Developer</option>
                    <option value="Quality Assurance Engineer">
                      Quality Assurance Engineer
                    </option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                    <option value="UI/UX Designer">HR/Admin/Accountant</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Upload Resume:</label>
                  <input
                    type="file"
                    className="form-input"
                    name="resume"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const extension = file.name.split(".").pop();
                      setext(extension);
                      setresume(file);
                    }}
                  />
                </div>

                <button className="form-submit" onClick={handleSubmit}>
                  Apply
                </button>
                <div className="scroll-down">
                  <div
                    className="scroll-down-arrow"
                    style={{ marginBottom: "4rem" }}
                  >
                    {/* <div className="scroll-down-text">Scroll Down</div> */}
                    <Link
                      to="#about"
                      onClick={(e) => smoothScroll(e, "#openings")}
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
            </div>
          </div>
        </div>
      </div>
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
                    <div
                      className={`content ${clicked === index ? "show" : ""}`}
                    >
                      <hr />
                      <div className="text">
                        Experience: {opening.Experience}
                      </div>
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
      {/* <Dropdown /> */}
    </div>
  );
};

export default Carrers;
