import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ImageModal from "../components/ImageModal";
import FadeInWhenVisible from "../components/hooks/FadeInWhenVisible";
import PageLoader from "../components/loader/PageLoader";

// Images
import portfolioImages from "../assets/images/images-for-portfolio/portfolio-images.json";

const Portfolio = () => {
  const [loading, setLoading] = useState(true);
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

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  });

  //Disbles navbar inner when loading is active, this prevent the logo and menu to be seen on the loader
  useEffect(() => {
    loading
      ? document.querySelector("div.navbar-inner").classList.add("loading")
      : document.querySelector("div.navbar-inner").classList.remove("loading");
  }, [loading]);

  const loader_animation = {
    visible: {
      y: 0,
    },

    exit: {
      y: "-100vh",
      transition: {
        ease: [0.6, 0.2, 0.25, 1],
        duration: .7,
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
          animate="visible"
          exit="exit"
        >
          <PageLoader />
        </motion.div>
      ) : (
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
      )}
    </AnimatePresence>
  );

  // if (loading) {
  //   return (
  //     <AnimatePresence>
  //       <motion.div
  //         className="pageloader"
  //         key="loader"
  //         variants={loader_animation}
  //         animate="visible"
  //         exit="exit"
  //       >
  //         <PageLoader />
  //       </motion.div>
  //     </AnimatePresence>
  //   );
  // }

  // // If page is not in loading state, display page.
  // else {
  //   return (
  //     <div className="image-gallery" id="test">
  //       <div className="container">
  //         <div className="image-category-tags">
  //           <TagButton
  //             name="all"
  //             tagActive={tag === "all" ? true : false}
  //             handleSetTag={setTag}
  //           />
  //           <TagButton
  //             name="car"
  //             tagActive={tag === "car" ? true : false}
  //             handleSetTag={setTag}
  //           />
  //           <TagButton
  //             name="nature"
  //             tagActive={tag === "nature" ? true : false}
  //             handleSetTag={setTag}
  //           />
  //           <TagButton
  //             name="architecture"
  //             tagActive={tag === "architecture" ? true : false}
  //             handleSetTag={setTag}
  //           />
  //           <TagButton
  //             name="people"
  //             tagActive={tag === "people" ? true : false}
  //             handleSetTag={setTag}
  //           />
  //         </div>
  //         <div className="gallery">
  //           {filteredImages.map((image_data, index) => (
  //             <div key={index} className="gallery-image">
  //               <FadeInWhenVisible>
  //                 <img
  //                   className="image"
  //                   src={image_data.image}
  //                   alt=""
  //                   onClick={() => {
  //                     setIsModal(true);
  //                     setModalImage(image_data.image);
  //                     body.classList.add("disable-scroll");
  //                   }}
  //                 />
  //               </FadeInWhenVisible>
  //             </div>
  //           ))}
  //         </div>
  //         <div className="image-modal">
  //           <AnimatePresence exitBeforeEnter>
  //             {isModal && (
  //               <ImageModal
  //                 isModal={isModal}
  //                 setIsModal={setIsModal}
  //                 modalImage={modalImage}
  //                 setModalImage={setModalImage}
  //               />
  //             )}
  //           </AnimatePresence>
  //         </div>
  //       </div>
  //     </div>
  //   );
  // }
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
