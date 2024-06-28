import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-logo">
                <a href="#">
                    <span className="red">pix</span><span className="white">flick</span><span className="red">.</span>
                </a>
            </div>
            <div className="footer-social">
                <a href="https://bg-bg.facebook.com/" target="_blank">
                    <FontAwesomeIcon icon={faFacebookF} /> <span>Facebook</span>
                </a>
                <a href="https://www.instagram.com/" target="_blank">
                    <FontAwesomeIcon icon={faInstagram} /> <span>Instagram</span>
                </a>
                <a href="https://twitter.com/?lang=bg" target="_blank">
                    <FontAwesomeIcon icon={faXTwitter} /> <span>Twitter</span>
                </a>
            </div>
    
            <div className="footer-copyright">
                <p>&copy; pixflick - 2024 | All rights reserved.</p>
            </div>
        </footer>
    );
}