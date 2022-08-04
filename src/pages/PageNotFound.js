import { gsap } from "gsap";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "../components/loader/PageLoader";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  const [loading, setLoading] = useState(true);
  const timer_duration = 1400;

  //Set loading to false after time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, timer_duration);
    return () => clearTimeout(timer);
  });

  //Disbles navbar inner when loading is active, this prevent the logo and menu to be seen on the loader
  useEffect(() => {
    const navbar_inner = document.querySelector("div.navbar-inner");

    loading
      ? navbar_inner.classList.add("loading")
      : setTimeout(() => navbar_inner.classList.remove("loading"), 1000);
  }, [loading]);

  const loader_animation = {
    exit: {
      y: "-100vh",
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  useEffect(() => {
    gsap
      .timeline()
      .to(".page-not-found", { autoAlpha: 1, duration: 0 })
      .fromTo(
        ".page-not-found-header",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, delay: .5 }
      )
      .fromTo(
        "#page-not-found-divider",
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      )
      .fromTo(
        ".text-line-inner",
        { y: 200, skewY: 5 },
        { y: 0, skewY: 0, duration: 1, stagger: 0.3, delay: -1.3 }
      );
  });

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="pageloader"
          key="loader"
          variants={loader_animation}
          exit="exit"
        >
          <PageLoader loaderText="Error"/>
        </motion.div>
      ) : (
        <div className="page-not-found">
          <div className="page-not-found-container">
            <h2 className="page-not-found-header">404</h2>
            <h1 className="error-text">
              <div className="error-handler-text-line">
                <div className="text-line-inner">
                  <span className="sub-header">Oops, page not found :(</span>
                </div>
              </div>
              <div className="error-handler-text-line">
                <div className="text-line-inner">
                  <span className="sub-text">
                    The page you are looking for can not be found.
                  </span>
                  <br />
                  <span className="sub-text">
                    Return back to the <Link to="/">home page.</Link>
                  </span>
                </div>
              </div>
            </h1>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PageNotFound;
