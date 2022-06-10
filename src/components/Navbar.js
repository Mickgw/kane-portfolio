import { motion } from "framer-motion";
import { NavLink, Link } from "react-router-dom";

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
          <Link to="/"><h1>kane</h1></Link>
        </div>
        <nav className="nav">
          <span className="navlink">
            <NavLink to="/portfolio">Portfolio</NavLink>
          </span>
          <span className="navlink">
            <NavLink to="/about">About</NavLink>
          </span>
          <span className="navlink">
            <NavLink to="/motion">Motion</NavLink>
          </span>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
