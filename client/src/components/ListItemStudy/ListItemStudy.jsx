import React from 'react';


const ListItemStudy = ({ study_level, title, institute, state}) => {


  return (
    <div>
      <h6>{study_level}</h6>
      <h6>{title}</h6>
      <p>{institute}</p>
      <p>{state}</p>
    </div>
  );
};

export default ListItemStudy;