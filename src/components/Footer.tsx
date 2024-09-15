import React from 'react';
import './css/footer.scss'

export const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-container__content">
                Made with NextJS, Bootstrap, and ❤️ by me.
                <p className="p__muted">Last updated: <span id="lastUpdate"></span></p>
            </div>
        </footer>
    );
};

export default Footer;