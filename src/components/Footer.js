
import Moment from "react-moment";
import { TbArrowUpRight } from "react-icons/tb";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="container">
        <div className="top-footer-row">
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

        <div className="bottom-footer-row">
          <div className="footer-bottom-container">
            <div className="footer-copyright">© kane jansen</div>

            <div className="local-time">
              localtime - <Moment interval={1000} format="LT" />
            </div>
            <div className="made-by">
              made by{" "}
              <a
                href="https://www.mickwaanders.dev"
                rel="noreferrer noopener"
                target="_blank"
              >
                mick waanders
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
