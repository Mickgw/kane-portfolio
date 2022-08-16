import Image1 from "../assets/images/image-1-banner.jpeg";
import Image2 from "../assets/images/portrait-placeholder1.jpeg";
import Image3 from "../assets/images/image-3-banner.jpeg";

import { motion } from "framer-motion";

const Banner = () => {
  const yAxis = "10vh";
  const imagesAnimation = {
    hidden: {
      y: yAxis,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        transition: { ease: [0.2, 0.2, -0.05, 0.95] },
      },
    },
  };

  const textAnimation = {
    hidden: {
      y: yAxis,
      opacity: 0,
    },
    visible: {
      y: -35,
      opacity: 1,
      transition: {
        duration: 1,
        transition: { ease: [0.2, 0.2, -0.05, 0.95] },
      },
    },
  };
  // const imageContainerAnimationDuration = 1.5;
  // const staggerDuration = 0.5;

  // useEffect(() => {
  //   gsap
  //     .timeline()
  //     .to("#banner", { autoAlpha: 1, duration: 0 }) //Prevents white flash
  //     .fromTo(
  //       "#banner-image-container",
  //       { y: 200, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: imageContainerAnimationDuration,
  //         stagger: staggerDuration,
  //         ease: Power3.easeOut,
  //         delay: 0.5,
  //       }
  //     )

  //     .fromTo(
  //       "#banner-image-container-middle",
  //       { y: 200, opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         duration: imageContainerAnimationDuration,
  //         delay: -(imageContainerAnimationDuration - staggerDuration),
  //         ease: Power3.easeOut,
  //       }
  //     )
  //     .fromTo(
  //       "#banner-image-left",
  //       { scale: 2, skewY: 5 },
  //       {
  //         scale: 1,
  //         skewY: 0,
  //         duration: 1.5,
  //         delay: -2.5,
  //       }
  //     )
  //     .fromTo(
  //       "#banner-image-right",
  //       { scale: 2, skewY: -5 },
  //       {
  //         scale: 1,
  //         skewY: 0,
  //         duration: 1.5,
  //         delay: -2.5 + staggerDuration,
  //       }
  //     )
  //     .fromTo(
  //       "#banner-image-middle",
  //       { y: 200, scale: 1.3 },
  //       {
  //         y: 0,
  //         scale: 1,
  //         duration: 1.5,
  //         delay: -2.5 + staggerDuration * 2,
  //       }
  //     )
  //     .fromTo(
  //       "#reveal-banner-text",
  //       { opacity: 0, skewY: 10, scale: 0.96 },
  //       { opacity: 1, skewY: 0, scale: 1, duration: 1, delay: -0.5 }
  //     );
  // });

  return (
    <div id="banner" className="banner">
      <div className="container">
        <div className="row">
          <motion.div
            variants={textAnimation}
            initial="hidden"
            animate="visible"
            id="reveal-banner-text"
            className="banner-text"
          >
            Kane Jansen
          </motion.div>

          <div className="section left">
            <div className="inner-section">
              <motion.div
                id="banner-image-container"
                className="banner-images-container"
                variants={imagesAnimation}
                initial="hidden"
                animate="visible"
              >
                <img
                  id="banner-image-left"
                  className="side-image left"
                  src={Image1}
                  alt="left"
                />
              </motion.div>
            </div>
            <div className="inner-section" />
          </div>
          <div id="middle-image-container" className="section middle">
            <motion.div
              id="banner-image-container-middle"
              className="banner-images-container"
              variants={imagesAnimation}
              initial="hidden"
              animate="visible"
            >
              <img
                id="banner-image-middle"
                className="banner-image"
                src={Image2}
                alt="middle"
              />
            </motion.div>
          </div>
          <div className="section right">
            <div className="inner-section" />
            <div className="inner-section">
              <motion.div
                id="banner-image-container"
                className="banner-images-container"
                variants={imagesAnimation}
                initial="hidden"
                animate="visible"
              >
                <img
                  id="banner-image-right"
                  className="side-image right"
                  src={Image3}
                  alt="right"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
