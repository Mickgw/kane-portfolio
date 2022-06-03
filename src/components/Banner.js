import Image1 from "../assets/images/image-1-banner.jpeg";
import Image2 from "../assets/images/image-2-banner.jpeg";
import Image3 from "../assets/images/image-3-banner.jpeg";

import React, { useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";

const Banner2 = () => {
  useEffect(() => {
    gsap
      .timeline()
      .fromTo("#reveal-image", {
        x: "-100vw",
      }, {x: 0, duration: 2, ease: Power2.easeIn});
    // .fromTo(
    //   "#imnage-container",
    //   { y: "100" },
    //   {
    //     y: 0,
    //     skewY: 0,
    //     duration: 1,
    //     ease: Power2.easeInOut,
    //   }
    // )
    // .fromTo(
    //   "#reveal-image",
    //   { y: 25 },
    //   {
    //     y: 0,
    //     delay: -1,
    //     ease: Power2.easeInOut,
    //   }
    // );
  });

  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="main-text">kane jansen</div>
          <div className="section left">
            <div className="inner-section">
              <img
                id="reveal-image"
                className="side-image left"
                src={Image1}
                alt="left"
              />
            </div>
            <div className="inner-section" />
          </div>
          <div className="section middle">
            <img className="main-image" src={Image2} alt="middle" />
          </div>
          <div className="section right">
            <div className="inner-section" />
            <div className="inner-section">
              <img className="side-image right" src={Image3} alt="right" />
            </div>
          </div>
        </div>
        <div className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
      <div className="fixed-misc">
        Arnhem, The Netherlands - 51°58'48"N, 5°54'40"E
      </div>
    </div>
  );
};

export default Banner2;
