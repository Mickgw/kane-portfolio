import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { VscClose } from "react-icons/vsc";
import { ANIMATION_DURATION } from "../lib/constants";

const ImageModal = ({ isModal, setIsModal, modalImage, setModalImage }) => {
    const modalRef = useRef();
    const body = document.querySelector("body");

    useEffect(() => {
        const getClickOutside = (e) => {
            if (isModal && e.target === modalRef.current) {
                setIsModal(false);
                setModalImage("");
            }
        };
        window.addEventListener("click", getClickOutside);

        return () => {
            window.removeEventListener("click", getClickOutside);
            document.querySelector("body").classList.remove("disable-scroll");
        };
    }, [isModal, setIsModal, setModalImage]);

    const image_animation = {
        hidden: {
            blur: 100,
            opacity: 0,
            y: 100,
        },
        visible: {
            blur: 0,
            opacity: 1,
            y: 0,
            transition: {
                duration: ANIMATION_DURATION
            },
        },
        exit: {
            y: 100,
            opacity: 0,
            transition: {
                duration: ANIMATION_DURATION,
            },
        },
    };

    const modalBG_animation = {
        hidden: {
            opacity: 0,
        },
        visible: {
            opacity: 1,
            transition: {
                duration: ANIMATION_DURATION,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                duration: ANIMATION_DURATION,
            },
        },
    };

    return (
        <motion.div
            variants={modalBG_animation}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="modal-container"
            ref={modalRef}
        >
            <motion.button
                className="close-btn"
                onClick={() => {
                    setIsModal(false);
                    setModalImage("");
                    body.classList.remove("disable-scroll");
                }}
                whileTap={{ scale: 1.1 }}
            >
                <VscClose style={{ width: "35px", height: "35px"}}/>
            </motion.button>

            <motion.img
                className="modal-image"
                src={modalImage}
                alt="modal image"
                variants={image_animation}
                initial="hidden"
                animate="visible"
                exit="exit"
            />
        </motion.div>
    );
};

export default ImageModal;
