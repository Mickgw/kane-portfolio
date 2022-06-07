import Image1 from "../assets/images/image-1-banner.jpeg";
import Image2 from "../assets/images/image-2-banner.jpeg";
import Image3 from "../assets/images/image-3-banner.jpeg";

import React, { useEffect } from "react";
import { gsap } from "gsap";

const Banner2 = () => {
  var timeline = gsap.timeline();
  const ImageDuration = 1;

  useEffect(() => {
      gsap
      .timeline()
      .fromTo(
        "#reveal-image-left",
        {
          y: 100,
          opacity: 0,
        },
        { delay: 1, y: 0, opacity: 1, duration: ImageDuration }
      )
      .fromTo(
        "#reveal-image-right",
        {
          y: 100,
          opacity: 0,
        },
        { y: 0, opacity: 1, delay: -0.5, duration: ImageDuration }
      )
      .fromTo(
        "#reveal-middle-image",
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, delay: -0.5, duration: ImageDuration }
      )
      .fromTo(
        "#reveal-banner-text",
        { opacity: 0 },
        { duration: 3, opacity: 1 }
      );
  });

  return (
    <div id="banner" className="banner">
      <div className="container">
        <div className="row">
          <div id="reveal-banner-text" className="main-text">
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
              className="main-image"
              src={Image2}
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
        <div id="scrolldown-text" className="scroll">
          <span>Scroll down</span>
        </div>
      </div>
      <div id="misc" className="fixed-misc">
        Arnhem, The Netherlands - 51°58'48"N, 5°54'40"E
      </div>
    </div>
  );
};

export default Banner2;
