import React from 'react';
import ImgError404 from '../../assets/img/Error 404.png'
import styles from "./Error404.module.css";

const Error404 = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className={styles.errorContainer}>
        <div className={styles.imgYp}>
      <img src={ImgError404} alt="Error 404" className={styles.errorImage}/>
      <div className={styles.parrafo}>
      <h3>Esta página no está disponible. </h3>
      <h3>Intente más tarde.</h3>
      </div>
        </div>
      <button onClick={handleGoBack} className={styles.errorButton}>Volver</button>
    </div>
  );
};

export default Error404;
