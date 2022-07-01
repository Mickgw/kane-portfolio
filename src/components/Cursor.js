import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const defaultCursorWidth = 20;
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
        mass: 0.01
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
