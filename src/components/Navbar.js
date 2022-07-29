import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
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

const Navbar = () => {
  const navlinkDelay = 0.17;
  const navlinkDuration = 1;

  const location = useLocation();
  const body = document.querySelector("body");
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

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
        duration: 1,
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
        delay: navlinkDelay * 5,
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
        delay: navlinkDelay * 4,
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
        delay: navlinkDelay * 3,
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
        delay: navlinkDelay * 3,
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
        delay: navlinkDelay * 2,
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

  //Listening for page changes.
  useEffect(() => {
    const body = document.querySelector("body");
    setState({ clicked: false, menuName: "Menu" });
    body.classList.remove("disable-scroll");
  }, [location]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      console.log(1);
      setState({
        initial: null,
        clicked: true,
        menuName: "close",
      });
    } else if (state.clicked === true) {
      console.log(2);
      body.classList.remove("disable-scroll");
      setState({
        clicked: !state.clicked,
        menuName: "menu",
      });
    } else if (state.clicked === false) {
      console.log(3);
      body.classList.add("disable-scroll");
      setState({
        clicked: !state.clicked,
        menuName: "close",
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  return (
    <>
      <div className="navbar">
        <div className="navbar-inner">
          <div className="logo">
            <Link to="/">
              <h1
                className={
                  state.clicked
                    ? "placeholder-logo menu-open"
                    : "placeholder-logo"
                }
              >
                kane
              </h1>
            </Link>
          </div>
          <div className="menu">
            <div
              className="desktop-menu-button-text"
              onClick={() => {
                handleMenu();
              }}
              disabled={disabled}
            >
              {state.menuName}
            </div>

            <div
              className={
                state.clicked ? "menu-button menu-open" : "menu-button"
              }
              onClick={() => {
                handleMenu();
              }}
              disabled={disabled}
            >
              <div
                className={
                  state.clicked ? "button-lines menu-open" : "button-lines"
                }
              ></div>
            </div>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {state.clicked && (
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
                      <NavLink to="/" activeclassname="active">
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
                        id="homepage-link"
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
                      <NavLink to="/about" activeclassname="active">
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
                      <NavLink to="/motion" activeclassname="active">
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
                  {/* <img
                    className="navigation-image portfolio"
                    src={portfolioImage}
                  />
                  <img className="navigation-image about" src={aboutImage} />
                  <img className="navigation-image motion" src={motionImage} /> */}
                  <div className="navigation-image home-image" />
                  <div className="navigation-image portfolio-image" />
                  <div className="navigation-image about-image" />
                  <div className="navigation-image motion-image" />
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
                  <a href="mailto:kanejansen@hotmail.nl">
                    kanejansen@hotmail.nl
                  </a>
                </div>
                <div className="footer-socials">
                  <a href="/" className="social-link">
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="social-icon"
                    />
                  </a>
                  <a href="/" className="social-link">
                    <FontAwesomeIcon
                      icon={faLinkedinIn}
                      className="social-icon"
                    />
                  </a>
                  <a href="/" className="social-link">
                    <FontAwesomeIcon icon={faYoutube} className="social-icon" />
                  </a>
                  <a href="/" className="social-link">
                    <FontAwesomeIcon
                      icon={faUnsplash}
                      className="social-icon"
                    />
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
