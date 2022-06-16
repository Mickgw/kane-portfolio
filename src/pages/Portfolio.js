import { useParams, NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

import portfolioImages from "../assets/images/images-for-portfolio/portfolio-images.json";

function FadeInWhenVisible({ children }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1, delay: 0.5 }}
      variants={{
        hidden: {
          opacity: 0,
          y: "5vh",
          transition: { ease: [0.2, 0.2, -0.05, 0.95] },
        },
        visible: { opacity: 1, y: 0 },
      }}
    >
      {children}
    </motion.div>
  );
}

const Portfolio = () => {
  const { tag } = useParams();
  console.log(tag)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="image-gallery">
      <div className="container">
        <div className="image-category-tags">
          <NavLink to="/portfolio/car">
            <h4 className="image-category-tag">Car</h4>
          </NavLink>
          <NavLink to="/portfolio/nature">
            <h4 className="image-category-tag">Nature</h4>
          </NavLink>
          <NavLink to="/portfolio/architecture">
            <h4 className="image-category-tag">Architecture</h4>
          </NavLink>
          <NavLink to="/portfolio/people">
            <h4 className="image-category-tag">People</h4>
          </NavLink>
        </div>
      </div>
      <div className="gallery">
      </div>
    </div>
  );
};

export default Portfolio;
