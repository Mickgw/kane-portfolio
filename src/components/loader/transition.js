import React, { useRef, useEffect } from "react";
import { Power2 } from "gsap";

function Transition({ timeline }) {
  const ref = useRef(null);
  const pathname = window.location.pathname;

  useEffect(() => {
    timeline.from(ref.current, {
      duration: 0.6,
      y: "100vh",
      ease: Power2.easeOut,
    });
    timeline.to(ref.current, {
      duration: 0.6,
      delay: 0.6,
      y: "-100vh",
      ease: Power2.easeOut,
    });
  });

  //https://greensock.com/forums/topic/24383-why-is-my-timeline-working-twice/
  //   useEffect(() => {
  //     timeline.to(ref.current, {
  //       duration: 0.6,
  //       delay: 0.6,
  //       y: "-100vh",
  //       ease: Power2.easeOut,
  //     });
  //   });

  return (
    // <div>
    //   <div className="transition-effect" ref={ref}>TEST</div>
    // </div>

    <div className="transition-effect" ref={ref}>
      <div className="transition-inner">
        <h2 className="transition-text">{pathname.replace(/\//g, "")}</h2>
      </div>
    </div>
  );
}

export default Transition;
