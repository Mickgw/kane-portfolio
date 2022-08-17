import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const ImageModal = ({ isModal, setIsModal, modalImage, setModalImage }) => {
  const modalRef = useRef();
  const animation_duration = 0.7;
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
      body.classList.remove("disable-scroll");
    };
  }, [isModal, setIsModal, setModalImage]);

  const image_animation = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: animation_duration,
      },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: {
        duration: animation_duration,
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
        duration: animation_duration,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: animation_duration,
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
      <button
        className="close-btn"
        onClick={() => {
          setIsModal(false);
          setModalImage("");
          body.classList.remove("disable-scroll");
        }}
      >
        close
      </button>

      <motion.img
        onClick={console.log("Image clicked!")}
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
