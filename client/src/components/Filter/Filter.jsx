import style from "./Filter.module.css"
//import { useState, useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { filterByTemperaments, resetFilter } from "../../Redux/actions"

const Filter = () => {
  
    return (
        <div className={style.mainContainer}>


            <div className={style.allFilters}>
                <div className={style.filterContainer}>
                    <p className={style.p}>Ciudad</p>
                    <select name="FilterByCity" className={style.select}>
                        <option value={"Filter"} >Todos</option>
                        {/* {temperaments?.map(temp => {
                                return <option value={temp.name}>{temp.name}</option>
                            })} */}
                    </select>
                </div>


                <div className={style.filterContainer}>
                    <p className={style.p}>Fecha de publicación</p>
                    <select name="FilterByFecha" className={style.selectSpecial}>
                        <option value="Filter" >Todos</option>
                        <option value="hoy">Hoy</option>
                        <option value='semana'>Esta semana</option>
                        <option value='mes'>Este mes</option>
                    </select>
                </div>






                <div className={style.filterContainer}>
                    <p className={style.p}>Experiencia</p>
                    <select name="FilerByArea" className={style.select}>
                        <option value="Filter" >Todos</option>
                        <option value='senior'>Senior</option>
                        <option value='semi_senior'>Semi-Senior</option>
                        <option value='junior'>Junior</option>             
                        <option value='trainee'>Trainee</option>
                    </select>
                </div>



                <div className={style.filterContainer}>
                    <p className={style.p}>Modalidad</p>
                    <select name="FilterByModalidad" className={style.select}>
                        <option value="Filter" >Todos</option>
                        <option value="face-to-face">Presencial</option>
                        <option value='hybrid'>Hibrido</option>
                        <option value='remote'>Remoto</option>
                    </select>
                </div>
                <div className={style.emptyFilters}>
                    <button style={{'borderRadius':'5px'}}>Limpiar filtros</button>
                </div>
            </div>
        </div>

    )


};

export default Filter;