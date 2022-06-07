import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 3,
      }}
      className="navbar"
    >
      <div className="navbar-inner">
        <div className="logo">
          <h1>kane</h1>
        </div>
        <nav className="nav">
          <span className="navlink">
            <NavLink to="/about">Portfolio</NavLink>
          </span>
          <span className="navlink">
            <NavLink to="/work">About</NavLink>
          </span>
          <span className="navlink">
            <NavLink to="/contact">Video</NavLink>
          </span>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
