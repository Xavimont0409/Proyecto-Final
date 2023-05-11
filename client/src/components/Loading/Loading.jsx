import React from 'react';
import style from './Loading.module.css';

const Loading = () => {
  return (
    <div className={style.loading}>
      <div className={style.spinner}>
        <div className={style.doubleBounce1}></div>
        <div className={style.doubleBounce2}></div>
      </div>
      <p className={style.text}>Loading...</p>
    </div>
  );
};

export default Loading;
