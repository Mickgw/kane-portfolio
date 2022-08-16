import { useParams, useLocation } from "react-router-dom";
import FadeInWhenVisible from "../components/hooks/FadeInWhenVisible";
import photoAlbums from "../content/photo-albums.json";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageLoader from "../components/loader/PageLoader";

const PhotoAlbumsPage = () => {
  const { title } = useParams();
  const [loading, setLoading] = useState(true);
  const timer_duration = 1400;
  const location = useLocation();

 console.log(location.pathname)



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
      : setTimeout(() => navbar_inner.classList.remove("loading"), 600);
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
          <PageLoader loaderText={location.pathname.replace(/\s+/g, '-').replace("%20", '-').substring(1)}/>
        </motion.div>
      ) : (
        <div className="album-page">
          <div className="divider-text category">Album</div>
          <div className="container">
            {photoAlbums.album_list.map((album, index) => {
              if (title === album.title.replace(" ", "-").toLocaleLowerCase()) {
                return (
                  <div className="album-data" key={index}>
                    <div className="album-info-grid">
                      <div className="album-facts">
                        <h1 className="album-title">{album.title}</h1>
                        <div className="divider-text category">year</div>
                        <h4 className="album-year">{album.year}</h4>
                        <div className="divider-text category">camera</div>
                        <h4 className="camera-name">{album.camera}</h4>
                        <div className="divider-text category">camera lens</div>
                        <h4 className="camera-name">{album.camera_lens}</h4>
                      </div>

                      <div className="album-description">
                        {album.album_description_paragraphs.map(
                          (album_paragraph, index) => {
                            return (
                              <div key={index}>
                                <p className="album-description-paragraph">
                                  {album_paragraph.paragraph}
                                </p>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    <div className="album-images">
                      {album.images.map((album_image, index) => {
                        return (
                          <div key={index}>
                            {/* <motion.div ref={ref} className="image-index" variants={imageCountAnimation} initial="hidden" animate="visible">
                          {index + 1}<em className="image-count-divider">&#8213;</em>{album.images.length}
                        </motion.div> */}
                            <FadeInWhenVisible>
                              <div className="image-container">
                                <img
                                  className="album-image"
                                  src={album_image}
                                  alt="images photos"
                                />
                                <div className="image-index">0{index + 1}</div>
                              </div>
                            </FadeInWhenVisible>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default PhotoAlbumsPage;
