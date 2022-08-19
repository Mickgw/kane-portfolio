
import { motion } from "framer-motion";

function Transition({ loaderText }) {
  const phoneActive = window.matchMedia("(max-width: 480px)");

  const loader_text_animation = {
    hidden: {
      opacity: 0,
      y: 25,
    },
    visible: {
      opacity: 1,
      y: 0,

      transition: {
        ease: [0.2, 0.3, 0.3, 1],
        duration: 0.5,
        delay: .5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
      }
    }
  };

  return (
    <div className="pageloader-inner">
      <motion.h2 className={phoneActive.matches ? "pageloader-text responsive" : "pageloader-text"} variants={loader_text_animation} initial="hidden" animate="visible" exit="exit">
        {loaderText}
      </motion.h2>
    </div>
  );
}

export default Transition;
