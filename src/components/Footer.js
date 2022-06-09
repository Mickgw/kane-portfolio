import React from "react";
import Moment from "react-moment";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faLinkedinIn,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer>
      <hr className="divider" />
      <div className="footer">
        <div className="container">
          <div className="top-footer-row">
            <div className="section navigation">
              <ul className="footer-nav">
                <li className="footer-nav-link">
                  <NavLink
                    to="/portfolio"
                    className={({ isActive }) =>
                      isActive ? "active" : "not-active"
                    }
                  >
                    Portfolio
                  </NavLink>
                </li>
                <li className="footer-nav-link">
                  <NavLink to="/about">About</NavLink>
                </li>
                <li className="footer-nav-link">
                  <NavLink to="/motion">Motion</NavLink>
                </li>
              </ul>
            </div>
            <div className="section email-socials">
              <div className="email">
                <span className="divider-text">contact and socials</span>
                <h1 className="email-header-one">Your story captured by me</h1>
                <p className="contact-paragraph">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. 
                </p>
                <a href="mailto:kanejansen@hotmail.nl">
                  Let's work together{" "}
                  <FontAwesomeIcon
                    icon={faArrowRightLong}
                    className="email-arrow"
                  />
                </a>
              </div>
              <div className="socials">
                <a href="/" className="social-link">
                  <FontAwesomeIcon icon={faFacebookF} className="icon" />
                </a>
                <a href="/" className="social-link">
                  <FontAwesomeIcon icon={faInstagram} className="icon" />
                </a>
                <a href="/" className="social-link">
                  <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
                </a>
                <a href="/" className="social-link">
                  <FontAwesomeIcon icon={faYoutube} className="icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="bottom-footer-row">
            <div className="section left">
              <div className="copyright">© copyright Kane Jansen</div>
            </div>
            <div className="section right">
              <div className="local-time">
                localtime - <Moment interval={1000} format="LT" />
              </div>
              <div className="website-version">version - 2022</div>
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
    </footer>
  );
};

export default Footer;
