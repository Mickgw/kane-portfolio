import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { EyeIcon } from "@heroicons/react/24/outline";

//Components
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
    const timer_duration = 1400;

    useEffect(() => {
        tag === "all"
            ? setFilteredImages(portfolioImages.image_list)
            : setFilteredImages(
                  portfolioImages.image_list.filter(
                      (image_data) => image_data.tag === tag
                  )
              );
    }, [tag]);

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
                    <PageLoader loaderText="Portfolio" />
                </motion.div>
            ) : (
                <section className="image-gallery" id="test">
                    <div className="container">
                        <FadeInWhenVisible>
                            <div className="image-category-tags">
                                <ul className="button-list">
                                    <TagButton
                                        name="all"
                                        tagActive={tag === "all" ? true : false}
                                        handleSetTag={setTag}
                                    />
                                    <TagButton
                                        name="cars"
                                        tagActive={
                                            tag === "cars" ? true : false
                                        }
                                        handleSetTag={setTag}
                                    />
                                    <TagButton
                                        name="nature"
                                        tagActive={
                                            tag === "nature" ? true : false
                                        }
                                        handleSetTag={setTag}
                                    />
                                    <TagButton
                                        name="people"
                                        tagActive={
                                            tag === "people" ? true : false
                                        }
                                        handleSetTag={setTag}
                                    />
                                    <TagButton
                                        name="architecture"
                                        tagActive={
                                            tag === "architecture"
                                                ? true
                                                : false
                                        }
                                        handleSetTag={setTag}
                                    />
                                </ul>
                            </div>
                        </FadeInWhenVisible>

                        <div className="gallery">
                            {filteredImages.map((image_data, index) => (
                                <div key={index} className="gallery-image">
                                    <FadeInWhenVisible>
                                        <div className="image-container">
                                            <img
                                                className="image"
                                                src={image_data.image}
                                                alt="portfolio"
                                                onClick={() => {
                                                    setIsModal(true);
                                                    setModalImage(
                                                        image_data.image
                                                    );
                                                    body.classList.add(
                                                        "disable-scroll"
                                                    );
                                                }}
                                            />
                                            <EyeIcon
                                                className="hover-icon"
                                                onClick={() => {
                                                    setIsModal(true);
                                                    setModalImage(
                                                        image_data.image
                                                    );
                                                    body.classList.add(
                                                        "disable-scroll"
                                                    );
                                                }}
                                            />
                                        </div>
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
                </section>
            )}
        </AnimatePresence>
    );
};

const TagButton = ({ name, handleSetTag, tagActive }) => {
    return (
        <li
            className={`tag-button ${tagActive ? "active" : null}`}
            onClick={() => handleSetTag(name)}
        >
            {name}
        </li>
    );
};

export default Portfolio;
