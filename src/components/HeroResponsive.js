import { Parallax } from "react-parallax";
import Banner from "../assets/images/images-for-banner/website_banner_phone.jpg";
import { IoIosArrowDown } from "react-icons/io";

const HeroResponsive = () => {
  return (
    <div className="hero-responsive">
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
            <span className="scroll-down-text">
              scroll down{" "}
              <IoIosArrowDown className="arrow-down-icon"  />
            </span>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default HeroResponsive;
