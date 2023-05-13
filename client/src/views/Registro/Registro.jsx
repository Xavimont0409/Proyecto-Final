import React from "react";
import { useNavigate } from "react-router-dom"
import ButtonGeneral from "../../components/Button/ButtonGeneral";
import NavBar from "../../components/NavBar/NavBarUnlog";
import style from "./Registro.module.css";

const Registro = () => {

    const navigation = useNavigate();

    const toEmpresa = () => {
        navigation('/registro-empresa')
    }

    const toCV = () => {
        navigation('/registro-cv')
    }

    return (


        <div className={style.mainContainer}>

            <NavBar></NavBar>
            <h1>¿Aún no estas registrado?</h1>

            <div className={style.cardsContainer}>

                <div className={style.cardContainer1}>
                    <h2>Empresa</h2>
                    <p className={style.parrafo}>Encuentra los mejores candidatos para tu empresa</p>

                    <ButtonGeneral
                        textButton="Registra tu empresa"
                        handlerClick={toEmpresa}
                    />

                </div>


                <div className={style.cardContainer2}>

                    <h2>Postulante</h2>

                    <p className={style.parrafo}>Postúlate a los trabajos que más te interesen y sigue el proceso de tus postulaciones.</p>

                    <ButtonGeneral
                        textButton="Regista tu CV"
                        handlerClick={toCV}
                    />
                </div>
            </div>

           

        </div>
    )
}

export default Registro;