import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

//Components
import PageLoader from "../components/loader/PageLoader";
import FadeInWhenVisible from "../components/hooks/FadeInWhenVisible";
import Accordion from "../components/Accordion";
import {
  ParallaxBanner,
  ParallaxBannerLayer,
  ParallaxProvider,
} from "react-scroll-parallax";

//Images
import bigPortrait from "../assets/images/images-for-about/portrait_1.jpg";
import bigPortraitTwo from "../assets/images/images-for-about/portrait_3.1.JPEG";

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
                  Based in Arnhem.
                </div>
              </div>
            </h1>

            <ParallaxProvider>
              <div className="big-portrait" id="big-portrait">
                <ParallaxBanner className="about-banner" id="about-image">
                  <ParallaxBannerLayer image={bigPortrait} speed={15} />
                </ParallaxBanner>
              </div>
            </ParallaxProvider>

            <div className="about-details-data">
              <div className="about-details-data-grid">
                <FadeInWhenVisible>
                  <div className="section-header-about">About me</div>
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

              <FadeInWhenVisible>
                <ParallaxProvider>
                  <div className="big-portrait-two">
                    <ParallaxBanner className="portrait-two">
                      <ParallaxBannerLayer image={bigPortraitTwo} speed={8} />
                    </ParallaxBanner>
                  </div>
                </ParallaxProvider>
              </FadeInWhenVisible>

              <div className="services-section">
                <FadeInWhenVisible>
                  <div className="section-header">My services</div>
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                  <div className="services-section-grid">
                    <div className="services-container">
                      <Accordion title="Photography">
                        The goal is to capture a clients story with the best
                        possible photos. Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                      </Accordion>

                      <Accordion title="Videography">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Accordion>

                      <Accordion title="Video editing">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Accordion>

                      <Accordion title="Photoshop">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                      </Accordion>
                    </div>
                  </div>
                </FadeInWhenVisible>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default About;
