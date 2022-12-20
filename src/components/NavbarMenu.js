import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Moment from "react-moment";
import { NavLink, useLocation } from "react-router-dom";
import NavigationMenuImages from "../assets/images/images-for-navmenu/navigation-menu-images.json"

//Menu images on navlink hover
// import homeImage from "../assets/images/images-for-navmenu/navmenu_home.jpg";
// import portfolioImage from "../assets/images/images-for-navmenu/navmenu_portfolio.jpg";
// import aboutImage from "../assets/images/images-for-navmenu/navmenu_about.jpg";
// import motionImage from "../assets/images/image_4_menu.jpeg";
// import otherPage from "../assets/images/other-page-image.jpeg";

const NavbarMenu = () => {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const navlinkDelay = 0.17;
  const navlinkDuration = 1;

  const [isHoveringHome, setisHoveringHome] = useState(false); // const [isHomeLinkActive, setisHomeLinkActive] = useState(false);

  const [isHoveringPortfolio, setisHoveringPortfolio] = useState(false);
  const [isHoveringAbout, setisHoveringAbout] = useState(false);
  const [isHoveringMotion, setisHoveringMotion] = useState(false);

  /*======================== Menu animation properties ============================ */

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

  /*======================== Handle hover navlinks ============================ */

  /* Home navlink */
  const handleMouseOverHome = () => {
    setisHoveringHome(true);
  };

  const handleMouseOutHome = () => {
    setisHoveringHome(false);
  };

  /* Portfolio navlink */
  const handleMouseOverPortfolio = () => {
    setisHoveringPortfolio(true);
  };

  const handleMouseOutPortfolio = () => {
    setisHoveringPortfolio(false);
  };

  /* About navlink */
  const handleMouseOverAbout = () => {
    setisHoveringAbout(true);
  };

  const handleMouseOutAbout = () => {
    setisHoveringAbout(false);
  };

  /* Motion navlink */
  const handleMouseOverMotion = () => {
    setisHoveringMotion(true);
  };

  const handleMouseOutMotion = () => {
    setisHoveringMotion(false);
  };

  const navMenuImageAnimationHover = {
    hidden: {
      scale: 1.3,
      x: 800,
    },
    visible: {
      scale: 1,
      rotate: 0,
      x: 0,
      transition: { ease: [0.6, 0.2, 0.25, 1], duration: 0.7 },
    },
    exit: {
      x: -800,
      transition: { ease: [0.6, 0.2, 0.25, 1], duration: 0.7 },
    },
  };

  return (
    <motion.nav
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
                  //When route is active disable onMouseOver event
                  onMouseOver={
                    splitLocation[1] === "" ? null : handleMouseOverHome
                  }
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
                  //When route is active disable onMouseOver event
                  onMouseOver={
                    splitLocation[1] === "portfolio"
                      ? null
                      : handleMouseOverPortfolio
                  }
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
                  //When route is active disable onMouseOver event
                  onMouseOver={
                    splitLocation[1] === "about" ? null : handleMouseOverAbout
                  }
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
                  //When route is active disable onMouseOver event
                  onMouseOver={
                    splitLocation[1] === "motion" ? null : handleMouseOverMotion
                  }
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
            {(() => {
              switch (splitLocation[1]) {
                case "":
                  return (
                    <img
                      className="navigation-image"
                      src={NavigationMenuImages?.home_page_image}
                      alt="home"
                    />
                  );
                case "portfolio":
                  return (
                    <img
                      className="navigation-image"
                      src={NavigationMenuImages?.portfolio_page_image}
                      alt="portfolio"
                    />
                  );
                case "about":
                  return (
                    <img
                      className="navigation-image"
                      src={NavigationMenuImages?.about_page_image}
                      alt="about"
                    />
                  );
                case "motion":
                  return (
                    <img
                      className="navigation-image"
                      src={NavigationMenuImages?.motion_page_image}
                      alt="motion"
                    />
                  );
                default:
                    return (
                        <img
                          className="navigation-image"
                          src={NavigationMenuImages?.none_navigation_page_image}
                          alt="motion"
                        />
                      );
              }
            })()}
            <AnimatePresence>
              {isHoveringHome && (
                <motion.img
                  className="navigation-image"
                  src={NavigationMenuImages?.home_page_image}
                  variants={navMenuImageAnimationHover}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isHoveringPortfolio && (
                <motion.img
                  className="navigation-image portfolio"
                  src={NavigationMenuImages?.portfolio_page_image}
                  variants={navMenuImageAnimationHover}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isHoveringAbout && (
                <motion.img
                  className="navigation-image"
                  src={NavigationMenuImages?.about_page_image}
                  variants={navMenuImageAnimationHover}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                />
              )}
            </AnimatePresence>

            <AnimatePresence>
              {isHoveringMotion && (
                <motion.img
                  className="navigation-image"
                  src={NavigationMenuImages?.motion_page_image}
                  variants={navMenuImageAnimationHover}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                />
              )}
            </AnimatePresence>
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
          variants={navlinkAnimationSixth}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="footer-email">
            <a href="mailto:kanejansen@hotmail.nl">kanejansen@hotmail.nl</a>
          </div>
          <div className="footer-copyright">©{" "}{new Date().getFullYear()}</div>
        </motion.div>
        <motion.div
          className="menu-footer-responsive"
          variants={navlinkAnimationSixth}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <div className="menu-footer-responsive-container">
            <div className="local-time-footer">
              <Moment interval={1000} format="LT" />
            </div>
            <div className="footer-copyright-responsive">
              ©{" "}{new Date().getFullYear()}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default NavbarMenu;
