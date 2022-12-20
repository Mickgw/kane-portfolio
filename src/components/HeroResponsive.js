import { Parallax } from "react-parallax";
import Banner from "../assets/images/images-for-hero/banner_V2_image2.jpg";
import { IoIosArrowDown } from "react-icons/io";

const HeroResponsive = () => {
    return (
        <section className="hero-responsive">
            <Parallax
                bgImage={Banner}
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
