import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
    gsap
      .timeline()
      .to(".about", { autoAlpha: 1, duration: 0 })
      .fromTo(
        ".header-text",
        { y: 250, skewY: 5 },
        {
          skewY: 0,
          y: 0,
          duration: 1.5,
          stagger: delayChildrenDuration,
          delay: 0,
        }
      )
      .fromTo(
        ".big-portrait",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=.9" 
      )
      .fromTo(
        ".about-details-text",
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
        },
        "-=.8" 
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
        <div className="about">
          <div className="container">
            <h1>
              <div className="about-header-line">
                <div className="header-text">Kane Jansen.</div>
              </div>
              <div className="about-header-line">
                <div className="header-text">
                  I am currently a <span className="outlined">student</span>
                </div>
              </div>
              <div className="about-header-line">
                <div className="header-text">
                  at{" "}
                  <span className="outlined">Rijn IJssel College Arnhem</span>
                </div>
              </div>
              <div className="about-header-line">
                <div className="header-text">
                  studying{" "}
                  <span className="outlined">Audio Visual Specialist</span>
                </div>
              </div>
            </h1>

            <div className="about-details">
              <div className="about-details-grid">
                <div className="big-portrait">
                  <img
                    className="about-image"
                    src={bigPortrait}
                    alt="big portrait"
                  />
                </div>
                <div className="about-details-text">
                  <p className="about-paragraph">
                    My expertise is art direction, animation and anything
                    interactive. I’ve had over 7 years of industry experience,
                    from working with startups, agencies and international
                    clients from concept to final deliverables.
                  </p>
                  <p className="about-paragraph">
                    My expertise is art direction, animation and anything
                    interactive. I’ve had over 7 years of industry experience,
                    from working with startups, agencies and international
                    clients from concept to final deliverables.
                  </p>
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

