import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

import footerStyles from './Footer.module.css';
import MediaLinks from "../../mediaLinks";

export default function Footer() {
    return (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.logo}>
                <Link to="/">
                    <span className={footerStyles.red}>pix</span>
                    <span className={footerStyles.white}>flick</span>
                    <span className={footerStyles.red}>.</span>
                </Link>
            </div>

            <div className={footerStyles.social}>
                <Link to={MediaLinks.Facebook} target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} /> <span>Facebook</span>
                </Link>
                <Link to={MediaLinks.Instagram} target="_blank">
                    <FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span>
                </Link>
                <Link to={MediaLinks.Twitter} target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} /> <span>Twitter</span>
                </Link>
            </div>
    
            <div className={footerStyles.copyright}>
                <p>&copy; pixflick - 2024 | All rights reserved.</p>
            </div>
        </footer>
    );
}