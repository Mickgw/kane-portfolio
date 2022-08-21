
import { Link } from "react-router-dom";

// Images
import Portrait1 from "../../assets/portraits/portrait-2.jpg";
import Portrait2 from "../../assets/portraits/portrait-1.jpg";

// GSAP
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const HomeAboutNormal = () => {
  // const smallDeviceActive = window.matchMedia("(max-width: 1440px)");
  // const delayChildrenDuration = 0.2;

  // useEffect(() => {
  //   if (reveal) {
  //     if (smallDeviceActive.matches) {
  //       //===============================================Smaller device timeline
  //       gsap
  //         .timeline({
  //           once: true,
  //         })
  //         .to("#home-about", { autoAlpha: 1, duration: 0 })
  //         .fromTo(
  //           "#image-container-left",
  //           { y: 100, opacity: 0 },
  //           {
  //             opacity: 1,
  //             y: 0,
  //             duration: 1.5,
  //           }
  //         )
  //         .fromTo(
  //           "#image-container-right",
  //           { y: 150, x: 100 },
  //           {
  //             y: 0,
  //             x: 0,
  //             duration: 1.5,
  //             delay: -1.5,
  //           }
  //         )
  //         .fromTo(
  //           "#image",
  //           { scale: 1.6, skewY: 20 },
  //           { scale: 1, skewY: 0, duration: 2, delay: -2 }
  //         )
  //         .fromTo(
  //           "#header-content-line",
  //           { y: 100 },
  //           {
  //             y: 0,
  //             duration: 1,
  //             stagger: delayChildrenDuration,
  //             delay: -1.2,
  //           }
  //         )
  //         .fromTo(
  //           "#paragraph",
  //           { opacity: 0, y: 65 },
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 1,
  //           },
  //           "-=.2" //Add a delay because other way didnt work
  //         )
  //         .fromTo(
  //           "#button",
  //           { opacity: 0, y: 65 },
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 1,
  //           },
  //           "-=.8" //Add a delay because other way didnt work
  //         );
  //     } else {
  //       //===============================================Desktop timeline
  //       gsap
  //         .timeline({
  //           scrollTrigger: {
  //             trigger: "#home-about",
  //             start: "top +=1000px",
  //             once: true,
  //           },
  //         })
  //         .to("#home-about", { autoAlpha: 1, duration: 0 })
  //         .fromTo(
  //           "#image-container-left",
  //           { opacity: 0, y: 100 },
  //           {
  //             opacity: 1,
  //             y: 0,
  //             duration: 1.5,
  //           }
  //         )
  //         .fromTo(
  //           "#image-container-right",
  //           { opacity: 0, y: 100 },
  //           {
  //             opacity: 1,
  //             y: 0,
  //             duration: 1.5,
  //             delay: -1.5,
  //           }
  //         )
  //         .fromTo(
  //           "#image",
  //           { scale: 1.8, skewY: 10 },
  //           { scale: 1, skewY: 0, duration: 2, delay: -2 }
  //         )
  //         .fromTo(
  //           "#header-content-line",
  //           { y: 100 },
  //           {
  //             y: 0,
  //             duration: 1,
  //             stagger: delayChildrenDuration,
  //             delay: -1.2,
  //           }
  //         )
  //         .fromTo(
  //           "#paragraph",
  //           { opacity: 0, y: 65 },
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 1,
  //           },
  //           "-=.8"
  //         )
  //         .fromTo(
  //           "#button",
  //           { opacity: 0, y: 65 },
  //           {
  //             y: 0,
  //             opacity: 1,
  //             duration: 1,
  //           },
  //           "-=.8" //Add a delay because other way didnt work
  //         );
  //     }
  //   }
  // }, [reveal]);

  return (
    <div className="home-about-normal" id="home-about">
      <div className="container">
        <div className="home-about-inner">
          <div className="home-about-content">
            <div className="home-about-content-inner">
              {/* <div className="who-am-i-container">
                <h1 className="who-am-i" id="header-content-line">I'm Kane Jansen</h1>
              </div> */}

              <h1>
                <div className="home-about-content-line">
                  <div
                    id="header-content-line"
                    className="home-about-content-line-inner"
                  >
                    <span className="what-am-i">
                      Photographer & Videographer
                    </span>
                  </div>
                </div>
              </h1>
              <p className="hero-content-paragraph" id="paragraph">
                I am a photographer and videographer. Sed ut perspiciatis unde
                omnis iste natus error sit voluptatem accusantium doloremque
                laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam.
              </p>
              <div className="home-about-buttons">
                <div className="read-about-button" id="button">
                  <Link to="/about">
                    <div className="read-about-link">Read About me</div>
                  </Link>
                </div>
                <em className="home-about-divider">or</em>
                <div className="read-about-button" id="button">
                  <Link to="/portfolio">
                    <div className="read-about-link">View Portfolio</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="home-about-images">
            <div className="home-about-images-container">
              <div className="image-container left" id="image-container-left">
                <img
                  id="image"
                  className="image"
                  src={Portrait2}
                  alt="portrait2"
                />
              </div>
              <div className="image-container right" id="image-container-right">
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
    </div>
  );
};

export default HomeAboutNormal;
