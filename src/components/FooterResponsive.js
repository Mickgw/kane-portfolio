import { ImArrowRight2 } from "react-icons/im";
import FooterFields from "../content/footer.json";

const FooterResponsive = () => {
    return (
        <div id="footer-responsive" className="footer-responsive">
            <div className="footer-container">
                <div className="interested-section">
                    <div className="interested-question">
                        {FooterFields?.header_title}
                    </div>

                    <h2 className="email-link">
                        <a href={FooterFields.email_url}>
                            <span>{FooterFields.email_url_title}</span>
                            <ImArrowRight2 className="email-link-icon" />
                        </a>
                    </h2>

                    <h2 className="instagram-link">
                        <a
                            href={FooterFields?.insta_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {FooterFields?.insta_url_title}
                        </a>
                    </h2>
                </div>
                <div className="socials-section">
                    <ul className="socials">
                        {FooterFields?.social_links.map((link, index) => {
                            return (
                                <li className="social-link" key={index}>
                                    <a href={link?.url}>{link?.title}</a>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className="copyright-section">
                    <div className="made-by">
                        <a
                            href={FooterFields?.made_by_url}
                            rel="noreferrer noopener"
                            target="_blank"
                        >
                            {FooterFields?.made_by}
                        </a>
                    </div>
                    <div className="copyright">{FooterFields?.copyright}</div>
                </div>
            </div>
        </div>
    );
};

export default FooterResponsive;
