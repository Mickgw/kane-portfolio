import { Link } from "react-router-dom";
import { useEffect } from "react";
import { Parallax } from "react-parallax";
import HomeAboutContent from "../../content/home-about-page.json";

// GSAP
import { ScrollTrigger } from "gsap/all";
import { gsap } from "gsap";

gsap.registerPlugin(ScrollTrigger);

const HomeAboutNormal = () => {
    const delayChildrenDuration = 0.1;

    useEffect(() => {
        gsap.timeline({
            scrollTrigger: {
                trigger: "#home-about",
                start: "top +=700px",
                once: true,
            },
        })
            .to("#home-about", { autoAlpha: 1, duration: 0 })
            .fromTo(
                "#potrait-container",
                { opacity: 0, y: 200 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 1.5,
                }
            )
            .fromTo(
                "#image-info",
                { opacity: 0, y: 30 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                },
                "-=.1" //Add a delay because other way didnt work
            )  
            .fromTo(
                "#header-content-line",
                { y: 100 },
                {
                    y: 0,
                    duration: 0.5,
                    stagger: delayChildrenDuration,
                },
                "-=.5"
            )
            .fromTo(
                "#paragraph",
                { opacity: 0, y: 30 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                    stagger: delayChildrenDuration,
                },
                "-=.1"
            )
            .fromTo(
                "#button",
                { opacity: 0, y: 30 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.5,
                },
                "-=.1" //Add a delay because other way didnt work
            )  
    });

    return (
        <section className="home-about-normal" id="home-about">
            <div className="home-about-normal-container">
                <div className="home-about-inner">
                    {HomeAboutContent?.home_about_image && (
                        <div className="home-about-portrait">
                            <div
                                className="potrait-container"
                                id="potrait-container"
                            >
                                <Parallax
                                    bgImage={HomeAboutContent?.home_about_image}
                                    bgImageAlt="portrait"
                                    strength={150}
                                    className="parallax-bg"
                                />
                            </div>
                            {HomeAboutContent?.home_about_image_description && (
                                    <div className="image-info" id="image-info">
                                        {
                                            HomeAboutContent?.home_about_image_description
                                        }
                                    </div>
                            )}
                        </div>
                    )}

                    <div className="home-about-content">
                        <div className="home-about-content-inner">
                            {HomeAboutContent?.header_title_lines && (
                                <h1>
                                    {HomeAboutContent?.header_title_lines.map(
                                        (item, index) => {
                                            return (
                                                <div
                                                    className="home-about-content-line"
                                                    key={index}
                                                >
                                                    <div
                                                        id="header-content-line"
                                                        className="home-about-content-line-inner"
                                                    >
                                                        {item?.title_line}
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </h1>
                            )}

                            <div className="paragraphs">
                                {HomeAboutContent?.paragraphs.map(
                                    (item, index) => {
                                        return (
                                            <p
                                                key={index}
                                                className="hero-content-paragraph"
                                                id="paragraph"
                                            >
                                                {item?.paragraph}
                                            </p>
                                        );
                                    }
                                )}
                            </div>

                            <div className="home-about-buttons">
                                <div className="home-about-button" id="button">
                                    <Link to="/about" className="page-link">
                                        <div className="home-about-link">
                                            More About me
                                        </div>
                                    </Link>
                                </div>
                                <em className="home-about-divider" id="button">
                                    or
                                </em>
                                <div className="home-about-button" id="button">
                                    <Link to="/portfolio" className="page-link">
                                        <div className="home-about-link">
                                            View Portfolio &#x279C;
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAboutNormal;
