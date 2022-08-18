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
          y: 300,
          x: phoneActive.matches ? -100 : 0,
          opacity: phoneActive.matches ? 1 : 0,
        },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 1.5,
        }
      )
      .fromTo(
        "#image-container-right-responsive",
        { y: 300, x: phoneActive.matches ? 100 : 0 },
        {
          y: 0,
          x: 0,
          duration: 1.5,
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
                <div className="who-am-i-container">
                  <h1 className="who-am-i" id="header-content-line-responsive">
                    Hello!
                  </h1>
                </div>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <h1>
                  <div className="home-about-content-line">
                    <div
                      id="header-content-line"
                      className="home-about-content-line-inner"
                    >
                      <span className="what-am-i">I am Kane Jansen</span>
                    </div>
                  </div>
                </h1>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <p className="hero-content-paragraph" id="paragraph-responsive">
                  I am a photographer and videographer. Sed ut perspiciatis unde
                  omnis iste natus error sit voluptatem accusantium doloremque
                  laudantium, totam rem aperiam, eaque ipsa quae ab illo
                  inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Sed ut perspiciatis unde omnis iste natus
                  error sit voluptatem accusantium doloremque laudantium, totam
                  rem aperiam.
                </p>
              </FadeInWhenVisible>

              <FadeInWhenVisible>
                <div className="home-about-buttons">
                  <div
                    className="read-about-button"
                    id="read-about-button-responsive"
                  >
                    <Link to="/about">
                      <button className="read-about-link">Read About me</button>
                    </Link>
                  </div>
                  <div className="read-about-button">
                    <Link to="/portfolio">
                      <button className="read-about-link">
                        View Portfolio
                      </button>
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
