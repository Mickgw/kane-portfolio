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
      y: -45,
      opacity: 1,
      transition: {
        duration: 1,
        transition: { ease: [0.2, 0.2, -0.05, 0.95] },
      },
    },
  };

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
