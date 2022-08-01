import React, { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ImageModal from "../components/ImageModal";
import FadeInWhenVisible from "../components/hooks/FadeInWhenVisible";

// Images
import portfolioImages from "../assets/images/images-for-portfolio/portfolio-images.json";

const Portfolio = () => {
  const [tag, setTag] = useState("all");
  const [filteredImages, setFilteredImages] = useState([]);
  const [isModal, setIsModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const body = document.querySelector("body");

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
    <div className="image-gallery" id="test">
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
          {filteredImages.map((image_data, index) => (
            <div key={index} className="gallery-image">
              <FadeInWhenVisible>
                <img
                  className="image"
                  src={image_data.image}
                  alt=""
                  onClick={() => {
                    setIsModal(true);
                    setModalImage(image_data.image);
                    body.classList.add("disable-scroll");
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
