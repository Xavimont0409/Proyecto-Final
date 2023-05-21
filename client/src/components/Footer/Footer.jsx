import React from 'react';
import styles from './Footer.module.css';
import { SiGmail, SiTwitter, SiInstagram } from 'react-icons/si';
import {FooterApplicant, FooterCompany, FooterDefault} from '../index'


const Footer = ({ accountType }) => {
  let footerComponent;

  if (accountType === 'applicant') {
    footerComponent = <FooterApplicant />;
  } else if (accountType === 'company') {
    footerComponent = <FooterCompany />;
  } else {
    footerComponent = <FooterDefault />;
  }

  return (
    <footer>
      <div className={styles.fItemCon}>
        <div className={styles.appInfo}>
          <span className={styles.appName}>
            <span className={styles.appInitial}>J</span>obPortalX
          </span>
        </div>
        <div className={styles.container}>
          {footerComponent}
          <div className={styles.contact}>
            <div className={styles.footerTitle}>Contactos</div>
            <ul>
              <li>
                <a href="https://www.instagram.com/jobportalcompany">
                  <SiInstagram />
                </a>
              </li>
              <li>
                <a href="jobportalxcompany@gmail.com">
                  <SiGmail />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/jobportalx">
                  <SiTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div className={styles.helpSec}>
            <div className={styles.footerTitle}>Ayuda</div>
            <ul>
              <li>
              <a href="jobportalxcompany@gmail.com">Ayuda</a>  
              </li>
              <li>
                <a href="jobportalxcompany@gmail.com">Reporta un problema</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.subFooter}>
        <div className={styles.subFooterContainer}>
          <span>© {new Date().getFullYear()} JobPortalX. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
