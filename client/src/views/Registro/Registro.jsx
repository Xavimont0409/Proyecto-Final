import React from "react";
import { Link } from "react-router-dom"
import ButtonGeneral from "../../components/Button/ButtonGeneral";
import NavBar from "../../components/NavBar/NavBarUnlog";
import style from "./Registro.module.css";

const Registro = () => {

    return (
        <div className={style.mainContainer}>
            <NavBar></NavBar>
            <div className={style.container}>
                <h1>¿Aún no estas registrado?</h1>
                <div className={style.cardsContainer}>
                    <Link className={style.words} to={'/registroini-empresa'}>
                        <div className={style.cardContainer1}>
                            <h2>Soy Empresa</h2>
                            <p className={style.parrafo}>Encuentra los mejores candidatos para tu empresa</p>
                        </div>
                    </Link>
                    <Link className={style.words} to={'/registro-usuario'}>
                        <div className={style.cardContainer2}>
                            <h2>Soy Postulante</h2>
                            <p className={style.parrafo}>Postúlate a los trabajos que más te interesen y sigue el proceso de tus postulaciones.</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Registro;