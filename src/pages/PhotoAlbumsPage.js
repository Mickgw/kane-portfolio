import { useParams } from "react-router-dom";
import photoAlbums from "../content/photo-albums.json";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

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
      offset="100px"
      initial="hidden"
      transition={{ duration: 1.5 }}
      variants={{
        hidden: {
          opacity: 0,
          y: "10vh",
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
                        <FadeInWhenVisible>
                          {" "}
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
