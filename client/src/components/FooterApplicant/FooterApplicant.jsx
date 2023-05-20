import React from 'react';
import styles from '../Footer/Footer.module.css';

const FooterApplicant = () => {
  return (
    <div className={styles.usefulLinks}>
      <div className={styles.footerTitle}>Enlaces Útiles para Solicitantes</div>
      <ul>
        <li>
          <a href="/empleos">Búsqueda de Empleo</a>
        </li>
        <li>
          <a href="/consejos-entrevistas">Consejos para Entrevistas</a>
        </li>
        {/* Otros enlaces para solicitantes */}
      </ul>
    </div>
    
  );
};

export default FooterApplicant;
