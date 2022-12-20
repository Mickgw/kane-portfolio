import { Link } from "react-router-dom";
import FadeInWhenVisible from "../hooks/FadeInWhenVisible";
import { VscArrowRight } from "react-icons/vsc";
import { Parallax } from "react-parallax";
import HomeAboutContent from "../../content/home-about-page.json";

const HomeAboutResponsive = () => {
    return (
        <section className="home-about-responsive">
            <div className="home-about-responsive-container">
                <div className="home-about-responsive-inner">
                    {HomeAboutContent?.header_title_lines && (
                        <div className="header-above-portrait">
                            <h1>
                                {HomeAboutContent?.header_title_lines.map(
                                    (item, index) => {
                                        return (
                                            <FadeInWhenVisible key={index}>
                                                <div className="home-about-responsive-content-line">
                                                    <div className="home-about-responsive-content-line-inner">
                                                        {item?.title_line}
                                                    </div>
                                                </div>
                                            </FadeInWhenVisible>
                                        );
                                    }
                                )}
                            </h1>
                        </div>
                    )}

                    <div className="home-about-responsive-portrait">
                        <FadeInWhenVisible>
                            <div className="responsive-potrait-container">
                                <Parallax
                                    bgImage={HomeAboutContent?.home_about_image}
                                    bgImageAlt="portrait"
                                    strength={150}
                                    className="parallax-bg"
                                />
                            </div>
                        </FadeInWhenVisible>
                        {HomeAboutContent?.home_about_image_description && (
                            <FadeInWhenVisible>
                                <div className="image-info">
                                    {
                                        HomeAboutContent?.home_about_image_description
                                    }
                                </div>
                            </FadeInWhenVisible>
                        )}
                    </div>
                    <div className="home-about-responsive-content">
                        <div className="home-about-responsive-content-inner">
                            <div className="home-about-responsive-paragraphs">
                                {HomeAboutContent?.paragraphs.map(
                                    (item, index) => {
                                        return (
                                            <FadeInWhenVisible key={index}>
                                                <p className="home-about-responsive-paragraph">
                                                    {item?.paragraph}
                                                </p>
                                            </FadeInWhenVisible>
                                        );
                                    }
                                )}
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
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomeAboutResponsive;
