
import { TbArrowUpRight } from "react-icons/tb";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="top-footer-row">

          {/* <div className="footer-socials">
            <ul className="footer-socials-list">
              <li className="footer-social-link">
                <a href="/">Instagram</a>
              </li>
              <li className="footer-social-link">
                <a href="/">Youtube</a>
              </li>
              <li className="footer-social-link">
                <a href="/">Unsplash</a>
              </li>
              <li className="footer-social-link">
                <a href="/">Instagram</a>
              </li>
            </ul>
          </div> */}
          <div className="footer-email">
          <div className="email-header">
            <div className="text-above-link">Want me capturing your story?</div>
            <h2 className="email-header-link">
              <a href="/">
                hello@kanejansen.com{" "}
                <TbArrowUpRight className="email-link-icon" />
              </a>
            </h2>
          </div>
          </div>
        </div>

        <div className="bottom-footer-row">
          <div className="footer-bottom-container">
            <div className="footer-copyright">© Kane Jansen - Mick Waanders</div>
            <div className="made-by">
              Made by{" "}
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
