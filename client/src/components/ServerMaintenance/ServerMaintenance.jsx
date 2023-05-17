import React from 'react';
import { SiGmail, SiTwitter, SiFacebook } from 'react-icons/si';
import styles from './ServerMaintenance.module.css';
import img from "../../assets/img/ServerMaintenance.png";

const ServerMaintenance = () => {
  return (
    <div className={styles.container}>
      <div className={styles.leftSection}>
        <h1>Servidor en Desarrollo</h1>
        <div className={styles.socialIcons}>
          <SiGmail />
          <SiTwitter />
          <SiFacebook />
        </div>
      </div>
      <div className={styles.rightSection}>
        <img src={img} alt="Servidor en Mantenimiento" />
      </div>
    </div>
  );
};

export default ServerMaintenance;
