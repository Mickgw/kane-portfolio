import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [state, setState] = useState({
    initial: false,
    clicked: null,
    menuName: "Menu",
  });

  const handleMenu = () => {
    if (state.initial === false) {
      console.log(1);
      setState({
        initial: null,
        clicked: true,
        menuName: "close",
      });
    } else if (state.clicked === true) {
      console.log(2);
      setState({
        clicked: !state.clicked,
        menuName: "menu",
      });
    } else if (state.clicked === false) {
      console.log(3);
      setState({
        clicked: !state.clicked,
        menuName: "close",
      });
    }
  };

  return (
    <motion.div
      // initial={{ opacity: 0, y: -180 }}
      // animate={{ opacity: 1, y: 0 }}
      // transition={{
      //   ease: "easeInOut",
      //   duration: 1,
      //   delay: 3,
      // }}
      className="navbar"
    >
      <div className="navbar-inner">
        <div className="logo">
          <Link to="/">
            <h1>kane</h1>
          </Link>
        </div>
        <div className="menu">
          <button
            className="menu-button"
            onClick={() => {
              handleMenu();
            }}
          >
            <span>menu</span>
          </button>
        </div>
      </div>
      {state && <NavbarMenu />}
    </motion.div>
  );
};

export default Navbar;
