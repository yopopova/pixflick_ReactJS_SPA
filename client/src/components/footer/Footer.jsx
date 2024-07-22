import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

import MediaLinks from "../../mediaLinks";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <a href="#">
                    <span className="red">pix</span><span className="white">flick</span><span className="red">.</span>
                </a>
            </div>
            <div className="footer-social">
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
    
            <div className="footer-copyright">
                <p>&copy; pixflick - 2024 | All rights reserved.</p>
            </div>
        </footer>
    );
}