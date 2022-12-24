import { Parallax } from "react-parallax";
import {
    ParallaxBanner,
    ParallaxBannerLayer,
    ParallaxProvider,
} from "react-scroll-parallax";
import { gsap, Power3 } from "gsap";
import { useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import HeroContent from "../content/hero.json";
import FadeInWhenVisible from "../components/hooks/FadeInWhenVisible";

const HeroResponsive = () => {
    useEffect(() => {
        gsap.timeline().to("#hero", { autoAlpha: 1, duration: 0 }).fromTo(
            ".react-parallax-bgimage",
            { scale: 1.2 },
            {
                scale: 1,
                delay: .1,
                duration: 1.5,
                ease: Power3.easeOut,
            }
        );
    });

    return (
        <section className="hero-responsive" id="hero">
            <Parallax
                bgImage={HeroContent?.hero_image_mobile}
                bgImageAlt="hero-image"
                strength={200}
                style={{width: "100%", height: "100%"}}
            >
            <div className="hero-container">
                <h1 className="hero-title">Kane Jansen</h1>
                <div className="professions">
                    <span className="profession-text">Photographer</span>
                    <span className="profession-text">Cinematographer</span>
                </div>
                <div className="scroll-down">
                    <div className="scroll-down-text">scroll down</div>
                    <IoIosArrowDown className="arrow-down-icon" />
                </div>
            </div>
            </Parallax>
            {/* <div className="parallax-container">
                <div className="test">
                    <Parallax
                        bgImage={HeroContent?.hero_image_mobile}
                        bgImageAlt="hero-image"
                        strength={200}
                        style={{ height: "inherit", width: "100%" }}
                    />
                </div>
            </div>
            <div className="hero-content">
                <h1 className="hero-title">Kane Jansen</h1>
                <div className="professions">
                    <span className="profession-text">Photographer</span>
                    <span className="profession-text">Cinematographer</span>
                </div>
                <div className="scroll-down">
                    <div className="scroll-down-text">scroll down</div>
                    <IoIosArrowDown className="arrow-down-icon" />
                </div>
            </div> */}
            {/* <ParallaxProvider>
                <ParallaxBanner style={{ width: "100%", height: "100%" }}>
                    <ParallaxBannerLayer
                        image={HeroContent?.hero_image_mobile}
                        speed={-20}
                        id="hero-image"
                    />
                    <FadeInWhenVisible>
                        <div className="hero-content" id="#test">
                            <div className="hero-content-container">
                                <h1 className="hero-title">Kane Jansen</h1>
                                <div className="professions">
                                    <span className="profession-text">
                                        Photographer
                                    </span>
                                    <span className="profession-text">
                                        Cinematographer
                                    </span>
                                </div>
                                <div className="scroll-down">
                                    <div className="scroll-down-text">
                                        scroll down
                                    </div>
                                    <IoIosArrowDown className="arrow-down-icon" />
                                </div>
                            </div>
                        </div>
                    </FadeInWhenVisible>
                </ParallaxBanner>
            </ParallaxProvider> */}
        </section>
    );
};

export default HeroResponsive;
