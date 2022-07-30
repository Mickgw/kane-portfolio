import { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faUnsplash,
} from "@fortawesome/free-brands-svg-icons";

import homeImage from "../assets/images/image-1-banner.jpeg";
import portfolioImage from "../assets/images/image-3-banner.jpeg";
import aboutImage from "../assets/images/image_3_menu.jpeg";
import motionImage from "../assets/images/image_4_menu.jpeg";

const NavbarMenu = () => {
  const navlinkDelay = 0.17;
  const navlinkDuration = 1;

  const [isHoveringHome, setisHoveringHome] = useState(false);
  const [isHoveringPortfolio, setisHoveringPortfolio] = useState(false);
  const [isHoveringAbout, setisHoveringAbout] = useState(false);
  const [isHoveringMotion, setisHoveringMotion] = useState(false);

  {
    /*======================== Menu animation properties ============================ */
  }

  const menuAnimation = {
    hidden: {
      y: "-100vh",
    },
    visible: {
      y: 0,
      transition: { ease: [0.6, 0.2, 0.25, 1], duration: 1 },
    },
    exit: {
      y: "-100vh",
      transition: { ease: [0.6, 0.2, 0.25, 1], duration: 1 },
    },
  };

  const navMenuImageAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: 0.6,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const navlinkAnimationFirst = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6,
        duration: navlinkDuration,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const navlinkAnimationSecond = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6 + navlinkDelay,
        duration: navlinkDuration,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const navlinkAnimationThird = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: navlinkDuration,
        delay: 0.6 + navlinkDelay * 2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const navlinkAnimationFourth = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6 + navlinkDelay * 3,
        duration: navlinkDuration,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const navlinkAnimationFifth = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6 + navlinkDelay * 4,
        duration: navlinkDuration,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  const navlinkAnimationSixth = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.6 + navlinkDelay * 5,
        duration: navlinkDuration,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  };

  {
    /*======================== Handle hover navlinks ============================ */
  }

  {
    /* Home navlink */
  }
  const handleMouseOverHome = () => {
    setisHoveringHome(true);
  };

  const handleMouseOutHome = () => {
    setisHoveringHome(false);
  };

  {
    /* Portfolio navlink */
  }
  const handleMouseOverPortfolio = () => {
    setisHoveringPortfolio(true);
  };

  const handleMouseOutPortfolio = () => {
    setisHoveringPortfolio(false);
  };

  {
    /* About navlink */
  }
  const handleMouseOverAbout = () => {
    setisHoveringAbout(true);
  };

  const handleMouseOutAbout = () => {
    setisHoveringAbout(false);
  };

  {
    /* Motion navlink */
  }
  const handleMouseOverMotion = () => {
    setisHoveringMotion(true);
  };

  const handleMouseOutMotion = () => {
    setisHoveringMotion(false);
  };

  const navMenuImageAnimationHover = {
    hidden: {
      scale: 1.1,
      y: 500,
    },
    visible: {
      scale: 1,
      y: 0,
      transition: { ease: [0.6, 0.2, 0.25, 1], duration: 1.3 },
    },
  };

  return (
    <motion.div
      className="navbar-menu"
      variants={menuAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="container">
        <div className="navigation">
          <nav className="nav-links">
            <motion.div
              className="navlink-container"
              variants={navlinkAnimationFirst}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <span className="navlink">
                <NavLink
                  to="/"
                  activeclassname="active"
                  onMouseOver={handleMouseOverHome}
                  onMouseOut={handleMouseOutHome}
                >
                  Home
                </NavLink>
              </span>
            </motion.div>

            <motion.div
              className="navlink-container"
              variants={navlinkAnimationSecond}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <span className="navlink">
                <NavLink
                  to="/portfolio"
                  activeclassname="active"
                  onMouseOver={handleMouseOverPortfolio}
                  onMouseOut={handleMouseOutPortfolio}
                >
                  Portfolio
                </NavLink>
              </span>
            </motion.div>

            <motion.div
              className="navlink-container"
              variants={navlinkAnimationThird}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <span className="navlink">
                <NavLink
                  to="/about"
                  activeclassname="active"
                  onMouseOver={handleMouseOverAbout}
                  onMouseOut={handleMouseOutAbout}
                >
                  About
                </NavLink>
              </span>
            </motion.div>

            <motion.div
              className="navlink-container"
              variants={navlinkAnimationFourth}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <span className="navlink">
                <NavLink
                  to="/motion"
                  activeclassname="active"
                  onMouseOver={handleMouseOverMotion}
                  onMouseOut={handleMouseOutMotion}
                >
                  Motion
                </NavLink>
              </span>
            </motion.div>
          </nav>

          <motion.div
            className="menu-image"
            variants={navMenuImageAnimation}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {isHoveringHome && (
              <motion.img
                className="navigation-image"
                src={homeImage}
                variants={navMenuImageAnimationHover}
                initial="hidden"
                animate="visible"
              />
            )}
            {isHoveringPortfolio && (
              <motion.img
                className="navigation-image portfolio"
                src={portfolioImage}
                variants={navMenuImageAnimationHover}
                initial="hidden"
                animate="visible"
              />
            )}
            {isHoveringAbout && (
              <motion.img
                className="navigation-image"
                src={aboutImage}
                variants={navMenuImageAnimationHover}
                initial="hidden"
                animate="visible"
              />
            )}
            {isHoveringMotion && (
              <motion.img
                className="navigation-image"
                src={motionImage}
                variants={navMenuImageAnimationHover}
                initial="hidden"
                animate="visible"
              />
            )}

            {/* <img className="navigation-image about" src={aboutImage} />
            <img className="navigation-image motion" src={motionImage} /> */}
            {/* <div className="navigation-image home-image" />
            <div className="navigation-image portfolio-image" />
            <div className="navigation-image about-image" />
            <div className="navigation-image motion-image" /> */}
          </motion.div>
        </div>

        <motion.hr
          className="menu-footer-divider"
          variants={navlinkAnimationFifth}
          initial="hidden"
          animate="visible"
          exit="exit"
        />

        <motion.div
          className="menu-footer"
          id="email"
          variants={navlinkAnimationSixth}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="footer-email">
            <a href="mailto:kanejansen@hotmail.nl">kanejansen@hotmail.nl</a>
          </div>
          <div className="footer-socials">
            <a href="/" className="social-link">
              <FontAwesomeIcon icon={faInstagram} className="social-icon" />
            </a>
            <a href="/" className="social-link">
              <FontAwesomeIcon icon={faLinkedinIn} className="social-icon" />
            </a>
            <a href="/" className="social-link">
              <FontAwesomeIcon icon={faYoutube} className="social-icon" />
            </a>
            <a href="/" className="social-link">
              <FontAwesomeIcon icon={faUnsplash} className="social-icon" />
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default NavbarMenu;
