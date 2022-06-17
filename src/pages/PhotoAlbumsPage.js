import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSolid } from "@fortawesome/free-solid-svg-icons";

import photoAlbums from "../content/photo-albums.json";

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
      transition={{ duration: 0.5, delay: 0.5 }}
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

const PhotoAlbumsPage = () => {
  const { title } = useParams();
  const controls = useAnimation();
  const [ref, inView] = useInView();

  console.log(inView)

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const imageCountAnimation = {
    hidden: {
      x: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 1, delay: 2, ease: [0.2, 0.2, -0.05, 0.95] },
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
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
                        <motion.div ref={ref} className="image-index" variants={imageCountAnimation} initial="hidden" animate="visible">
                          {index + 1} <em className="image-count-divider">&#8213;</em> {album.images.length}
                        </motion.div>
                        <FadeInWhenVisible>
                          <img
                            className="album-image"
                            src={album_image}
                            alt="images photos"
                          />
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
  );
};

export default PhotoAlbumsPage;
