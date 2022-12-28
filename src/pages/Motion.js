import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

//Components
import PageLoader from "../components/loader/PageLoader";
import FadeInWhenVisible from "../components/hooks/FadeInWhenVisible";

//Files
import videoProjects from "../content/motion-items.json";

const Motion = () => {
    const [loading, setLoading] = useState(true);
    const timer_duration = 1400;

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
                    <PageLoader loaderText="Motion" />
                </motion.div>
            ) : (
                <section className="motion">
                    <div className="container">
                        {videoProjects.video_projects_list.map(
                            (video, index) => {
                                return (
                                    <div
                                        className="video-container"
                                        key={index}
                                    >
                                        <FadeInWhenVisible>
                                            <div
                                                className={`${
                                                    video?.description
                                                        ? "video-info"
                                                        : "video-info no-description"
                                                }`}
                                            >
                                                <div
                                                    className={`${
                                                        video?.description
                                                            ? "video-title-column"
                                                            : "video-title-column no-description"
                                                    }`}
                                                >
                                                    <div className="divider-text motion-page">
                                                        Name
                                                    </div>
                                                    <div className="video-title">
                                                        {video.title}
                                                    </div>
                                                </div>
                                                {video.description && (
                                                    <div className="video-description-column">
                                                        <div className="divider-text motion-page">
                                                            Description
                                                        </div>
                                                        <p className="video-description">
                                                            {video.description}
                                                        </p>
                                                    </div>
                                                )}
                                            </div>
                                        </FadeInWhenVisible>
                                        <FadeInWhenVisible>
                                            <video controls>
                                                <source
                                                    src={
                                                        video.video_url +
                                                        "#t=0.001"
                                                    }
                                                    type="video/mp4"
                                                />
                                            </video>
                                        </FadeInWhenVisible>
                                    </div>
                                );
                            }
                        )}
                    </div>
                </section>
            )}
        </AnimatePresence>
    );
};

export default Motion;
