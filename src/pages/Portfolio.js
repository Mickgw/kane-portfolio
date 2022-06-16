import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import ImageModal from "../components/ImageModal";

// Images
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

const Portfolio = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [modalImage, setModalImage] = useState("");

  useEffect(() => {
    tag === "all"
      ? setFilteredImages(portfolioImages.image_list)
      : setFilteredImages(
          portfolioImages.image_list.filter(
            (image_data) => image_data.tag === tag
          )
        );
  }, [tag]);

  return (
    <div className="image-gallery">
      <div className="container">
        <div className="image-category-tags">
          <TagButton
            name="all"
            tagActive={tag === "all" ? true : false}
            handleSetTag={setTag}
          />
          <TagButton
            name="car"
            tagActive={tag === "car" ? true : false}
            handleSetTag={setTag}
          />
          <TagButton
            name="nature"
            tagActive={tag === "nature" ? true : false}
            handleSetTag={setTag}
          />
          <TagButton
            name="architecture"
            tagActive={tag === "architecture" ? true : false}
            handleSetTag={setTag}
          />
          <TagButton
            name="people"
            tagActive={tag === "people" ? true : false}
            handleSetTag={setTag}
          />
        </div>
        <div className="gallery">
          {filteredImages.map((image_data) => (
            <div key={image_data.id} className="gallery-image">
              <FadeInWhenVisible>
                <img
                  className="image"
                  src={image_data.image}
                  alt=""
                  onClick={() => {
                    setIsModal(true);
                    setModalImage(image_data.image);
                  }}
                />
              </FadeInWhenVisible>
            </div>
          ))}
        </div>
        <div className="image-modal">
          <AnimatePresence exitBeforeEnter>
            {isModal && (
              <ImageModal
                isModal={isModal}
                setIsModal={setIsModal}
                modalImage={modalImage}
                setModalImage={setModalImage}
              />
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

const TagButton = ({ name, handleSetTag, tagActive }) => {
  return (
    <button
      className={`tag-button ${tagActive ? "active" : null}`}
      onClick={() => handleSetTag(name)}
    >
      {name}
    </button>
  );
};

export default Portfolio;
