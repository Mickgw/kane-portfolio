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
        delay: 0.6,
      }}
      className="navbar"
    >
      <div className="navbar-inner">
        <div className="logo">
          <h1>Your logo</h1>
        </div>
        <nav className="nav">
          <li>
            <NavLink to="/about">Portfolio</NavLink>
            {/* <a href="/about">About</a> */}
          </li>
          <li>
            <NavLink to="/work">About</NavLink>
            {/* <a href="/work">Work</a> */}
          </li>
          <li>
            <NavLink to="/contact">Video</NavLink>
            {/* <a href="/contact">Contact</a> */}
          </li>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
