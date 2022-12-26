import { Parallax } from "react-parallax";
import { gsap, Power3 } from "gsap";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import HeroContent from "../content/hero.json";

const HeroResponsive = () => {
    useEffect(() => {
        gsap.timeline()
            .to("#hero", { autoAlpha: 1, duration: 0 })
            .fromTo(
                ".react-parallax-bgimage",
                { scale: 1.2 },
                {
                    scale: 1,
                    delay: 0.1,
                    duration: 1.8,
                    ease: Power3.easeOut,
                }
            )
            .fromTo(
                ".hero-title-responsive",
                { y: 35, opacity: 0, skewY: 2 },
                { y: 0, opacity: 1, skewY: 0, duration: 1.5, ease: Power3.easeOut},
                "-=1"
            )            
            .fromTo(
                ".profession-text-responsive",
                { y: 35, opacity: 0, skewY: 2 },
                { y: 0, opacity: 1, skewY: 0, duration: 1.5, ease: Power3.easeOut, stagger: 0.1 },
                "-=1.3"
            )
            .fromTo(
                ".scroll-down-responsive",
                { y: 35, opacity: 0, skewY: 2 },
                { y: 0, opacity: 1, skewY: 0, duration: 1.5, ease: Power3.easeOut},
                "-=1.3"
            );
    });

    return (
        <section className="hero-responsive" id="hero">
            <Parallax
                bgImage={HeroContent?.hero_image_mobile}
                bgImageAlt="hero-image"
                strength={200}
                blur={3}
                style={{ width: "100%", height: "100%"}}
            >
                <div className="hero-container">
                    <h1 className="hero-title-responsive">Kane Jansen</h1>
                    <div className="professions">
                        <span className="profession-text-responsive">Photographer</span>
                        <span className="profession-text-responsive">Cinematographer</span>
                    </div>
                    <div className="scroll-down-responsive">
                        <div className="scroll-down-text">scroll down</div>
                        <IoIosArrowDown className="arrow-down-icon" />
                    </div>
                </div>
            </Parallax>
            <div className="gradient-overlay-container">
                    <div className="gradient-overlay" />
                </div>
        </section>
    );
};

export default HeroResponsive;
