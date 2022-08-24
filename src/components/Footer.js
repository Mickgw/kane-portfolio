import { TbArrowUpRight } from "react-icons/tb";
import { ImArrowRight2 } from "react-icons/im";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="top-footer-row">
          <div className="footer-socials">
            <ul className="footer-socials-list">
              <li className="footer-social-link">
                <a href="/">Instagram</a>
                <TbArrowUpRight className="footer-social-link-arrow" />
              </li>
              <li className="footer-social-link">
                <a href="/">Youtube</a>
                <TbArrowUpRight className="footer-social-link-arrow" />
              </li>
              <li className="footer-social-link">
                <a href="/">Unsplash</a>
                <TbArrowUpRight className="footer-social-link-arrow" />
              </li>
              <li className="footer-social-link">
                <a href="/">Instagram</a>
                <TbArrowUpRight className="footer-social-link-arrow" />
              </li>
            </ul>
          </div>
          <div className="footer-email">
            <div className="email-header">
              <div className="interested-question">
                Interested what I can do for you?
              </div>
              <h2 className="email-header-link email">
                <a href="mailto:kanejansen@hotmail.nl">
                  Send me an email
                  <ImArrowRight2 className="email-link-icon" />
                </a>
              </h2>
              <h2 className="email-header-link insta">
                <a href="https://www.instagram.com/kj.026/">
                  Direct message me 
                </a>
              </h2>
            </div>
          </div>
        </div>

        <div className="bottom-footer-row">
          <div className="footer-bottom-container">
            <div className="footer-copyright">© Kane Jansen</div>
            <div className="made-by">
              made by{" "}
              <a
                href="https://www.mickwaanders.dev"
                rel="noreferrer noopener"
                target="_blank"
              >
                Mick Waanders
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
