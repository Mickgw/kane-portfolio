import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import gsap from "gsap";

const Navbar = () => {
  const navlinkDelay = 0.2;
  const navlinkDuration = 1;

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
      transition: { ease: [0.3, 0.1, -0.05, 1], duration: 1, delay: 0.5 },
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
    }
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
    }
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
    }
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
    }
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
    }
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
              <div
                className={
                  state.clicked ? "button-lines menu-open" : "button-lines"
                }
              >
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
              <nav className="nav">
                <motion.div
                  className="navlink-container"
                  variants={navlinkAnimationFirst}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                >
                  <span className="navlink">
                    <NavLink to="/" activeClassName="active">
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
                    <NavLink to="/portfolio" activeClassName="active">
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
                    <NavLink to="/about" activeClassName="active">
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
                    <NavLink to="/motion" activeClassName="active">
                      Motion
                    </NavLink>
                  </span>
                </motion.div>
              </nav>

              <motion.div
                className="menu-email"
                id="email"
                variants={navlinkAnimationFifth}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <a href="mailto:kanejansen@hotmail.nl">kanejansen@hotmail.nl</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
