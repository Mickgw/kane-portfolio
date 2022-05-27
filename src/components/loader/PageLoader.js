import React, { useRef, useEffect } from "react";
import { gsap, Power3, Power1 } from "gsap";

function Transition() {
  const loader_whole = useRef(null);
  const loader_text = useRef(null);

  //Animation vars
  const background_animation_duration = 0.6;
  const minus_delay = -0.3; //Being used to make animation flow into each other

  const pathname = window.location.pathname;

  useEffect(() => {
    gsap
      .timeline()
      .fromTo(
        loader_whole.current,
        { y: "100vh" },
        {
          y: 0,
          duration: background_animation_duration,
          ease: Power3.easeInOut,
        }
      )
      .fromTo(
        "#text",
        { opacity: 0, y: 25 },
        { opacity: 1, y: 0, delay: minus_delay, ease: Power1.easeInOut }
      )
      .to("#text", { opacity: 0, delay: 0.3, y: -25, ease: Power1.easeInOut })
      .fromTo(
        loader_whole.current,
        { y: 0 },
        {
          y: "-100vh",
          delay: minus_delay,
          duration: background_animation_duration,
          ease: Power3.easeInOut,
        }
      );
  });

  return (
    <div className="pageloader" ref={loader_whole}>
      <div className="pageloader-inner">
        <h2 id="text" className="pageloader-text" ref={loader_text}>
          {pathname.replace(/\//g, "")}
        </h2>
      </div>
    </div>
  );
}

export default Transition;
