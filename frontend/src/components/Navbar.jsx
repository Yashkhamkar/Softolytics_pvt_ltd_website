import React, { useState, useEffect } from "react";
import { a, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import { motion } from "framer-motion";
import "./Navbar.css";
import { HiMenuAlt4, HiX } from "react-icons/hi";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const [state, setState] = useState(false);
  const [toggle, setToggle] = useState(false);
  const location = useLocation();

  const expand = () => {
    if (!state) {
      document.getElementById("items").style.transform = "scaleX(1)";
      document.getElementById("toggle1").innerHTML = "close";
      setState(true);
    } else {
      document.getElementById("items").style.transform = "scaleX(0)";
      document.getElementById("toggle1").innerHTML = "widgets";
      setState(false);
    }
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

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="/">
        <img src={logo} alt="Logo" className="logo" />
      </a>
      <div className="menu">
        <div className="toggle" id="toggle" onClick={expand}>
          <button
            id="toggle0"
            className="btn-menu"
            style={{ transform: "scale(0.8)" }}
          >
            MENU
          </button>
          <i
            className="material-icons"
            id="toggle1"
            style={{ transform: "scale(0.8)" }}
          >
            widgets
          </i>
        </div>
        <div className="items" id="items" style={{ textAlign: "center" }}>
          <a href="/">HOME</a>
          <a href="/Aboutpage">ABOUT</a>
          <a href="/carrers">CARRERS</a>
          <a href="/Servicepage">
            SERVICES
          </a>
          <a href="/contact" style={{ listStyle: "none", color: "white" }}>
            CONTACT
            {/* <a onClick={(e) => smoothScroll(e, "#contact")}>CONTACT</a> */}
          </a>
        </div>
      </div>
      <div
        className="app__navbar-menu"
        style={{ marginRight: "4rem", marginTop: "-2rem" }}
      >
        <HiMenuAlt4
          onClick={() => setToggle(true)}
          style={{ color: "white", backgroundColor: "#28262c" }}
        />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX
              onClick={() => setToggle(false)}
              style={{
                color: "white",
                backgroundColor: "#28262c",
                marginRight: location.pathname === "/" ? "3rem" : "0rem",
              }}
            />
            <ul>
              <li>
                <a href="/">HOME</a>
              </li>
              <li>
                <a href="/Aboutpage">ABOUT</a>
              </li>
              <li>
                <a href="/carrers">CARRERS</a>
              </li>
              <li>
                <a href="/Servicepage">SERVICES</a>
              </li>
              <li>
                <a href="/contact">CONTACT</a>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
