import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";

const Navbar = () => {
  let tl = gsap.timeline();
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
      transition: { ease: [0.3, 0.1, -0.05, 1], duration: 1 },
    },
    exit: {
      y: "-100vh",
      transition: { ease: [0.3, 0.1, -0.05, 1], duration: 1 },
    },
  };

  useEffect(() => {
    tl.fromTo(
      ".navlink-container",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4, stagger: 0.2, delay: 0.3 }
    ).fromTo(
      ".menu-email",
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.4 }
    )
  }, [state]);

  //Listening for page changes.
  useEffect(() => {
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
      tl.progress(1);
      tl.reverse();
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
    }, 1200);
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
              className={
                state.clicked ? "menu-button menu-open" : "menu-button"
              }
              onClick={() => {
                handleMenu();
              }}
              disabled={disabled}
            >
              <div className={state.clicked ? "button-lines menu-open" : "button-lines"}>
                {/* <span
                  class={
                    state.clicked ? "lines line-1 menu-open" : "lines line-1"
                  }
                ></span>
                <span
                  class={
                    state.clicked ? "lines line-2 menu-open" : "lines line-2"
                  }
                ></span>
                <span
                  class={
                    state.clicked ? "lines line-3 menu-open" : "lines line-3"
                  }
                ></span> */}
              </div>
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
              <nav
                className="nav"
              >
                <div className="navlink-container">
                  <span className="navlink">
                    <NavLink to="/" activeClassName="active">
                      Home
                    </NavLink>
                  </span>
                </div>

                <div className="navlink-container">
                  <span className="navlink">
                    <NavLink to="/portfolio" activeClassName="active">
                      Portfolio
                    </NavLink>
                  </span>
                </div>

                <div className="navlink-container">
                  <span className="navlink">
                    <NavLink to="/about" activeClassName="active">
                      About
                    </NavLink>
                  </span>
                </div>

                <div className="navlink-container">
                  <span className="navlink">
                    <NavLink to="/motion" activeClassName="active">
                      Motion
                    </NavLink>
                  </span>
                </div>
              </nav>

              <div className="menu-email" id="email">
                <a href="mailto:kanejansen@hotmail.nl">kanejansen@hotmail.nl</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
