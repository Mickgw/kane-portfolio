import { useEffect } from "react";
import { Link } from "react-router-dom";
import FadeInWhenVisible from "../hooks/FadeInWhenVisible";

// Images
import Portrait1 from "../../assets/portraits/portrait-2.jpg";
import Portrait2 from "../../assets/portraits/portrait-1.jpg";

// GSAP
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";
gsap.registerPlugin(ScrollTrigger);

const HomeAboutResponsive = () => {
  const phoneActive = window.matchMedia("(max-width: 480px)");

  useEffect(() => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#home-about-responsive",
          start: "top +=800px",
          once: true,
        },
      })
      .to("#home-about-responsive", { autoAlpha: 1, duration: 0 })
      .fromTo(
        "#image-container-left-responsive",
        {
          x: phoneActive.matches ? -700 : 0,
          opacity: 0,
        },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          delay: -1,
        }
      )
      .fromTo(
        "#image-container-right-responsive",
        { x: phoneActive.matches ? 700 : 0, opacity: 0 },
        {
          opacity: 1,
          x: 0,
          duration: 2,
          delay: -1.5,
        }
      )
      .fromTo(
        "#home-about-image-responsive",
        { scale: 1.6, skewY: 20 },
        { scale: 1, skewY: 0, duration: 2, delay: -2 }
      );
  });

  return (
    <div className="home-about-responsive" id="home-about-responsive">
      <div className="container">
        <div className="home-about-inner">
          <div className="home-about-images">
            <div className="home-about-images-container">
              <div
                className="image-container left responsive"
                id="image-container-left-responsive"
              >
                <img
                  className="image"
                  id="home-about-image-responsive"
                  src={Portrait2}
                  alt="portrait2"
                />
              </div>
              <div
                className="image-container right responsive"
                id="image-container-right-responsive"
              >
                <img
                  className="image"
                  id="home-about-image-responsive"
                  src={Portrait1}
                  alt="portrait1"
                />
              </div>
            </div>
          </div>
          <div
            className="home-about-content"
            id="home-about-content-responsive"
          >
            <div className="home-about-content-inner">
              <FadeInWhenVisible>
                <h1>
                  <div className="home-about-content-line">
                    <div className="home-about-content-line-inner">
                      My goal is bla bla bla bla
                    </div>
                  </div>
                  <div className="home-about-content-line">
                    <div className="home-about-content-line-inner">
                      to bla bla bla people bla
                    </div>
                  </div>
                  <div className="home-about-content-line">
                    <div className="home-about-content-line-inner">
                      and create bla bla bla bla
                    </div>
                  </div>
                </h1>
              </FadeInWhenVisible>

              <div className="paragraphs-responsive">
                <FadeInWhenVisible>
                  <p
                    className="hero-content-paragraph-responsive"
                    id="paragraph-responsive"
                  >
                    Welcome to my website. Sed ut perspiciatis unde omnis iste
                    natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi.
                  </p>
                </FadeInWhenVisible>

                <FadeInWhenVisible>
                  <p
                    className="hero-content-paragraph-responsive"
                    id="paragraph"
                  >
                    Welcome to my website. Sed ut perspiciatis unde omnis iste
                    natus error sit voluptatem accusantium doloremque
                    laudantium, totam rem aperiam, eaque ipsa quae ab illo
                    inventore veritatis et quasi.
                  </p>
                </FadeInWhenVisible>
              </div>

              <FadeInWhenVisible>
                <div className="home-about-buttons">
                  <div className="home-about-button" id="button">
                    <Link to="/about" className="page-link">
                      <div className="read-about-link">Read About me</div>
                    </Link>
                  </div>
                  <em className="home-about-divider">or</em>
                  <div className="home-about-button" id="button">
                    <Link to="/portfolio" className="page-link">
                      <div className="read-about-link">View Portfolio</div>
                    </Link>
                  </div>
                </div>
              </FadeInWhenVisible>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutResponsive;
