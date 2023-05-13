import React from 'react';
import ImgError404 from '../../assets/img/Error 404.png'
import styles from "./Error404.module.css";

const Error404 = () => {
  const handleGoHome = () => {
    window.location.href = '/';
  };

  return (
    <div className={styles.errorContainer}>
      <img src={ImgError404} alt="Error 404" className={styles.errorImage}/>
      <button onClick={handleGoHome} className={styles.errorButton}>Volver al inicio</button>
    </div>
  );
};

export default Error404;
