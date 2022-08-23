import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbArrowUpRight } from "react-icons/tb";
import gsap from "gsap";

//Components
import PageLoader from "../components/loader/PageLoader";

//Images
import bigPortrait from "../assets/images/image-1-banner.jpeg";

const About = () => {
  const [loading, setLoading] = useState(true);
  const timer_duration = 1400;
  const delayChildrenDuration = 0.1;

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
        { y: 250, skewY: 5 },
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
        { opacity: 0, y: 100 },
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
                  Kane Jansen.
                </div>
              </div>
              <div className="about-header-line">
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
              </div>
            </h1>

            <div className="about-details">
              <div className="about-details-grid">
                <div className="big-portrait" id="big-portrait">
                  <img
                    className="about-image"
                    src={bigPortrait}
                    alt="big portrait"
                    id="about-image"
                  />
                </div>
                <div className="about-details-data">
                  <p className="about-paragraph" id="about-paragraph">
                    My expertise is art direction, animation and anything
                    interactive. I’ve had over 7 years of industry experience,
                    from working with startups, agencies and international
                    clients from concept to final deliverables.
                  </p>
                  <p className="about-paragraph" id="about-paragraph">
                    My expertise is art direction, animation and anything
                    interactive. I’ve had over 7 years of industry experience,
                    from working with startups, agencies and international
                    clients from concept to final deliverables.
                  </p>
                  <div className="about-socials">
                    <ul className="about-socials-list">
                      <li className="about-social">
                        <a className="about-social-link" href="https://www.instagram.com/kj.026/" target="_blank" rel="noopener noreferrer">
                          <span className="social-link-text">Instagram</span>
                          <TbArrowUpRight className="about-social-link-arrow" />
                        </a>
                      </li>
                      <li className="about-social">
                        <a className="about-social-link" href="/" target="_blank" rel="noopener noreferrer">
                          <span className="social-link-text">Youtube</span>
                          <TbArrowUpRight className="about-social-link-arrow" />
                        </a>
                      </li>
                      <li className="about-social">
                        <a className="about-social-link" href="/" target="_blank" rel="noopener noreferrer">
                          <span className="social-link-text">Unsplash</span>
                          <TbArrowUpRight className="about-social-link-arrow" />
                        </a>
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
