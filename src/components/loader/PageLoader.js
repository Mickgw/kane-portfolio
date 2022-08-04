import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

function Transition() {
  //assigning location variable
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

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
  };

  return (
    <div className="pageloader-inner">
      <motion.h2 className="pageloader-text" variants={loader_text_animation} initial="hidden" animate="visible">
        {splitLocation[1].replace(/\//g, "")}
      </motion.h2>
    </div>
  );
}

export default Transition;
