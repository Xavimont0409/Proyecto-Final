import React from "react";
import styles from "./LandingApplicant.module.css";
import {NavBar, CardPlan} from '../../components';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FaWpforms } from "react-icons/fa";

export default function LandingApplicant({ setCurrentUserStore }) {
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
					<NavBar setCurrentUserStore={setCurrentUserStore}></NavBar>
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
						<Link to='/profiles'>
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
								<span className={styles.ButtonText}>Cv</span>
							</button>
						</Link>
						<Link to='/registro-experiencia'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
									<FaWpforms />
								</span>
								<span className={styles.ButtonText}>
									Experience
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
						<Link to='/MiEducacion'>
							<button className={styles.Button}>
								<span className={styles.ButtonIcon}>
									<FaWpforms />
								</span>
								<span className={styles.ButtonText}>
									Mi educacion
								</span>
							</button>
						</Link>
					</div>
				</div>
			</div>
			<div className={styles.contenedor}>
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
