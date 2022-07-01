import React, { useRef, useEffect } from "react";
// import { gsap, Power3, Power1 } from "gsap";

function Transition({ setLoading }) {
  //Animation vars
  // const background_animation_duration = 0.6;
  // const minus_delay = -0.3; //Being used to make animation flow into each other
  // const skewY_value = 3.5;

  const pathname = window.location.pathname;

  const loaderTimer = 3000; //2700 mili seconds

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, loaderTimer);
    return () => clearTimeout(timer);
  });

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .fromTo(
  //       "#loader",
  //       { y: "100vh", skewY: skewY_value },
  //       {
  //         y: 0,
  //         skewY: 0,
  //         duration: background_animation_duration,
  //         ease: Power3.easeInOut,
  //       }
  //     )
  //     .fromTo(
  //       "#text",
  //       { opacity: 0, y: 25, skewY: skewY_value },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         skewY: 0,
  //         delay: minus_delay,
  //         ease: Power1.easeInOut,
  //       }
  //     )
  //     .to("#text", { opacity: 0, delay: 0.3, y: -25, ease: Power1.easeInOut })
  //     .fromTo(
  //       "#loader",
  //       { y: 0 },
  //       {
  //         y: "-100vh",
  //         delay: minus_delay,
  //         duration: background_animation_duration,
  //         ease: Power3.easeInOut,
  //       }
  //     );
  // });

  return (
    <>
      <div id="loader" className="pageloader">
        <div className="pageloader-inner">
          <h2 id="text" className="pageloader-text">
            {pathname.replace(/\//g, "")}
          </h2>
        </div>
      </div>
    </>
  );
}

export default Transition;
