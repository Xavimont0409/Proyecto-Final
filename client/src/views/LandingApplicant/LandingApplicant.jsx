import React from "react";
import styles from "./LandingApplicant.module.css";
import {NavBar} from '../../components';
import { useState } from "react";
import { Link } from "react-router-dom";

export default function LandingApplicant({ setValidateState, setCurrentUserStore2 }) {
	
	// eslint-disable-next-line no-unused-vars
	const validate = JSON.parse(localStorage.getItem("state"))
	const userType2 = JSON.parse(localStorage.getItem("currentUser2"))
	// eslint-disable-next-line no-unused-vars
	const [greeting, setGreeting] = useState(`Hola, ${userType2.name}!`);
	
	return (
		<>
			<div className={styles.container}>
				<div className={styles.containerComponents}>
					<NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2}></NavBar>
				</div>
				<div className={styles.containerPrincipal}>
					<div className={styles.saludo}>
						<h1 className={styles.titulo}>{greeting}</h1>
						<div>

						</div>
						<h3 className={styles.info}>Te damos la bienvenida a JobPortalX</h3>
						<div className={styles.pregunta}>
							<h4>¿Qué quieres hacer?</h4>
						</div>
					</div>
					<div className={styles.containerButtons}>
						<Link to='/postulaciones'>
							<button
								className={styles.Button}
								title='Mis postulaciones'
							>
								<span className={styles.ButtonIcon}>
								</span>
								<span className={styles.ButtonText}>
									Mis postulaciones
								</span>
							</button>
						</Link>
						<Link to='/registro-cv'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
								</span>
								<span className={styles.ButtonText}>
									Crear CV
								</span>
							</button>
						</Link>
						<Link to='/registro-experiencia'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
								</span>
								<span className={styles.ButtonText}>
									Registrar experiencia
								</span>
							</button>
						</Link>
						<Link to='/empleos'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
								</span>
								<span className={styles.ButtonText}>
									Vacantes
								</span>
							</button>
						</Link>
						<Link to='/Miperfil'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
								</span>
								<span className={styles.ButtonText}>
									Mi perfil
								</span>
							</button>
						</Link>
						<Link to='/profiles-company'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
								</span>
								<span className={styles.ButtonText}>
									Perfiles de empresas
								</span>
							</button>
						</Link>
						<Link to='/registro-estudio'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
								</span>
								<span className={styles.ButtonText}>
									Registrar educacion
								</span>
							</button>
						</Link>
						<Link to='/PlansAndPrices'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
								</span>
								<span className={styles.ButtonText}>
									Planes y Precios
								</span>
							</button>
						</Link>
					</div>
				</div>
			</div>    
		</>
	);
}
