import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";

// Images
import Portrait1 from "../../assets/images/portrait-placeholder1.jpeg";
import Portrait2 from "../../assets/images/portrait-placeholder2.jpeg";

// GSAP
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const HomeAbout = () => {
  const smallerDeviceActive = window.matchMedia("(max-width: 1440px)");
  const delayChildrenDuration = 0.2;
  const delayChildrenImages = 0.1;

  useEffect(() => {
    if (smallerDeviceActive.matches) {
      //===============================================Smaller device timeline
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#about-section",
            start: "top +=900px",
            once: true,
          },
        })
        .to("#about-section", { autoAlpha: 1, duration: 0 })
        .fromTo(
          "#image-container-left",
          {y: 100, opacity: 0},
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
          }
        )
        .fromTo(
          "#image-container-right",
          {y: 150, x: 100},
          {
            y: 0,
            x: 0,
            duration: 1.5,
            delay: -1.5,
          }
        )
        .fromTo(
          "#image",
          { scale: 1.6, skewY: 20 },
          { scale: 1, skewY: 0, duration: 2, delay: -2 }
        )
        .fromTo(
          ".home-about-content-line-inner",
          { y: 100, skewY: 10 },
          {
            y: 0,
            skewY: 0,
            duration: 1,
            stagger: delayChildrenDuration,
            delay: -1.2,
          }
        )
        .fromTo(
          ".hero-content-paragraph",
          { opacity: 0, y: 65 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: -delayChildrenDuration * 3 /*3 is the amount of children*/,
          }
        )
        .fromTo(
          ".read-about-button",
          { opacity: 0, y: 65 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: -delayChildrenDuration * 4 /*3 is the amount of children*/,
          }
        )
        .fromTo(
          ".home-about-divider",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.3,
          }
        );
    } else {
      //===============================================Desktop timeline
      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#about-section",
            start: "top +=900px",
            once: true,
          },
        })
        .to("#about-section", { autoAlpha: 1, duration: 0 })
        .fromTo(
          "#image-container-left",
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
          }
        )
        .fromTo(
          "#image-container-right",
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            delay: -1.5,
          }
        )
        .fromTo(
          "#image",
          { scale: 1.6, skewY: 20 },
          { scale: 1, skewY: 0, duration: 2, delay: -2 }
        )
        .fromTo(
          ".home-about-content-line-inner",
          { y: 100, skewY: 10 },
          {
            y: 0,
            skewY: 0,
            duration: 1,
            stagger: delayChildrenDuration,
            delay: -1.2,
          }
        )
        .fromTo(
          ".hero-content-paragraph",
          { opacity: 0, y: 65 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: -delayChildrenDuration * 3 /*3 is the amount of children*/,
          }
        )
        .fromTo(
          ".read-about-button",
          { opacity: 0, y: 65 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            delay: -delayChildrenDuration * 4 /*3 is the amount of children*/,
          }
        )
        .fromTo(
          ".home-about-divider",
          {
            opacity: 0,
          },
          {
            opacity: 1,
            duration: 0.3,
          }
        );
    }
  });

  console.log(smallerDeviceActive);

  return (
    <div className="home-about" id="about-section">
      <div className="container">
        <div className="home-about-inner">
          <div className="home-about-content">
            <div className="home-about-content-inner">
              <h1>
                <div className="home-about-content-line">
                  <div
                    id="header-content-line"
                    className="home-about-content-line-inner"
                  >
                    I am currently a <span className="bolded">student</span>
                  </div>
                </div>
                <div className="home-about-content-line">
                  <div
                    id="header-content-line"
                    className="home-about-content-line-inner"
                  >
                    at <span className="bolded">Rijn IJssel Arnhem</span>{" "}
                    studying
                  </div>
                </div>
                <div className="home-about-content-line">
                  <div
                    id="header-content-line"
                    className="home-about-content-line-inner"
                  >
                    <span className="bolded">audio visual specialist</span>
                  </div>
                </div>
              </h1>
              <p className="hero-content-paragraph">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis
                et quasi architecto beatae vitae dicta sunt explicabo, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo.
              </p>
              <div className="home-about-buttons">
                <div className="read-about-button">
                  <Link to="/about">
                    <button className="read-about-link">Read About me</button>
                  </Link>
                </div>
                <div className="read-about-button">
                  <Link to="/portfolio">
                    <button className="read-about-link">View Portfolio</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-about-images">
            <div className="home-about-images-inner">
              <div id="image-container-left" className="image-container left">
                <img
                  id="image"
                  className="image"
                  src={Portrait2}
                  alt="portrait2"
                />
              </div>
              <div id="image-container-right" className="image-container right">
                <img
                  id="image"
                  className="image"
                  src={Portrait1}
                  alt="portrait1"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="home-about-divider" /> */}
    </div>
  );
};

export default HomeAbout;
