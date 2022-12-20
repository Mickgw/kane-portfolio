import { Link } from "react-router-dom";
import FadeInWhenVisible from "../hooks/FadeInWhenVisible";
import { VscArrowRight } from "react-icons/vsc";
import { Parallax } from "react-parallax";

// Images
import Portrait from "../../assets/images/images-for-about/portrait_2.jpg";

const HomeAboutResponsive = () => {
    return (
        <section className="home-about-responsive">
            <div className="home-about-responsive-container">
                <div className="home-about-responsive-inner">
                    <div className="header-above-portrait">
                        <h1>
                            <FadeInWhenVisible>
                                <div className="home-about-responsive-content-line">
                                    <div className="home-about-responsive-content-line-inner">
                                        Music
                                    </div>
                                </div>
                            </FadeInWhenVisible>

                            <FadeInWhenVisible>
                                <div className="home-about-responsive-content-line">
                                    <div className="home-about-responsive-content-line-inner">
                                        Fitness
                                    </div>
                                </div>
                            </FadeInWhenVisible>

                            <FadeInWhenVisible>
                                <div className="home-about-responsive-content-line">
                                    <div className="home-about-responsive-content-line-inner">
                                        Gaming
                                    </div>
                                </div>
                            </FadeInWhenVisible>
                        </h1>
                    </div>
                    <div className="home-about-responsive-portrait">
                        <FadeInWhenVisible>
                            <div className="responsive-potrait-container">
                                <Parallax
                                    bgImage={Portrait}
                                    bgImageAlt="portrait"
                                    strength={150}
                                    className="parallax-bg"
                                />
                            </div>
                        </FadeInWhenVisible>
                    </div>
                    <div className="home-about-responsive-content">
                        <div className="home-about-responsive-content-inner">
                            <div className="home-about-responsive-paragraphs">
                                <FadeInWhenVisible>
                                    <p className="home-about-responsive-paragraph">
                                        My hobbies take up quite a bit of free
                                        time.
                                    </p>
                                </FadeInWhenVisible>

                                <FadeInWhenVisible>
                                    <p className="home-about-responsive-paragraph">
                                        Besides my hobbies, I am also busy with
                                        expanding my portfolio. Every
                                        opportunity I get I will try to make the
                                        most awesome photo's I can. Lorem ipsum
                                        dolor sit amet, consectetur adipiscing
                                        elit, sed do eiusmod tempor incididunt
                                        ut labore et dolore magna aliqua do
                                        eiusmod tempor incididunt.
                                    </p>
                                </FadeInWhenVisible>
                            </div>

                            <ul className="button-list">
                                <FadeInWhenVisible>
                                    <li className="page-link-container">
                                        <Link to="/about" className="page-link">
                                            <div className="link-text">
                                                More About me
                                            </div>
                                            <VscArrowRight className="link-icon" />
                                        </Link>
                                    </li>
                                </FadeInWhenVisible>

                                <FadeInWhenVisible>
                                    <li className="page-link-container">
                                        <Link
                                            to="/portfolio"
                                            className="page-link"
                                        >
                                            <div className="link-text">
                                                View portfolio
                                            </div>
                                            <VscArrowRight className="link-icon" />
                                        </Link>
                                    </li>
                                </FadeInWhenVisible>
                            </ul>
                            {/* <div className="home-about-responsive-buttons">
                <div className="home-about-responsive-button">
                  <Link to="/about" className="page-link">
                    <div className="home-about-responsive-link">
                      More About me
                    </div>
                  </Link>
                </div>
                <div className="home-about-responsive-button" id="button">
                  <Link to="/portfolio" className="page-link">
                    <div className="home-about-responsive-link">
                      View Portfolio
                      <TbArrowUpRight />
                    </div>
                  </Link>
                </div>
              </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAboutResponsive;
