import { motion } from "framer-motion";

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
            <a href="/">Work</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </nav>
      </div>
    </motion.div>
  );
};

export default Navbar;
