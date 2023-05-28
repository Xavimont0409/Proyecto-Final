import React from 'react';
import style from "./ListItemExperience.module.css"
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

const ListItem = ({ charge, company, startDate, endDate }) => {

  const formatDate = (date) => {
    const formattedDate = format(new Date(date), 'MMMM yyyy', { locale: es });
    return formattedDate;
  };

  return (
    <div className={style.container1}>
      <h6>{charge}</h6>
      <h7>{company}</h7>
      <div className={style.container2}>
      <p>{formatDate(startDate)}</p>
      <p>-</p>
      <p>{endDate === 'Actualmente'? endDate :formatDate(endDate)}</p>
      </div>
    </div>
  );
};

export default ListItem;