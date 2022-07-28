import React, { useEffect } from "react";
import { ScrollTrigger } from "gsap/all";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

// Images
import Portrait1 from "../../assets/images/portrait-placeholder1.jpeg";
import Portrait2 from "../../assets/images/portrait-placeholder2.jpeg";

// GSAP
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const HomeAbout = () => {
  // const smallerDeviceActive = window.matchMedia("(max-width: 960px)");
  const delayChildrenDuration = 0.2;
  const delayChildrenImages = 0.3;

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about-section",
          start: "top +=650px",
          once: true,
        },
      })
      .to("#about-section", { autoAlpha: 1, duration: 0 })
      .fromTo(
        "#image-container",
        { opacity: 0, y: 200 },
        { opacity: 1, y: 0, duration: 1, stagger: delayChildrenImages, delay: .5 }
      )
      .fromTo(
        "#image",
        { scale: 1.6, skewY: 20 },
        { scale: 1, skewY: 0, duration: 2, delay: -1.5 }
      )
      .fromTo(
        ".home-about-content-line-inner",
        { y: 100 },
        { y: 0, duration: 1, stagger: delayChildrenDuration, delay: -1 }
      )
      .fromTo(
        ".hero-content-paragraph",
        { opacity: 0, y: 100 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: -delayChildrenDuration * 3 /*3 is the amount of children*/,
        }
      );
  });

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
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor
                sit amet, consectetur, adipisci velit, sed quia non numquam eius
                modi tempora incidunt ut labore et dolore magnam aliquam quaerat
                voluptatem.
              </p>
              {/* <div className="read-about-button">
                <Link to="/about">
                  <h4 className="read-about-link">
                    read about me{" "}
                    <FontAwesomeIcon
                      icon={faArrowRightLong}
                      className="arrow-icon"
                    />
                  </h4>
                </Link>
              </div> */}
            </div>
          </div>
          <div className="home-about-images">
            <div className="home-about-images-inner">
              <div id="image-container" className="image-container right">
                <img
                  id="image"
                  className="image"
                  src={Portrait1}
                  alt="portrait1"
                />
              </div>
              <div id="image-container" className="image-container left">
                <img
                  id="image"
                  className="image"
                  src={Portrait2}
                  alt="portrait2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
