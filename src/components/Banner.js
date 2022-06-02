import Image1 from "../assets/images/image-1-banner.jpeg";
import Image2 from "../assets/images/image-2-banner.jpeg";
import Image3 from "../assets/images/image-3-banner.jpeg";

const Banner2 = () => {
  return (
    <div className="banner">
    <div className="container">

      <div className="row">
      <div className="main-text">kane jansen</div>
        <div className="section left">
          <div className="inner-section">
            <img className="side-image left" src={Image1} alt="left" />
          </div>
          <div className="inner-section" />
        </div>
        <div className="section middle">
          <img className="main-image" src={Image2} alt="middle" />
        </div>
        <div className="section right">
          <div className="inner-section" />
          <div className="inner-section">
            <img className="side-image right" src={Image3} alt="right" />
          </div>
        </div>
      </div>
      <div className="scroll">
        <span>Scroll down</span>
      </div>
    </div>
    <div className="fixed-misc">Arnhem, The Netherlands - 51°58'48"N, 5°54'40"E</div>
  </div>
  )
}

export default Banner2