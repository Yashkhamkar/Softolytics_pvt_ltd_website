import React, { useEffect, useState } from "react";
import img1 from "../assets/animation/4901-location-finding.json";
import img2 from "../assets/animation/83988-phone.json";
import img3 from "../assets/animation/53161-ringing-red-stationary-phone-with-button-keypad-vector-illustration.json";
import img4 from "../assets/animation/89076-email-sent.json";
import Lottie from "react-lottie";
import Swal from "sweetalert2";
import "./Contact.css";
import "./Contact1.css";
import GoogleMapReact from "google-map-react";

import { SiEightsleep } from "react-icons/si";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: img1,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions1 = {
  loop: true,
  autoplay: true,
  animationData: img2,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions2 = {
  loop: true,
  autoplay: true,
  animationData: img3,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const defaultOptions3 = {
  loop: true,
  autoplay: true,
  animationData: img4,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const Contact = () => {
  useEffect(() => {
    document.title = "SPL | Contact-us";
  }, []);
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isPhoneValid, setIsPhoneValid] = useState(true);
  const [message, setmessage] = useState("");
  const [name, setname] = useState("");

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^\d{10}$/;
    return regex.test(phone);
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    setIsEmailValid(validateEmail(emailValue));
  };

  const handlePhoneChange = (e) => {
    const phoneValue = e.target.value;
    setPhone(phoneValue);
    setIsPhoneValid(validatePhone(phoneValue));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !message) {
      return Swal.fire({
        icon: "warning",
        text: "Please fill all fields",
      });
    }
    fetch(`/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, phone, message }),
    }).then(() => {
      Swal.fire({
        icon: "success",
        text: "Message sent successfully",
      });
      setEmail("");
      setPhone("");
      setmessage("");
      setname("");
    });
  };

  return (
    <>
      <div className="u-body u-xl-mode" data-lang="en">
        <section className="u-clearfix u-gradient u-section-1" id="sec-7f6a">
          <div className="u-expanded-width u-grey-5 u-shape u-shape-rectangle u-shape-1"></div>
          <div className="u-list u-list-1">
            <div className="u-repeater u-repeater-1">
              <div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-1">
                  <span className="u-custom-item u-icon u-text-palette-1-base u-icon-1">
                    <Lottie options={defaultOptions} height={100} width={80} />
                  </span>
                  <h5
                    className="u-text u-text-1 "
                    style={{ marginTop: "2rem" }}
                  >
                    Visit Us
                  </h5>
                  <p className="u-text u-text-2">
                    #15A, 4th Floor, Suite No. 927, City Vista, Fountain Road,
                    Kharadi, Pune 411014, INDIA
                  </p>
                </div>
              </div>
              <div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-2">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-2">
                  <span className="u-custom-item u-file-icon u-icon u-text-palette-1-base u-icon-2">
                    <a href="https://www.instagram.com/xassh__" target="_blank">
                      <Lottie
                        options={defaultOptions1}
                        height={100}
                        width={80}
                      />
                    </a>
                    {/* <img src="images/159832-1310eb8b.png" alt="" /> */}
                  </span>
                  <h5 className="u-text u-text-3" style={{ marginTop: "2rem" }}>
                    phone number
                  </h5>
                  <p className="u-text u-text-4">
                    + 91 8983383247 <br />
                    +91 9822218149
                  </p>
                </div>
              </div>
              <div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-3">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-3">
                  <span className="u-custom-item u-file-icon u-icon u-text-palette-1-base u-icon-3">
                    {/* <img src="images/953831-4f3e4538.png" alt="" /> */}
                    <Lottie
                      options={defaultOptions2}
                      height={100}
                      width={80}
                      style={{ marginLeft: "-10px" }}
                    />
                  </span>
                  <h5 className="u-text u-text-5" style={{ marginTop: "2rem" }}>
                    Fax
                  </h5>
                  <p className="u-text u-text-6">1-234-567-8900</p>
                </div>
              </div>
              <div className="u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-4">
                <div className="u-container-layout u-similar-container u-valign-top u-container-layout-4">
                  <span className="u-custom-item u-file-icon u-icon u-text-palette-1-base u-icon-4">
                    {/* <img src="images/561127-14c331f2.png" alt="" /> */}{" "}
                    <Lottie
                      options={defaultOptions3}
                      height={100}
                      width={80}
                      style={{ marginLeft: "-10px" }}
                    />
                  </span>
                  <h5 className="u-text u-text-7" style={{ marginTop: "2rem" }}>
                    Email
                  </h5>
                  <p className="u-text u-text-8">
                    <a
                      href="mailto:info@softolytics.com"
                      className="u-active-none u-border-1 u-border-no-left u-border-no-right u-border-no-top u-border-palette-1-base u-btn u-button-link u-button-style u-hover-none u-none u-text-palette-1-base u-btn-1"
                    >
                      info@softolytics.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="u-clearfix u-layout-wrap u-layout-wrap-1">
            <div className="u-layout">
              <div className="u-layout-row">
                <div className="u-container-style u-layout-cell u-left-cell u-size-30 u-layout-cell-1">
                  <div className="u-container-layout u-valign-top u-container-layout-5">
                    <div className="u-form u-form-1">
                      <form
                        className="u-form-spacing-30 u-form-vertical u-inner-form"
                        // style="padding: 10px"
                        style={{ padding: "10px" }}
                      >
                        <div className="u-form-group u-form-message">
                          {/* <label
                            for="message-319a"
                            className="u-label u-text-body-alt-color u-label-3"
                          >
                            Full name
                          </label> */}
                          <input
                            placeholder="Enter your Full name"
                            rows="4"
                            cols="50"
                            id="message-319a"
                            name="message"
                            className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle "
                            required=""
                            style={{ fontFamily: "Alegerya" }}
                            onChange={(e) => setname(e.target.value)}
                            spellcheck="false"
                          />
                        </div>
                        <div className="u-form-group u-form-message">
                          {/* <label
                            for="message-319a"
                            className="u-label u-text-body-alt-color u-label-3"
                          >
                            *Email
                          </label> */}
                          <input
                            placeholder="Enter your email"
                            rows="4"
                            cols="50"
                            style={{ fontFamily: "Alegerya" }}
                            id="message-319a"
                            name="message"
                            className={`u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle ${
                              isEmailValid ? "valid" : "invalid"
                            }`}
                            required=""
                            onChange={handleEmailChange}
                            value={email}
                            spellcheck="false"
                          />
                          <div className="message-container">
                            {isEmailValid ? (
                              <></>
                            ) : (
                              <span className="invalid-message">
                                Email is invalid
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="u-form-group u-form-message">
                          {/* <label
                            for="message-319a"
                            className="u-label u-text-body-alt-color u-label-3"
                          >
                            *Phone
                          </label> */}
                          <input
                            placeholder="Enter your Phone"
                            rows="4"
                            cols="50"
                            style={{ fontFamily: "Alegerya" }}
                            id="message-319a"
                            name="message"
                            className={`u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle ${
                              isEmailValid ? "valid" : "invalid"
                            }`}
                            required=""
                            onChange={handlePhoneChange}
                            value={phone}
                            spellcheck="false"
                          />
                          <div className="message-container">
                            {isPhoneValid ? (
                              <></>
                            ) : (
                              <span className="invalid-message">
                                Invalid phone
                              </span>
                            )}
                          </div>
                        </div>
                        <div className="u-form-group u-form-message">
                          {/* <label
                            for="message-319a"
                            className="u-label u-text-body-alt-color u-label-3"
                          >
                            Message
                          </label> */}
                          <textarea
                            placeholder="Enter your message"
                            rows="4"
                            cols="50"
                            style={{ fontFamily: "Alegerya" }}
                            id="message-319a"
                            name="message"
                            className="u-border-2 u-border-no-left u-border-no-right u-border-no-top u-border-white u-input u-input-rectangle "
                            required=""
                            onChange={(e) => {
                              setmessage(e.target.value);
                            }}
                            spellcheck="false"
                          ></textarea>
                        </div>
                        <div className="u-align-left u-form-group u-form-submit">
                          <button
                            href="#"
                            className="u-btn u-btn-round u-btn-submit u-button-style u-radius-50 u-text-palette-1-base u-white u-btn-2"
                            onClick={handleSubmit}
                            style={{ fontFamily: "Algereya" }}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="u-align-left u-container-style u-layout-cell u-right-cell u-size-30 u-layout-cell-2">
                  <div className="u-container-layout u-container-layout-6">
                    <h2 className="u-text u-text-body-alt-color u-text-default u-text-9">
                      Get in touch
                    </h2>
                    <p className=" u-text u-text-body-alt-color u-text-font u-text-11">
                      We can ensure reliability, low cost fares and most
                      important, with safety and comfort in mind.
                    </p>
                    <p className="u-text u-text-body-alt-color u-text-11">
                      Etiam sit amet convallis erat – className aptent taciti
                      sociosqu ad litora torquent per conubia! Maecenas gravida
                      lacus. Lorem etiam sit amet convallis erat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.279946400804!2d73.94229017514651!3d18.561413582540098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c37942ddc8d9%3A0x5617a3bcbfc7565f!2sCity%20Vista%2C%20Kharadi!5e0!3m2!1sen!2sin!4v1681998786040!5m2!1sen!2sin"
          width="100%"
          height="500"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
