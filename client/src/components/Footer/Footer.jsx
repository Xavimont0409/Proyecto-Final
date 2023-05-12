import React from "react";
import styles from "./Footer.module.css";
import { SiGmail, SiTwitter, SiFacebook } from "react-icons/si";

const Footer = () => (
<footer>
    
        <div className={styles.fItemCon}>
            <div className={styles.appInfo}>
                <span className={styles.appName}>
                    <span className={styles.appInitial}>J</span>obPortalX
                </span>
            </div>
            <div className={styles.container}>
                <div className={styles.usefulLinks}>
                    <div className={styles.footerTitle}>Useful Links</div>
                    <ul>
                        <li>Courses</li>
                        <li>Sign In</li>
                        <li>About Us</li>
                        <li>Become an Affiliate</li>
                        <li>Advertise with Us</li>
                        <li>Terms and Conditions</li>
                    </ul>
                </div>
                <div className={styles.contact}>
                    <div className={styles.footerTitle}>Contactos</div>
                        <ul>
                            <li><SiFacebook/></li>
                            <li><SiGmail/></li>
                            <li><SiTwitter/></li>
                        </ul>
                    </div>
             
                <div className={styles.helpSec}>
                    <div className={styles.footerTitle}>Help</div>
                        <ul>
                            <li>Help Me</li>
                            <li>Feedback</li>
                            <li>Report a Issue / Bug</li>
                        </ul>
                    </div>
                </div>
            </div>
        <div className={styles.crCon}>Copyright &copy; 2023</div>
    </footer>
);

export default Footer;
