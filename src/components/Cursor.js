import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const defaultCursorWidth = 15;
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  const [cursorVariant, setCursorVariant] = useState("default");

  console.log(mousePosition);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - defaultCursorWidth / 2,
      y: mousePosition.y - defaultCursorWidth / 2,
      transition: {
        type: "spring",
        mass: 0.0001
      }
    },
    hover: {
      height: 100,
      width: 100,
      x: mousePosition.x - 50,
      y: mousePosition.y - 50,
      transition: {
        type: "spring",
        mass: 0.0001
      }
    },
  };

  return (
    <motion.div
      className="cursor"
      variants={variants}
      animate={cursorVariant}
    />
  );
};

export default Cursor;
