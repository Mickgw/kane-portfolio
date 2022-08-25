
//Banner images
import banner_image_1 from "../assets/images/images-for-banner/website_banner_1.jpg";
import banner_image_2 from "../assets/images/images-for-banner/website_banner_2.jpg";
import banner_image_3 from "../assets/images/images-for-banner/website_banner_3.jpg";
import banner_image_4 from "../assets/images/images-for-banner/website_banner_4.jpg";
import banner_image_5 from "../assets/images/images-for-banner/website_banner_5.jpg";
import banner_image_6 from "../assets/images/images-for-banner/website_banner_6.jpg";

import { gsap, Power3 } from "gsap";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

const BannerV2 = () => {
  var images = [banner_image_1, banner_image_2, banner_image_3, banner_image_4, banner_image_5, banner_image_6];
  const banner_image = images[Math.floor(Math.random() * images.length)];

  useEffect(() => {
    gsap
      .timeline()
      .to("#banner", { autoAlpha: 1, duration: 0 })
      .fromTo(
        "#banner-reveal",
        { height: "100%" },
        { height: "0%", duration: 1.5, delay: 0.4, ease: Power3.easeOut }
      )
      .fromTo(
        "#banner-image",
        { scale: 1.3 },
        { scale: 1, duration: 1.5 },
        "-=1.5"
      )
      .fromTo(
        "#my-name",
        { y: 100 },
        { y: 0, duration: 1, ease: Power3.easeOut },
        "-=.3"
      )
      .fromTo(
        "#my-profession",
        { y: 100 },
        { y: 0, duration: 1, ease: Power3.easeOut },
        "-=.9"
      )
      .fromTo(
        "#scrolldown",
        { y: 100 },
        { y: 0, duration: 1, ease: Power3.easeOut },
        "-=.9"
      );
  });

  useEffect(() => {
    gsap
      .timeline({ repeat: -1, repeatDelay: 2.5 })
      .to("#scrolldown-container", { y: -5 })
      .to("#scrolldown-container", { y: 0 });
  });

  return (
    <div className="re-designed-banner" id="banner">
      <div className="banner-container">
        <div className="banner-grid">
          <div className="hero-text">
            <div className="hero-text-inner">
              <div className="my-name-line">
                <h1 className="my-name-text" id="my-name">
                  Kane Jansen
                </h1>
              </div>
              <div className="profession-line">
                <h3 className="profession-text" id="my-profession">
                  Photographer and Cinematographer
                </h3>
              </div>
              <div className="scrolldown-line" id="scrolldown-container">
                <span className="scrolldown-text" id="scrolldown">
                  scroll down{" "}
                </span>
                {/* <FontAwesomeIcon
                  icon={faArrowDownLong}
                  className="arrow-down-icon"
                  id="scrolldown"
                /> */}
                <IoIosArrowDown
                  className="arrow-down-icon"
                  id="scrolldown"
                />
              </div>
            </div>
          </div>
          <div className="big-banner-image" id="banner-image-container">
            <div className="banner-reveal" id="banner-reveal" />
            <motion.img
              src={banner_image}
              alt="big-banner-car"
              id="banner-image"
              className="test"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerV2;
