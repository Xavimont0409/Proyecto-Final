import style from "./Filter.module.css"
//import { useState, useEffect } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { filterByTemperaments, resetFilter } from "../../Redux/actions"
import { filterPerSeniority, filterPerWordkmethod } from "../../Redux/Actions/actionsFunction/FiltersHome";
import { useDispatch } from "react-redux";

const Filter = () => {
    const dispatch = useDispatch()

    const handlerFilterSeniority = (event) => {
        dispatch(filterPerSeniority(event.target.value))
    }
    const handlerFilterWordkMethod = (event)=>{
        dispatch(filterPerWordkmethod(event.target.value))
    }   

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
                    <select name="FilterByFecha" className={style.selectSpecial} >
                        <option value="Filter" >Todos</option>
                        <option value="hoy">Hoy</option>
                        <option value='semana'>Esta semana</option>
                        <option value='mes'>Este mes</option>
                    </select>
                </div>






                <div className={style.filterContainer}>
                    <p className={style.p}>Experiencia</p>
                    <select name="FilerByArea" className={style.select} onChange={(event)=> handlerFilterSeniority(event)}>
                        <option value="0" >Todos</option>
                        <option value='senior'>Senior</option>
                        <option value='semiSenior'>Semi-Senior</option>
                        <option value='junior'>Junior</option>             
                        <option value='trainee'>Trainee</option>
                    </select>
                </div>



                <div className={style.filterContainer}>
                    <p className={style.p}>Modalidad</p>
                    <select name="FilterByModalidad" className={style.select} onChange={(event)=>handlerFilterWordkMethod(event)} >
                        <option value="All" >Todos</option>
                        <option value="presencial">Presencial</option>
                        <option value='hibrido'>Hibrido</option>
                        <option value='remoto'>Remoto</option>
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