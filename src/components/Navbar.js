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
        delay: 0.6,
      }}
      className="navbar"
    >
      <div className="navbar-inner">
        <div className="logo">
          <Link to="/"><h1>kane</h1></Link>
        </div>
        <nav className="nav">
          <NavLink to="/about">Portfolio</NavLink>
          <NavLink to="/work">About</NavLink>
          <NavLink to="/contact">Video</NavLink>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
