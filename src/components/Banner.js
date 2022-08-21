import bigBannerImage1 from "../assets/images/banner_V2_image1.jpg";
import bigBannerImage2 from "../assets/images/banner_V2_image2.jpg";
import bigBannerImage3 from "../assets/images/banner_V2_image3.jpg";

import { gsap, Power3} from "gsap";
import { useEffect } from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

const BannerV2 = () => {
  var images = [bigBannerImage1, bigBannerImage2, bigBannerImage3];
  const banner_image = images[Math.floor(Math.random() * images.length)];

  useEffect(() => {
    gsap
      .timeline()
      .to("#banner", { autoAlpha: 1, duration: 0 })
      .fromTo("#banner-reveal", { height: "100%"}, { height: "0%", duration: 1.2, delay: .4, ease: Power3.easeOut })
      .fromTo(
        "#banner-image",
        { scale: 1.5 },
        { scale: 1, duration: 1.5 },
        "-=1.5"
      )
      .fromTo("#my-name", {y: 100 }, {y: 0, duration: 1, ease: Power3.easeOut}, "-=.3")
      .fromTo("#my-profession", {y: 100 }, {y: 0, duration: 1, ease: Power3.easeOut}, "-=.9")
      .fromTo("#scrolldown", {y: 100 }, {y: 0, duration: 1, ease: Power3.easeOut}, "-=.9")
  });

  return (
    <div className="re-designed-banner" id="banner">
      <div className="banner-container">
        <div className="banner-grid">
          <div className="hero-text">
            <div className="hero-text-inner">
              <div className="my-name-line">
                <h1 className="my-name-text" id="my-name">Kane Jansen</h1>
              </div>
              <div className="profession-line">
                <h3 className="profession-text" id="my-profession">
                  Photographer and Videographer
                </h3>
              </div>
              <div className="scrolldown-line">
                <span className="scrolldown-text" id="scrolldown">scroll </span>
                <FontAwesomeIcon icon={faAngleDown} className="arrow-down-icon" id="scrolldown"/>
              </div>
            </div>
          </div>
          <motion.div className="big-banner-image" id="banner-image-container">
            <div className="banner-reveal" id="banner-reveal" />
            <img src={banner_image} alt="big-banner-car" id="banner-image" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};


export default BannerV2;
