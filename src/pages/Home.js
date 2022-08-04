import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "../components/loader/PageLoader";

import Banner from "../components/Banner";
import HomeAbout from "../components/about/HomeAbout";
import PhotoAlbums from "../components/albums/PhotoAlbums";

const Home = () => {
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
    const navbar_inner = document.querySelector(".navbar-inner");

    loading
      ? navbar_inner.classList.add("loading")
      : setTimeout(() => navbar_inner.classList.remove("loading"), 1000)
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

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div
          className="pageloader"
          key="loader"
          variants={loader_animation}
          exit="exit"
        >
          <PageLoader loaderText="Home" />
        </motion.div>
      ) : (
        <>
          <Banner />
          <HomeAbout />
          <PhotoAlbums />
        </>
      )}
    </AnimatePresence>
  );
};

export default Home;
