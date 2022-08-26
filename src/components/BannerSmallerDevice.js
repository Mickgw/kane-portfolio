import { Parallax } from "react-parallax";
import Banner from "../assets/images/images-for-banner/website_banner_phone.jpg";

const BannerSmallerDevice = () => {
  return (
    <Parallax bgImage={Banner} bgImageAlt="banner" strength={200} width="100%" height="100%">
      <div className="banner-smaller-device">
        Content goes here. Parallax height grows with content height.
      </div>
    </Parallax>
  );
};

export default BannerSmallerDevice;
