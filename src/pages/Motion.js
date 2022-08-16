import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "../components/loader/PageLoader";

import videoProjects from "../assets/videos/motion-videos.json";
import FadeInWhenVisible from "../components/hooks/FadeInWhenVisible";

const Motion = () => {
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
      : setTimeout(() => navbar_inner.classList.remove("loading"), 600)
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
          <PageLoader loaderText="Motion"/>
        </motion.div>
      ) : (
        <div className="motion">
          <div className="container">
            <div className="video-grid">
              {videoProjects.video_projects_list.map((video, index) => {
                return (
                  <FadeInWhenVisible>
                    <div className="video-container" key={index}>
                      <div className="video-title">{video.title}</div>
                      <p className="video-description">{video.description}</p>

                      {/* <ReactPlayer url={video.video_url} controls={true} width="100%" height="100%"/> */}
                      <video controls>
                        <source src={video.video_url} type="video/mp4" />
                      </video>
                    </div>
                  </FadeInWhenVisible>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Motion;
