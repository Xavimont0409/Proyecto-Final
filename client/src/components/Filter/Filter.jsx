import style from "./Filter.module.css";
//import { useState, useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { filterByTemperaments, resetFilter } from "../../Redux/actions"
import {
  filterPerSeniority,
  filterPerWordkmethod,
  filterPerTime,
} from "../../Redux/Actions/actionsFunction/FiltersHome";
import { useDispatch } from "react-redux";
import { getAllVacants } from "../../Redux/Actions/actionsFunction/axtionsVacants";
import { useLocalStorage } from "../../useLocalStorage/useLocalStorage";

const Filter = () => {
  const dispatch = useDispatch();
  const [ expe, setExpe ] = useLocalStorage('expe', '0')
  const [ date, setdate ] = useLocalStorage('time', '')
  const [ method, setMethod ] = useLocalStorage('method', '')


  const handlerFilterSeniority = (event) => {
    setExpe(event.target.value)
    dispatch(filterPerSeniority(event.target.value));

  };

  const handlerFilterWordkMethod = (event) => {
    setMethod(event.target.value)
    dispatch(filterPerWordkmethod(event.target.value));
  };

  const handlerFilterTime = (event) => {
    setdate(event.target.value)
    dispatch(filterPerTime(event.target.value));

  };

  return (
    <div className={style.mainContainer}>
      <div className={style.allFilters}>
        
        <div className={style.selectSpecial}>
          <p className={style.pSpecial}>Fecha de publicación</p>
          <select
            name="FilterByFecha"
            className={style.select}
            value={date}
            onChange={(event) => handlerFilterTime(event)}
          >
            <option value={date === "Filter" ? date : "Filter" }>Todos</option>
            <option value={date === "Hoy" ? date : "Hoy"}>Hoy</option>
            <option value={date === "Semana" ? date : "Semana"}>Esta semana</option>
            <option value={date === "Mes" ? date : "Mes"}>Este mes</option>
          </select>
        </div>

        <div className={style.filterContainer}>
          <p className={style.p}>Experiencia</p>
          <select
            name="FilerByArea"
            className={style.select}
            value={expe}
            onChange={(event) => handlerFilterSeniority(event)}
          >
            <option value={expe === "0" ? expe : "0"}>Todos</option>
            <option value={expe ==="senior" ? expe : "senior"}>Senior</option>
            <option value={expe === "semiSenior" ? expe: "semiSenior"}>Semi-Senior</option>
            <option value={expe ==="junior" ? expe : "junior"}>Junior</option>
            <option value={expe ==="trainee" ? expe : "trainee"}>Trainee</option>
          </select>
        </div>

        <div className={style.filterContainer}>
          <p className={style.p}>Modalidad</p>
          <select
            name="FilterByModalidad"
            className={style.select}
            value={method}
            onChange={(event) => handlerFilterWordkMethod(event)}
          >
            <option value={method === "All" ? method : "All"}>Todos</option>
            <option value={method === "presencial" ? method : "presencial"}>Presencial</option>
            <option value={method === "hibrido" ? method : "hibrido"}>Hibrido</option>
            <option value={method === "remoto" ? method : "remoto"}>Remoto</option>
          </select>
        </div>
        <div className={style.emptyFilters}>
          <button
            className={style.button}
            style={{ borderRadius: "5px" }}
            onClick={() => {
              setExpe("0")
              setMethod("All")
              setdate("Filter")
              return dispatch(getAllVacants())
            }}
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
