import { gsap, Power3 } from "gsap";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import HeroContent from "../content/hero.json";

const Hero = () => {
    const hero_image =
        HeroContent.hero_images_list &&
        HeroContent.hero_images_list[
            Math.floor(Math.random() * HeroContent.hero_images_list.length)
        ].image;

    useEffect(() => {
        gsap.timeline()
            .to("#hero", { autoAlpha: 1, duration: 0 })
            .fromTo(
                "#hero-image-reveal",
                { height: "100%" },
                {
                    height: "0%",
                    duration: 1.5,
                    delay: 0.4,
                    ease: Power3.easeOut,
                }
            )
            .fromTo(
                "#hero-image",
                { scale: 1.3 },
                { scale: 1, duration: 1.5 },
                "-=1.5"
            )
            .fromTo(
                "#my-name",
                { y: 125 },
                { y: 0, duration: 1, ease: Power3.easeOut },
                "-=.3"
            )
            .fromTo(
                "#my-profession",
                { y: 100 },
                { y: 0, duration: 1, ease: Power3.easeOut },
                "-=.9"
            )
            .fromTo(
                "#scrolldown",
                { y: 100 },
                { y: 0, duration: 1, ease: Power3.easeOut },
                "-=.9"
            );
    });

    useEffect(() => {
        gsap.timeline({ repeat: -1, repeatDelay: 2.5 })
            .to("#scrolldown-container", { y: -5 })
            .to("#scrolldown-container", { y: 0 });
    });

    return (
        <section className="hero" id="hero">
            <div className="hero-container">
                <div className="hero-grid">
                    <div className="hero-text">
                        <div className="hero-text-inner">
                            <div className="my-name-line">
                                <h1 className="my-name-text" id="my-name">
                                    {HeroContent?.main_title}
                                </h1>
                            </div>
                            <div className="profession-line">
                                <h3
                                    className="profession-text"
                                    id="my-profession"
                                >
                                    {HeroContent?.sub_title}
                                </h3>
                            </div>
                            <div
                                className="scrolldown-line"
                                id="scrolldown-container"
                            >
                                <span
                                    className="scrolldown-text"
                                    id="scrolldown"
                                >
                                    {HeroContent?.moving_element_text}{" "}
                                </span>
                                <IoIosArrowDown
                                    className="arrow-down-icon"
                                    id="scrolldown"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="hero-image" id="hero-image-container">
                        <div
                            className="hero-image-reveal"
                            id="hero-image-reveal"
                        />
                        <img src={hero_image} alt="hero-car" id="hero-image" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
