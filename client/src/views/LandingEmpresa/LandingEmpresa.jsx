import style from "./LandignEmpresa.module.css";
import NavBar from "../../components/NavBar/NavBar";
import CardPlan from "../../components/CardPlan/CardPlan";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaWpforms } from "react-icons/fa";
const LandingEmpresa = ({ setValidateState, setCurrentUserStore2 }) => {
	const [greeting, setGreeting] = useState("");
	const userType2 = JSON.parse(localStorage.getItem("currentUser2"))
	const validate = JSON.parse(localStorage.getItem("state"))

	useEffect(() => {
		if (validate && userType2) {
			const name = userType2.name;
			setGreeting(`Hola, ${name}!`);
		}
	}, [validate, userType2]);
	return (
		<>
			<div className={style.container}>
				<div className={style.containerComponents}>
					<NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2}></NavBar>
				</div>

				<div className={style.containerPrincipal}>
					<div className={style.saludo}>
						<h1 className={style.titulo}>{greeting}</h1>
					</div>
					<div>
						<div className={style.bienvenida}>
							<h3 className={style.info}>
								Te deseamos una bienvenida a JobPortalX
							</h3>
						</div>
						<div className={style.pregunta}>
							<h4 className={style.info}>¿Qué quieres hacer?</h4>
						</div>
					</div>
					<div className={style.containerButtons}>
						<Link to='/registro-vacante'>
							<button className={style.Button}>
								<FaWpforms /> Crear vacante
							</button>
						</Link>
						<Link to='/vacantes'>
							<button className={style.Button}>
								Mis vacantes
							</button>
						</Link>
						<Link to='/perfil-company'>
							<button className={style.Button}>Mi perfil</button>
						</Link>
						<Link to='/ratings'>
							<button className={style.Button}>Ratings</button>
						</Link>
						<Link to='/profiles'>
							<button className={style.Button}>
								Postulantes
							</button>
						</Link>
						<Link to='/profiles-company'>
							<button className={style.Button}>Empresas</button>
						</Link>
					</div>
				</div>
				<div className={style.contenedor}>
					<div className={style.prueba}>
						<div className={style.titlePlan}>
							<h2 className={style.title}>Actualiza tú plan!</h2>
						</div>
						<div className={style.rightSection}>
							<h1>Plan Básico</h1>
						</div>
							<div className={style.planes}>
								<CardPlan
									tittle='Plan Básico'
									text='Publica vacantes semanales con un límite de tiempo'
									price='30'
									id='1'
								/>
							</div>
					</div>

					<div className={style.prueba}>
						<div className={style.titlePlan}>
							<h2 className={style.title}>Actualiza tú plan!</h2>
						</div>
						<div className={style.rightSection}>
							<h2>Plan Destacado</h2>
						</div>
							<div className={style.planes}>
								<CardPlan
									tittle='Plan Destacado'
									text='Publica más vacante por semana con duración mayor'
									price='50'
									id='2'
								/>
							</div>
					</div>

					<div className={style.prueba}>
						<div className={style.titlePlan}>
							<h2 className={style.title}>Actualiza tú plan!</h2>
						</div>
						<div className={style.rightSection}>
							<h2>Plan Premium</h2>
						</div>
							<div className={style.planes}>
								<CardPlan
									tittle='Plan Premium'
									text='Publica vacantes ilimitadas y sin fecha límite'
									price='90'
									id='3'
								/>
							</div>
					</div>
				</div>
			</div>
		</>
	);
};
/*
<div className={style.planes}>
                
                
                
            </div>
            <div className={style.containerPerfiles}>
                <h2 className={style.subtitle}>Estos Perfiles te pueden interesar</h2>
                <CarouselPerfiles/>
            </div> */
export default LandingEmpresa;
