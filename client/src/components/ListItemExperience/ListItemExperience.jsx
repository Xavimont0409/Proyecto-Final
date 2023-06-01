import React from 'react';
import style from "./ListItemExperience.module.css"
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const ListItem = ({ charge, company, startDate, endDate }) => {

  const formatDate = (date) => {
    const formattedDate = format(new Date(date), 'MMM yyyy', { locale: es });
    return formattedDate;
  };

  return (
    <div className={style.container1}>
      <h4>{charge}</h4>
      <h5>{company}</h5>
      <div className={style.container2}>
      <p style={{'fontSize':'20px'}}>{formatDate(startDate)}</p>
      <p>-</p>
      <p style={{'fontSize':'20px'}}>{endDate === 'Actualmente'? endDate :formatDate(endDate)}</p>
      </div>
    </div>
  );
};

export default ListItem;