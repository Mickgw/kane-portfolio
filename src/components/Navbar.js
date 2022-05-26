import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  return (
    <AnimatePresence initial={false}>
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
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/work">Work</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </nav>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Navbar;
