import React from 'react';
import {Link} from "react-router-dom";
import styles from './Footer.module.scss';
const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <p>&copy; 2023 Anzhela Dmytrenko</p>
                <div className={`social-icons ${styles.socialIcons}`}>
                    <Link to="https://github.com/AnzhelaD" target="_blank">
                        <i className="fab fa-github"></i>
                        GitHub
                    </Link>
                    <span className={styles.iconSeparator}></span>
                    <Link to="https://www.linkedin.com/in/anzhela-dmytrenko-15bbbb143/" target="_blank">
                        <i className="fab fa-linkedin"></i>
                        LinkedIn
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
