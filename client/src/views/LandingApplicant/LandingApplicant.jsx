import React from "react";
import styles from "./LandingApplicant.module.css";
import {NavBar, CardPlan} from '../../components';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaWpforms } from "react-icons/fa";

export default function LandingApplicant({ setValidateState, setCurrentUserStore2 }) {

	const [greeting, setGreeting] = useState("");
	const validate = JSON.parse(localStorage.getItem("state"))
	const userType2 = JSON.parse(localStorage.getItem("currentUser2"))


	useEffect(() => {
		if (validate && userType2) {
			const name = userType2.name;
			setGreeting(`Hola, ${name}!`);
		}

	}, [validate, userType2]);
	return (
		<>
			<div className={styles.container}>
				<div className={styles.containerComponents}>
					<NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2}></NavBar>
				</div>


				<div className={styles.containerPrincipal}>
					<div className={styles.saludo}>
						<h1 className={styles.titulo}>{greeting}</h1>
					</div>
					<div>
						<div className={styles.bienvenida}>
							<h3 className={styles.info}>
								Te deseamos una bienvenida a JobPortalX
							</h3>
						</div>
						<div className={styles.pregunta}>
							<h4 className={styles.info}>¿Qué quieres hacer?</h4>
						</div>
					</div>
					<div className={styles.containerButtons}>
						<Link to='/postulaciones'>
							<button
								className={styles.Button}
								title='Mis postulaciones'
							>
								<span className={styles.ButtonIcon}>
									<FaWpforms />
								</span>
								<span className={styles.ButtonText}>
									Mis postulaciones
								</span>
							</button>
						</Link>
						<Link to='/registro-cv'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
									<FaWpforms />
								</span>
								<span className={styles.ButtonText}>
									Crear Cv
								</span>
							</button>
						</Link>
						<Link to='/registro-experiencia'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
									<FaWpforms />
								</span>
								<span className={styles.ButtonText}>
									Registra Experiencia
								</span>
							</button>
						</Link>
						<Link to='/empleos'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
									<FaWpforms />
								</span>
								<span className={styles.ButtonText}>
									Vacantes
								</span>
							</button>
						</Link>
						<Link to='/Miperfil'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
									<FaWpforms />
								</span>
								<span className={styles.ButtonText}>
									Mi perfil
								</span>
							</button>
						</Link>
						<Link to='/profiles-company'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
									<FaWpforms />
								</span>
								<span className={styles.ButtonText}>
									Perfiles Empresa
								</span>
							</button>
						</Link>
						<Link to='/registro-estudio'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
									<FaWpforms />
								</span>
								<span className={styles.ButtonText}>
									Registra Educacion
								</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.contenedor}>
				<div className={styles.prueba}>
					<div className={styles.titlePlan}>
						<h1 className={styles.title}>Actualiza tú plan!</h1>
					</div>
					<div className={styles.rightSection}>
							<h1>Plan Super Destacado</h1>
						</div>
						<div className={styles.planes}>
							<CardPlan
								tittle='Plan Super Destacado'
								text='Aumenta la visibilidad de tu perfil profesional y recibe aviso de nuevas propuestas '
								price='5'
								id='4'
							/>
						</div>
				</div>
			</div>
		</>
	);
}
