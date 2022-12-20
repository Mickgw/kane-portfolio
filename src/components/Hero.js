import HeroImages from "../assets/images/images-for-hero/hero-images.json";
import { gsap, Power3 } from "gsap";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Hero = () => {
    const hero_image =
        HeroImages.hero_images_list &&
        HeroImages.hero_images_list[
            Math.floor(Math.random() * HeroImages.hero_images_list.length)
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
                { y: 100 },
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
                                    Kane Jansen
                                </h1>
                            </div>
                            <div className="profession-line">
                                <h3
                                    className="profession-text"
                                    id="my-profession"
                                >
                                    Photographer and Cinematographer
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
                                    scroll down{" "}
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
