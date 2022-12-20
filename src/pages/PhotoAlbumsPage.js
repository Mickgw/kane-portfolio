import { useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//Files
import photoAlbums from "../content/photo-albums.json";

//Components
import PageLoader from "../components/loader/PageLoader";
import FadeInWhenVisible from "../components/hooks/FadeInWhenVisible";

const PhotoAlbumsPage = () => {
  const { title } = useParams();
  const [loading, setLoading] = useState(true);
  const timer_duration = 1400;
  const location = useLocation();

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

  const infoGridAnimation = {
    hidden: {
      y: "5vh",
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        transition: { ease: [0.2, 0.2, -0.05, 0.95] },
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
          <PageLoader
            loaderText={location.pathname
              .replaceAll(/\s/g, "-")
              .replaceAll(/%20/g, "-")
              .substring(1)}
          />
        </motion.div>
      ) : (
        <motion.section
          className="album-page"
          variants={infoGridAnimation}
          initial="hidden"
          animate="visible"
        >
          <div className="divider-text category">name</div>
          <div className="container">
            {photoAlbums.album_list.map((album, index) => {
              if (title === album.title.replaceAll(" ", "-").toLocaleLowerCase()) {
                return (
                  <div className="album-data" key={index}>
                    <motion.div className="album-info-grid">
                      <div className="album-facts">
                        <h1 className="album-title">{album.title}</h1>

                        {album.year && (
                          <div id="album-year">
                            <div className="divider-text category">year</div>
                            <h4 className="album-year">{album.year}</h4>
                          </div>
                        )}

                        {album.camera && (
                          <div id="album-camera">
                            <div className="divider-text category">camera</div>
                            <h4 className="camera-name">{album.camera}</h4>
                          </div>
                        )}

                        {album.camera_lens && (
                          <div id="album-camera-lens">
                            <div className="divider-text category">
                              camera lens
                            </div>
                            <h4 className="camera-name">{album.camera_lens}</h4>
                          </div>
                        )}
                      </div>

                      {album.album_description_paragraphs && (
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
                      )}
                    </motion.div>
                    <div className="album-images">
                      {album.images.map((album_image, index) => {
                        return (
                          <div key={index}>
                            <FadeInWhenVisible>
                              <div className="image-container">
                                <img
                                  className="album-image"
                                  src={album_image}
                                  alt="images photos"
                                />
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
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default PhotoAlbumsPage;
