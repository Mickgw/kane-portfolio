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
      <div className="logo">
        <h1>Logo</h1>
      </div>
      <div className="navigation">
        <ul className="nav-links">
          <li>
              <a href="/">Home</a>
          </li>
          <li>
              <a href="/">Work</a>
          </li>
          <li>
              <a href="/">About</a>
          </li>
          <li>
              <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;
