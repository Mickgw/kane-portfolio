import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Parallax } from "react-parallax";

// Images
import Portrait from "../../assets/images/images-for-about/portrait_2.jpg";

// GSAP
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const HomeAboutNormal = () => {
  const delayChildrenDuration = 0.1;

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#home-about",
          start: "top +=900px",
          once: true,
        },
      })
      .to("#home-about", { autoAlpha: 1, duration: 0 })
      .fromTo(
        "#potrait-container",
        { opacity: 0, y: 200 },
        {
          opacity: 1,
          y: 0,
          duration: 1.5,
        }
      )
      .fromTo(
        "#header-content-line",
        { y: 100 },
        {
          y: 0,
          duration: 0.5,
          stagger: delayChildrenDuration,
        },
        "-=.5"
      )
      .fromTo(
        "#paragraph",
        { opacity: 0, y: 30 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: delayChildrenDuration,
        },
        "-=.1"
      )
      .fromTo(
        "#button",
        { opacity: 0, y: 30 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
        },
        "-=.1" //Add a delay because other way didnt work
      );
  });

  return (
    <div className="home-about-normal" id="home-about">
      <div className="home-about-normal-container">
        <div className="home-about-inner">
          <div className="home-about-portrait">
            <div className="potrait-container" id="potrait-container">
              <Parallax
                bgImage={Portrait}
                bgImageAlt="portrait"
                strength={150}
                className="parallax-bg"
              />
            </div>
          </div>
          <div className="home-about-content">
            <div className="home-about-content-inner">
              <h1>
                <div className="home-about-content-line">
                  <div
                    id="header-content-line"
                    className="home-about-content-line-inner"
                  >
                    Music
                  </div>
                </div>
                <div className="home-about-content-line">
                  <div
                    id="header-content-line"
                    className="home-about-content-line-inner"
                  >
                    Fitness
                  </div>
                </div>
                <div className="home-about-content-line">
                  <div
                    id="header-content-line"
                    className="home-about-content-line-inner"
                  >
                    Gaming
                  </div>
                </div>
              </h1>
              <div className="paragraphs">
                <p className="hero-content-paragraph" id="paragraph">
                  My hobbies take up quite a bit of free time.
                </p>
                <p className="hero-content-paragraph" id="paragraph">
                  Besides my hobbies, I am also busy with expanding my
                  portfolio. Every opportunity I get I will try to make the most
                  awesome photo's I can. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua do eiusmod tempor incididunt.
                </p>
              </div>

              <div className="home-about-buttons">
                <div className="home-about-button" id="button">
                  <Link to="/about" className="page-link">
                    <div className="home-about-link">More About me</div>
                  </Link>
                </div>
                <em className="home-about-divider" id="button">
                  or
                </em>
                <div className="home-about-button" id="button">
                  <Link to="/portfolio" className="page-link">
                    <div className="home-about-link">View Portfolio</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutNormal;
