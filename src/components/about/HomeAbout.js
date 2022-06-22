import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { gsap, Power4 } from "gsap";


import Portrait1 from "../../assets/images/portrait-placeholder1.jpeg";
import Portrait2 from "../../assets/images/portrait-placeholder2.jpeg";

const HomeAbout = () => {
  // useEffect(() => {
  //   var timeline = gsap.timeline();

  //   const ImageDuration = 1.5;

  //   timeline
  //     .fromTo(
  //       "#image-container",
  //       { x: "100vw", skewY: 15 },
  //       { x: 0, skewY: 0, ease: Power4.inOut, duration: ImageDuration }
  //     )
  //     .fromTo(
  //       "#portrait",
  //       {
  //         scale: 1.3,
  //       },
  //       { scale: 1, delay: -ImageDuration, duration: ImageDuration * 1.5 }
  //     );

  //   timeline.from("#header-content-line", { y: 100, duration: 1, delay: -1 });
  // });

  return (
    <div className="home-about">
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
                    at <span className="bolded">Rijn IJssel Arnhem</span> studying
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
              <p>
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
            </div>
          </div>
          <div className="home-about-images">
            <div className="home-about-images-inner">
              <div id="image-container" className="home-about-image left">
                <img id="portrait" src={Portrait2} alt="portrait2" />
              </div>
              <div id="image-container" className="home-about-image right">
                <img id="portrait" src={Portrait1} alt="portrait1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
