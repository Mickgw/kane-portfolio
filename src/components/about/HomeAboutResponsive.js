import { Link } from "react-router-dom";
// import motion from "framer-motion";

// Images
import Portrait1 from "../../assets/portraits/portrait-2.jpg";
import Portrait2 from "../../assets/portraits/portrait-1.jpg";

const HomeAboutResponsive = () => {
  return (
    <div className="home-about-responsive">
      <div className="container">
        <div className="home-about-inner">
          <div className="home-about-images">
            <div className="home-about-images-container">
              <div className="image-container left responsive">
                <img className="image" src={Portrait2} alt="portrait2" />
              </div>
              <div className="image-container right responsive">
                <img className="image" src={Portrait1} alt="portrait1" />
              </div>
            </div>
          </div>
          <div className="home-about-content">
            <div className="home-about-content-inner">
              <h1>
                <div className="home-about-content-line">
                  <div className="home-about-content-line-inner">
                    I am currently a <span className="bolded">student</span>
                  </div>
                </div>
                <div className="home-about-content-line">
                  <div className="home-about-content-line-inner">
                    at <span className="bolded">Rijn IJssel Arnhem</span>{" "}
                    studying
                  </div>
                </div>
                <div className="home-about-content-line">
                  <div className="home-about-content-line-inner">
                    <span className="bolded">audio visual specialist</span>
                  </div>
                </div>
              </h1>
              <p className="hero-content-paragraph">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem accusantium doloremque laudantium,
                totam rem aperiam.
              </p>
              <div className="home-about-buttons">
                <div className="read-about-button">
                  <Link to="/about">
                    <button className="read-about-link">Read About me</button>
                  </Link>
                </div>
                <div className="read-about-button">
                  <Link to="/portfolio">
                    <button className="read-about-link">View Portfolio</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAboutResponsive;
