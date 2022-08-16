// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { useEffect } from "react";
// import LocomotiveScroll from "locomotive-scroll";
// import "locomotive-scroll/src/locomotive-scroll.scss";

// gsap.registerPlugin(ScrollTrigger);

// export default function useLocoScroll(start) {
//   useEffect(() => {
//     let locoScroll = null;

//     const scrollEl = document.querySelector("#main-container");

//     locoScroll = new LocomotiveScroll({
//       el: scrollEl,
//       smooth: true,
//       multiplier: 1,
//       class: "is-reveal",
//     });

//     locoScroll.on("scroll", () => {
//       ScrollTrigger.update();
//     });



//     ScrollTrigger.addEventListener("refresh", lsUpdate);
//     ScrollTrigger.refresh();
//   }, [start]);
// }