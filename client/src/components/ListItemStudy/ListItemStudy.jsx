import React from 'react';
import style from './ListItemStudy.module.css'


const ListItemStudy = ({ study_level, title, institute, state}) => {


  return (
    <div className={style.container1}>
      <h4>{title}</h4>
      <h5>{study_level}</h5>
      <h5>{institute}</h5>
      <h5>{state}</h5>
    </div>
  );
};

export default ListItemStudy;