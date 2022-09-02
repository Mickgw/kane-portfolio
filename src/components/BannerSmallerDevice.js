import { Parallax } from "react-parallax";
import Banner from "../assets/images/images-for-banner/website_banner_phone.jpg";

const BannerSmallerDevice = () => {
  return (
    <div className="hero-responsive">
      <Parallax
        bgImage={Banner}
        bgImageAlt="bannersgewgwe"
        strength={200}
        width="100%"
        height="100%"
      >
        <div className="banner-smaller-device">
          <h1>Kane Jansen</h1>
        </div>
      </Parallax>
    </div>
  );
};

export default BannerSmallerDevice;
