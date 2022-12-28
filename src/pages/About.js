import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import AboutContent from "../content/about-page.json";

//Components
import PageLoader from "../components/loader/PageLoader";
import FadeInWhenVisible from "../components/hooks/FadeInWhenVisible";
import Accordion from "../components/Accordion";
import {
    ParallaxBanner,
    ParallaxBannerLayer,
    ParallaxProvider,
} from "react-scroll-parallax";

const About = () => {
    const [loading, setLoading] = useState(true);
    const timer_duration = 1400;
    const delayChildrenDuration = 0.1;

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

    useEffect(() => {
        gsap.config({
            nullTargetWarn: false,
            trialWarn: false,
        });

        gsap.timeline()
            .to("#about-page", { autoAlpha: 1, duration: 0 })
            .fromTo(
                "#about-header-text",
                { y: 300, skewY: 15 },
                {
                    skewY: 0,
                    y: 0,
                    duration: 1,
                    stagger: delayChildrenDuration,
                    delay: 0,
                }
            )
            .fromTo(
                "#big-portrait",
                { opacity: 0, y: 200 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                },
                "-=.6"
            )
            .fromTo(
                "#about-image",
                { scale: 1.2 },
                {
                    scale: 1,
                    duration: 1,
                },
                "-=.7"
            )
            .fromTo(
                "#about-paragraph",
                { opacity: 0, y: 100 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1,
                    stagger: delayChildrenDuration,
                },
                "-=1"
            );
    });

    return (
        <AnimatePresence>
            {loading ? (
                <motion.div
                    className="pageloader"
                    key="loader"
                    variants={loader_animation}
                    exit="exit"
                >
                    <PageLoader loaderText="About" />
                </motion.div>
            ) : (
                <section className="about" id="about-page">
                    <div className="container">
                        <h1>
                            {AboutContent?.intro_text_line.map(
                                (item, index) => {
                                    return (
                                        <div
                                            className="about-header-line"
                                            key={index}
                                        >
                                            <div
                                                className="header-text"
                                                id="about-header-text"
                                            >
                                                {item?.text_line}
                                            </div>
                                        </div>
                                    );
                                }
                            )}
                        </h1>

                        <ParallaxProvider>
                            <div className="big-portrait" id="big-portrait">
                                <ParallaxBanner
                                    className="about-banner"
                                    id="about-image"
                                >
                                    <ParallaxBannerLayer
                                        image={AboutContent?.image_under_lines}
                                        speed={15}
                                    />
                                </ParallaxBanner>
                            </div>
                            <FadeInWhenVisible>
                                <div className="image-info">
                                    {
                                        AboutContent?.image_under_lines_description
                                    }
                                </div>
                            </FadeInWhenVisible>
                        </ParallaxProvider>

                        <div className="about-details-data">
                            {AboutContent?.about_paragraph.length > 0 && (
                                <div className="about-details-data-grid">
                                    <FadeInWhenVisible>
                                        <div className="section-header-about">
                                            {
                                                AboutContent?.about_paragraph_section_title
                                            }
                                        </div>
                                    </FadeInWhenVisible>

                                    <div className="paragraphs-container">
                                        {AboutContent?.about_paragraph.map(
                                            (item, index) => {
                                                return (
                                                    <FadeInWhenVisible
                                                        key={index}
                                                    >
                                                        <p className="about-details-paragraphs">
                                                            {item?.paragraph}
                                                        </p>
                                                    </FadeInWhenVisible>
                                                );
                                            }
                                        )}
                                    </div>
                                </div>
                            )}

                            <FadeInWhenVisible>
                                <div
                                    className={`my-equipment-grid ${
                                        AboutContent?.equipment.length > 0
                                            ? ""
                                            : "no-equipment"
                                    }`}
                                >
                                    <div className="image">
                                        <ParallaxProvider>
                                            <div className="big-portrait-two">
                                                <ParallaxBanner className="portrait-two">
                                                    <ParallaxBannerLayer
                                                        image={AboutContent}
                                                        speed={8}
                                                    />
                                                </ParallaxBanner>
                                            </div>
                                        </ParallaxProvider>
                                        <FadeInWhenVisible>
                                            <div className="image-info">
                                                2022 - Nürburgring, Germany
                                            </div>
                                        </FadeInWhenVisible>
                                    </div>
                                    {AboutContent?.equipment.length ===
                                    0 ? null : (
                                        <div className="my-equipment">
                                            <div className="section-header">
                                                {
                                                    AboutContent?.my_equipment_title
                                                }
                                            </div>
                                            <ul className="equipment">
                                                {AboutContent?.equipment.map(
                                                    (item, key) => {
                                                        return (
                                                            <li
                                                                key={key}
                                                                className="equipment-item"
                                                            >
                                                                <div
                                                                    className="divider-text"
                                                                    id="equipment-category"
                                                                >
                                                                    {
                                                                        item?.equipment_category
                                                                    }
                                                                </div>
                                                                <div className="equipment-item-description">
                                                                    {
                                                                        item?.equipment_item
                                                                    }
                                                                </div>
                                                            </li>
                                                        );
                                                    }
                                                )}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </FadeInWhenVisible>

                            {AboutContent?.services.length > 0 && (
                                <div className="services-section">
                                    <FadeInWhenVisible>
                                        <div className="section-header">
                                            {AboutContent?.service_title}
                                        </div>
                                    </FadeInWhenVisible>

                                    <FadeInWhenVisible>
                                        <div className="services-section-grid">
                                            <div className="services-container">
                                                {AboutContent?.services.map(
                                                    (item, index) => {
                                                        return (
                                                            <Accordion
                                                                key={index}
                                                                title={
                                                                    item?.service_name
                                                                }
                                                            >
                                                                {
                                                                    item?.service_description
                                                                }
                                                            </Accordion>
                                                        );
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </FadeInWhenVisible>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}
        </AnimatePresence>
    );
};

export default About;
