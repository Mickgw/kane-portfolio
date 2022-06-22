import Image1 from "../assets/images/image-1-banner.jpeg";
import Image2 from "../assets/images/portrait-placeholder1.jpeg";
import Image3 from "../assets/images/image-3-banner.jpeg";

import { useEffect, useState } from "react";
// import { gsap } from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, AnimatePresence } from "framer-motion";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Banner2 = () => {
  const [showShowScrollDown, setShowScrollDown] = useState(false);
  const ImageDuration = 1;

  const scrollDownTextAnimation = {
    exit: {
      y: 100,
      opacity: 0,
    },
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset < 200) {
        setShowScrollDown(true);
      } else {
        setShowScrollDown(false);
      }
    });
  }, []);

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to("#banner", { autoAlpha: 1, duration: 0 }) //Prevents white flash

  //     .fromTo(
  //       "#reveal-image-left",
  //       {
  //         y: 100,
  //         opacity: 0,
  //       },
  //       { delay: 1, y: 0, opacity: 1, duration: ImageDuration }
  //     )
  //     .fromTo(
  //       "#reveal-image-right",
  //       {
  //         y: 100,
  //         opacity: 0,
  //       },
  //       { y: 0, opacity: 1, delay: -0.5, duration: ImageDuration }
  //     )
  //     .fromTo(
  //       "#reveal-middle-image",
  //       { y: 100, opacity: 0 },
  //       { y: 0, opacity: 1, delay: -0.5, duration: ImageDuration }
  //     )
  //     .fromTo(
  //       "#reveal-banner-text",
  //       { opacity: 0 },
  //       { duration: 3, opacity: 1 }
  //     )
  // });

  return (
    <div id="banner" className="banner">
      <div className="container">
        <div className="row">
          <div id="reveal-banner-text" className="banner-text">
            {/* <Marquee className="banner-marquee" gradient={false} pauseOnHover={true}>
              kane jansen
            </Marquee> */}
            kane jansen
          </div>
          <div className="section left">
            <div className="inner-section">
              <img
                id="reveal-image-left"
                className="side-image left"
                src={Image1}
                alt="left"
              />
            </div>
            <div className="inner-section" />
          </div>
          <div id="middle-image-container" className="section middle">
            <img
              id="reveal-middle-image"
              className="banner-image"
              src={Image2}
              alt="middle"
            />
          </div>
          <div className="section right">
            <div className="inner-section" />
            <div className="inner-section">
              <img
                id="reveal-image-right"
                className="side-image right"
                src={Image3}
                alt="right"
              />
            </div>
          </div>
        </div>
        <AnimatePresence exitBeforeEnter>
          {showShowScrollDown && (
            <motion.div
              id="scrolldown-text"
              className="scroll"
              variants={scrollDownTextAnimation}
              exit="exit"
            >
              <span>
                Scroll down <FontAwesomeIcon icon={faArrowDown} />
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Banner2;
