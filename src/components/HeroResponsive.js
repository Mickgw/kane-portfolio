import { Parallax } from "react-parallax";
import { IoIosArrowDown } from "react-icons/io";
import HeroContent from "../content/hero.json";

const HeroResponsive = () => {
    return (
        <section className="hero-responsive">
            <Parallax
                bgImage={HeroContent?.hero_image_mobile}
                bgImageAlt="hero-image"
                strength={200}
                width="100%"
                height="100%"
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
        </section>
    );
};

export default HeroResponsive;
