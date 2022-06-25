import { gsap } from "gsap";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const PageNotFound = () => {
  useEffect(() => {
    gsap
      .timeline()
      .to(".page-not-found", { autoAlpha: 1, duration: 0 })
      .fromTo(
        ".page-not-found-header",
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0 }
      )
      .fromTo(
        "#page-not-found-divider",
        { opacity: 0 },
        { opacity: 1, duration: 1 }
      )
      .fromTo(
        ".text-line-inner",
        { y: 200, skewY: 5 },
        { y: 0, skewY: 0, duration: 1, stagger: 0.3, delay: -1.3 }
      );
  });

  return (
    <div className="page-not-found">
      <div className="page-not-found-container">
        <h2 className="page-not-found-header">404</h2>
        <h1 className="error-text">
          <div className="error-handler-text-line">
            <div className="text-line-inner">
              <span className="sub-header">Oops, page not found :(</span>
            </div>
          </div>
          <div className="error-handler-text-line">
            <div className="text-line-inner">
                <span className="sub-text">The page you are looking for can not be found.</span>
                <br />
                <span className="sub-text"> Return back to the <Link to="/">home page.</Link></span>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
};

export default PageNotFound;
