import { ImArrowRight2 } from "react-icons/im";
import FooterFields from "../content/footer.json";

const FooterNormal = () => {
    return (
        <div id="footer-normal" className="footer-normal">
            <div className="container">
                <div className="top-footer-row">
                    <div className="footer-email">
                        <div className="email-header">
                            <div className="interested-question">
                                {FooterFields?.header_title}
                            </div>

                            <h2 className="email-header-link">
                                <a href={FooterFields.email_url}>
                                    <span>{FooterFields.email_url_title}</span>
                                    <ImArrowRight2 className="email-link-icon" />
                                </a>
                            </h2>

                            <h2 className="email-header-link insta">
                                <a
                                    href={FooterFields?.insta_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {FooterFields?.insta_url_title}
                                </a>
                            </h2>
                        </div>
                    </div>
                </div>

                <div className="bottom-footer-row">
                    <div className="footer-bottom-container">
                        <div className="footer-bottom-left">
                            <div className="footer-copyright">
                                {FooterFields?.copyright}
                            </div>
                            <div className="made-by">
                                <a
                                    href={FooterFields?.made_by_url}
                                    rel="noreferrer noopener"
                                    target="_blank"
                                >
                                    {FooterFields?.made_by}
                                </a>
                            </div>
                        </div>
                        <div className="footer-bottom-right">
                            {FooterFields.social_links.map((link, index) => {
                                return (
                                    <a
                                        className="footer-bottom-socials-links"
                                        href={link?.url}
                                    >
                                        {link?.title}
                                        <em className="comma">,</em>
                                    </a>
                                );
                            })}

                            {/* <a href="/" className="footer-bottom-socials-links">
                                Instagram<em className="comma">,</em>
                            </a>
                            <a href="/" className="footer-bottom-socials-links">
                                Youtube<em className="comma">,</em>
                            </a>
                            <a href="/" className="footer-bottom-socials-links">
                                Unsplash
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterNormal;
