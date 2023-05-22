import React from 'react';
import styles from '../Footer/Footer.module.css';

const FooterDef = () => {
  return (
    <div className={styles.usefulLinks}>
      <div className={styles.footerTitle}>Enlaces Útiles</div>
      <ul>
        <li>
          <a href="/registro">Sign In</a>
        </li>
        <li>About Us</li>
        <li>Become an Affiliate</li>
        <li>Advertise with Us</li>
        <li>
          <a href="/TermsAndConditions">Términos y condiciones</a>
        </li>
      </ul>
    </div>
  );
};


export default FooterDef;