import style from "./AboutUs.module.css";
import NavBar from "../../components/NavBar/NavBar";
import grupo from "../../assets/img/asistente.png";
import valores from "../../assets/img/valores.png";
import { CardsEquipo } from "../../components";

const AboutUs = ({ setValidateState, setCurrentUserStore2 }) => {
	// eslint-disable-next-line
	const user = JSON.parse(localStorage.getItem("currentUser2"));

	return (
		<div className={style.container}>
			<NavBar
				setValidateState={setValidateState}
				setCurrentUserStore2={setCurrentUserStore2}
			/>
			<div className={style.titulo}>
				<h1 className={style.titulito}>Sobre nosotros</h1>
			</div>
			<div className={style.containerFirst}>
				<div className={style.title}>
					<h1 className={style.titleFirst}>
						Contruimos puentes entre empresas y clientes.
					</h1>
				</div>
				<div className={style.parrafoFirst}>
					<p>
						{" "}
						Desarrolladores enfocados en brindar la atención al
						cliente en pequeñas y medianas empresas con la capacidad
						de crear relaciones fructíferas y duraderas.
					</p>
				</div>
			</div>

			<div className={style.containerSecond}>
				<div className={style.containerText}>
					<h1 className={style.titleSecond}>Quiénes somos</h1>
					<p className={style.parrafoSecond}>
						{" "}
						En JobPortalX, tu puerta de entrada al éxito
						profesional. Nos enorgullece presentarte nuestra
						plataforma de empleo diseñada con pasión y construida
						por ocho estudiantes apasionados del curso de SoyHenry.
						En JobPortalX, nuestra misión es conectar a talentosos
						profesionales como tú con oportunidades laborales que te
						permitan alcanzar tus metas y sueños.
					</p>
				</div>
				<div className={style.containerGrupo}>
					<img
						src={grupo}
						alt='Foto f'
						className={style.imageSecond}
					/>
				</div>
			</div>

			<div className={style.containerThree}>
				<div className={style.containerGrupo}>
					<img
						src={valores}
						alt='Foto f'
						className={style.imageThree}
					/>
				</div>
				<section className={style.valuesSection}>
					<h2>Nuestros Valores</h2>
					<ul>
						<li>Integridad</li>
						<li>Innovación</li>
						<li>Colaboración</li>
						<li>Excelencia</li>
						<li>Compromiso</li>
					</ul>
				</section>
			</div>

			<CardsEquipo />
		</div>
	);
};

export default AboutUs;
