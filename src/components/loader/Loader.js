import { useEffect } from "react";
import { motion } from "framer-motion";

export const Loader = ({ setLoading, text }) => {
  const loaderTimer = 1000; //2700 mili seconds

  const loader_animation = {
    hidden: {
      y: "100vh",
    },

    visible: {
      y: 0,

      transition: {
        ease: [0.2, 0.3, 0.3, 1],
        // ease: "easeIn",
        duration: 0.6,
      },
    },

    exit: {
      y: "-100vh",

      transition: {
        ease: [0.2, 0.3, 0.3, 1],
        duration: 0.6,
      },
    },
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, loaderTimer);
    return () => clearTimeout(timer);
  });

  return (
    
    <motion.div
      className="loader"
      variants={loader_animation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="loader-inner">
        <h2 className="loader-text">{text}</h2>
      </div>
    </motion.div>
  );
};

export default Loader;
