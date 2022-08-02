import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";


import NavbarMenu from "./NavbarMenu";

const Navbar = () => {

  const location = useLocation();
  const body = document.querySelector("body");
  const [disabled, setDisabled] = useState(false);
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });



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
            {/*Menu button desktop or medium sized screens*/}
            <motion.div
              className="desktop-menu-button-text"
              onClick={() => {
                handleMenu();
              }}
              disabled={disabled}
              // whileHover={{ scale: 1.2, rotate: 360, transition: {
              //   duration: .5,
              // } }}
            >
              {state.menuName}
            </motion.div>

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
      </div>
      <AnimatePresence>
        {state.clicked && (
          <NavbarMenu />

        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
