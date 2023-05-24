import NavBar from "../../components/NavBar/NavBar";
import React from "react";
import { useEffect, useState } from "react";
import styles from "./Applicant.module.css";
import { Link } from "react-router-dom";
import CardPlan from "../../components/CardPlan/CardPlan";
import { useAuth0 } from "@auth0/auth0-react";
import img from "../../assets/img/empleo1.jpg";

export default function Applicant({ setCurrentUserStore }) {
	const [greeting, setGreeting] = useState("");
	const { isAuthenticated, user } = useAuth0();

	useEffect(() => {
		if (isAuthenticated && user) {
			const name = user.name;
			setGreeting(`Hola, ${name}!`);
		}
	}, [isAuthenticated, user]);
	return (
		<>
    <div className={styles.container}>
      <div className={styles.containerComponents}>
        <NavBar setCurrentUserStore={setCurrentUserStore} ></NavBar>
      </div>

      <div className={styles.containerPrincipal}>
        <div className={styles.saludo}>
          <h1 className={styles.titulo}>{greeting}</h1>
        </div>
        <div>
          <div className={styles.bienvenida}>
            <h3 className={styles.info}>Te deseamos una bienvenida a JobPortalX</h3>
          </div>
          <div className={styles.pregunta}>
            <h4 className={styles.info}>¿Qué quieres hacer?</h4>
          </div>
        </div>
        <div className={styles.containerButtons}>
						<Link to='/profiles'>
							<button className={styles.Button}>
								Mis postulaciones
							</button>
						</Link>
						<Link to='/registro-cv'>
							<button className={styles.Button}>Cv</button>
						</Link>
						<Link to='/registro-experiencia'>
							<button className={styles.Button}>
								Experience
							</button>
						</Link>
						<Link to='/empleos'>
							<button className={styles.Button}>Vacantes</button>
						</Link>
						<Link to='/Miperfil'>
							<button className={styles.Button}>Mi perfil</button>
						</Link>
						<Link to='/profiles-company'>
							<button className={styles.Button}>
								Perfiles Empresa
							</button>
						</Link>
						<Link to='/MiEducacion'>
							<button className={styles.Button}>
								Mi educacion
							</button>
						</Link>
      </div>
      </div>
    </div>
 <div className={styles.contenedor}>
				<div className={styles.prueba}>
					<div className={styles.leftSection}>
						<h1>Este es el Home de Applicant</h1>
					</div>

					<div className={styles.rightSection}>
						<img src={img} alt='Servidor en Mantenimiento' />
					</div>
				</div>

				<div className={styles.prueba}>
					<div className={styles.leftSection}>
						<img src={img} alt='Servidor en Mantenimiento' />
					</div>

					<div className={styles.middleSection}>
						<h1>Joel</h1>
					</div>

					<div className={styles.rightSection}>
						<img src={img} alt='Servidor en Mantenimiento' />
					</div>
				</div>

				<div className={styles.prueba}>
					<div className={styles.leftSection}>
						<div className={styles.planes}>
							<CardPlan
								tittle='Plan Super Destacado'
								text='Aumenta la visibilidad de tu perfil profesional y recibe aviso de nuevas propuestas '
								price='5'
								id='4'
							/>
						</div>
					</div>

					<div className={styles.rightSection}>
						<h1>Actualiza tú plan!</h1>
					</div>
				</div>
				</div>
				<br />
				<br />
		</>
	);
}
