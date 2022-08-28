import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

//Components
import PageLoader from "../components/loader/PageLoader";
import FadeInWhenVisible from "../components/hooks/FadeInWhenVisible";
// import { Parallax } from "react-parallax";

import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsArrowRight } from "react-icons/bs";

//Images
import bigPortrait from "../assets/images/images-for-about/portrait_1.jpg";

const About = () => {
  const [loading, setLoading] = useState(true);
  const timer_duration = 0;
  const delayChildrenDuration = 0.1;

  //Show more button
  const [showMore, setShowMore] = useState(false);
  // const [showMoreStatus, setShowMoreStatus] = useState("close");

  //Set loading to false after time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, timer_duration);
    return () => clearTimeout(timer);
  });

  //Disbles navbar inner when loading is active, this prevent the logo and menu to be seen on the loader
  useEffect(() => {
    const navbar_inner = document.querySelector("div.navbar-inner");

    loading
      ? navbar_inner.classList.add("loading")
      : setTimeout(() => navbar_inner.classList.remove("loading"), 600);
  }, [loading]);

  const loader_animation = {
    exit: {
      y: "-100vh",
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    gsap.config({
      nullTargetWarn: false,
      trialWarn: false,
    });

    gsap
      .timeline()
      .to("#about-page", { autoAlpha: 1, duration: 0 })
      .fromTo(
        "#about-header-text",
        { y: 300, skewY: 15 },
        {
          skewY: 0,
          y: 0,
          duration: 1,
          stagger: delayChildrenDuration,
          delay: 0,
        }
      )
      .fromTo(
        "#big-portrait",
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=.6"
      )
      .fromTo(
        "#about-image",
        { scale: 1.2 },
        {
          scale: 1,
          duration: 1,
        },
        "-=.7"
      )
      .fromTo(
        "#about-paragraph",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: delayChildrenDuration,
        },
        "-=1"
      );
  });

  console.log(showMore);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="pageloader"
          key="loader"
          variants={loader_animation}
          exit="exit"
        >
          <PageLoader loaderText="About" />
        </motion.div>
      ) : (
        <div className="about" id="about-page">
          <div className="container">
            <h1>
              <div className="about-header-line">
                <div className="header-text" id="about-header-text">
                  Upcoming
                </div>
              </div>
              <div className="about-header-line">
                <div className="header-text" id="about-header-text">
                  Photographer
                </div>
              </div>
              <div className="about-header-line">
                <div className="header-text" id="about-header-text">
                  Cinematographer
                </div>
              </div>
              <div className="about-header-line">
                <div className="header-text" id="about-header-text">
                  Based in Arnhem, The Netherlands
                </div>
              </div>

              {/* <div className="about-header-line">
                <div className="header-text" id="about-header-text">
                  I am currently a <span className="outlined">student</span>
                </div>
              </div>
              <div className="about-header-line">
                <div className="header-text" id="about-header-text">
                  at{" "}
                  <span className="outlined">Rijn IJssel College Arnhem</span>
                </div>
              </div>
              <div className="about-header-line">
                <div className="header-text" id="about-header-text">
                  studying{" "}
                  <span className="outlined">Audio Visual Specialist</span>
                </div>
              </div> */}
            </h1>

            <div className="big-portrait" id="big-portrait">
              {/* <Parallax
                bgImage={bigPortrait}
                bgImageAlt="portrait"
                strength={200}
                className="parallax-bg"
              /> */}
              <img
                className="about-banner"
                src={bigPortrait}
                alt="big portrait"
                id="about-image"
              />
            </div>

            <div className="about-details-data">
              <div className="about-details-data-grid">
                <FadeInWhenVisible>
                  <div className="header-container">About me</div>
                </FadeInWhenVisible>

                <div className="paragraphs-container">
                  <FadeInWhenVisible>
                    <p className="about-details-paragraphs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum.
                    </p>
                  </FadeInWhenVisible>

                  <FadeInWhenVisible>
                    <p className="about-details-paragraphs">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                  </FadeInWhenVisible>
                </div>
              </div>

              <div className="services-section">
                <div className="services-section-grid">
                  <div className="header-container">My services</div>
                  <div className="services-container">
                    <ul className="services-list">
                      <li className="services-column">
                        <div
                          className="accordion-header"
                          onClick={() => {
                            setShowMore(!showMore);
                          }}
                        >
                          <div className="accordion-title">Photography</div>
                          <div className="accordion-button">
                            <BsArrowRight className="showmore-icon" />
                          </div>
                        </div>
                        <div className={showMore ? "accordion-item collapsed" : "accordion-item"}>
                          <div className="accordion-content">
                            <p className="servivce-description">
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Ut enim ad minim veniam,
                              quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure
                              dolor in reprehenderit in voluptate velit esse
                              cillum dolore eu fugiat nulla pariatur.
                            </p>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default About;
