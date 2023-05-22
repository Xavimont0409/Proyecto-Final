import React from 'react';
import styles from '../Footer/Footer.module.css';

const FooterCompany = () => {
  return (
    <div className={styles.usefulLinks}>
      <div className={styles.footerTitle}>Enlaces Útiles para Empresas</div>
      <ul>
        <li>
          <a href="/profiles-company">Perfiles de Empresas</a>
        </li>
        <li>
          <a href="/registro-vacante">Publicar Ofertas de Trabajo</a>
        </li>
      </ul>
    </div>
  );
};

export default FooterCompany;
