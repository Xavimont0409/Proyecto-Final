import style from "./Filter.module.css"
//import { useState, useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { filterByTemperaments, resetFilter } from "../../Redux/actions"

const Filter = () => {
  
    return (
        <div className={style.mainContainer}>



            <div className={style.filterContainer}>
                <p>Ciudad</p>
                <select name="FilterByCity">
                    <option value={"Filter"} >Todos</option>
                    {/* {temperaments?.map(temp => {
                            return <option value={temp.name}>{temp.name}</option>
                        })} */}
                </select>
            </div>


            <div className={style.filterContainer}>
                <p>Fecha de publicación</p>
                <select name="FilterByFecha" >
                    <option value="Filter" >Todos</option>
                    <option value="hoy">Hoy</option>
                    <option value='semana'>Esta semana</option>
                    <option value='mes'>Este mes</option>
                </select>
            </div>






            <div className={style.filterContainer}>
                <p>Experiencia</p>
                <select name="FilerByArea">
                    <option value="Filter" >Todos</option>
                    <option value='senior'>Senior</option>
                    <option value='semi_senior'>Semi-Senior</option>
                    <option value='junior'>Junior</option>             
                    <option value='trainee'>Trainee</option>
                </select>
            </div>



            <div className={style.filterContainer}>
                <p>Modalidad</p>
                <select name="FilterByModalidad" >
                    <option value="Filter" >Todos</option>
                    <option value="face-to-face">Presencial</option>
                    <option value='hybrid'>Hibrido</option>
                    <option value='remote'>Remoto</option>
                </select>
            </div>

            <button style={{'borderRadius':'5px'}}>Limpiar filtros</button>

        </div>

    )


};

export default Filter;