import React, { useRef, useEffect } from "react";
import { gsap, Power2 } from "gsap";

import Banner from "../components/Banner";
import HomeAbout from "../components/about/HomeAbout";

const Home = () => {
  let container = useRef(null);
  let tl = new gsap.timeline();

  useEffect(() => {
    tl.to(container, 0, { css: { visibility: "visible" } });
    tl.from("#id", 1.4, {
      scale: 1.6,
      ease: Power2.easeInOut,
      delay: -1.4,
    });
  });

  return (
    <>
      <Banner />
      <HomeAbout />
    </>
  );
};

export default Home;
