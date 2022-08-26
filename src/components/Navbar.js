import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

//Logo imports
import { ReactComponent as Logo } from "../assets/logo/FINALFINALFINAL.svg";
import "../fonts/AllisonScript/Allison_Script.otf";
import "../fonts/ThreeSignature/Three Signature.otf";

import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const location = useLocation();
  const body = document.querySelector("body");
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    initial: false,
    clicked: null,
  });

  //Listening for page changes.
  useEffect(() => {
    const body = document.querySelector("body");
    setState({ clicked: false });
    body.classList.remove("disable-scroll");
  }, [location]);

  const handleMenu = () => {
    disableMenu();
    if (state.initial === false) {
      setState({
        initial: null,
        clicked: true,
      });
    } else if (state.clicked === true) {
      body.classList.remove("disable-scroll");
      setState({
        clicked: !state.clicked,
      });
    } else if (state.clicked === false) {
      body.classList.add("disable-scroll");
      setState({
        clicked: !state.clicked,
      });
    }
  };

  const disableMenu = () => {
    setDisabled(!disabled);
    setTimeout(() => {
      setDisabled(false);
    }, 2000);
  };

  const navbar_animation = {
    hidden: {
      y: -200,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        ease: "easeInOut",
        duration: 1,
        delay: 2,
      },
    },
  };

  return (
    <>
      <motion.div
        className="navbar"
        variants={navbar_animation}
        initial="hidden"
        animate="visible"
      >
        <div className="navbar-inner">
          <div className="logo">
            <Link to="/">
              <Logo className="svg-logo" />
            </Link>
          </div>
          <div className="menu">
            {/*Menu button desktop or medium sized screens*/}
            <div
              className="desktop-menu-button"
              onClick={() => {
                handleMenu();
              }}
              disabled={disabled}
            >
              <div
                className={
                  state.clicked
                    ? "desktop-button-lines desktop-menu-open"
                    : "desktop-button-lines"
                }
              ></div>
            </div>

            {/*Menu button small screen sizes*/}
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
      </motion.div>
      <AnimatePresence>{state.clicked && <NavbarMenu />}</AnimatePresence>
    </>
  );
};

export default Navbar;
