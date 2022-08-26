import { ImArrowRight2 } from "react-icons/im";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="top-footer-row">
          <div className="footer-email">
            <div className="email-header">
              <div className="interested-question">
                Interested in what I can do for you?
              </div>
              <h2 className="email-header-link email">
                <a href="mailto:kanejansen@hotmail.nl">
                  Send me an email
                  <ImArrowRight2 className="email-link-icon" />
                </a>
              </h2>
              <h2 className="email-header-link insta">
                <a
                  href="https://www.instagram.com/kj.026/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Direct message me
                </a>
              </h2>
            </div>
          </div>
          <div className="footer-socials-responsive">
            <ul className="footer-socials-responsive-list">
              <li className="footer-socials-responsive-container">
                <a
                  href="https://www.instagram.com/kj.026/"
                  className="footer-socials-responsive-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
              <li className="footer-socials-responsive-container">
                <a
                  href="https://www.youtube.com/channel/UCS1PHPWlS-4NteB-9XNebWQ/featured"
                  className="footer-socials-responsive-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Youtube
                </a>
              </li>
              <li className="footer-socials-responsive-container">
                <a
                  href="/"
                  className="footer-socials-responsive-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unsplash
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="bottom-footer-row">
          <div className="footer-bottom-container">
            <div className="footer-bottom-left">
              <div className="footer-copyright">
                © {new Date().getFullYear()} Kane Jansen
              </div>
              <div className="made-by">
                Site by{" "}
                <a
                  href="https://www.mickwaanders.dev"
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  © Mick Waanders
                </a>
              </div>
            </div>
            <div className="footer-bottom-right">
              <a href="/" className="footer-bottom-socials-links">
                Instagram<em className="comma">,</em>
              </a>
              <a href="/" className="footer-bottom-socials-links">
                Youtube<em className="comma">,</em>
              </a>
              <a href="/" className="footer-bottom-socials-links">
                Unsplash
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
