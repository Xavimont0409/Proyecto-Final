import React, { useState } from "react";
import style from "./FAQs.module.css";
import NavBar from "../../components/NavBar/NavBar";

const faqData = [
	{
		question: "¿Cómo funciona JobPortalX?",
		answer: "JobPortalX es un portal de empleo que conecta a empleadores y candidatos. Los empleadores pueden publicar ofertas de empleo y los candidatos pueden buscar y postularse a través de nuestra plataforma. Nuestro sistema utiliza algoritmos avanzados para hacer coincidir las habilidades y experiencia de los candidatos con las necesidades de los empleadores.",
	},
	{
		question: "¿Cómo puedo registrarme en JobPortalX?",
		answer: "Para registrarte en JobPortalX, sigue estos pasos: ",
		steps: [
			"Ve a nuestra página de inicio en www.jobportalx.com.",
			"Haz clic en el botón Registrarse en la esquina superior derecha.",
			"Completa el formulario de registro con tu información personal, como nombre, dirección de correo electrónico y contraseña.",
			"Haz clic en Registrarse para crear tu cuenta.",
			"¡Listo! Ahora puedes acceder a tu cuenta y comenzar a buscar empleos o publicar ofertas de empleo.",
		],
	},
	{
		question: "¿Cuánto cuesta usar JobPortalX?",
		answer: "El uso básico de JobPortalX es gratuito tanto para empleadores como para candidatos. Sin embargo, también ofrecemos opciones premium y servicios adicionales que pueden tener un costo. Puedes obtener más información sobre nuestras opciones de suscripción y tarifas en tu Home.",
	},
	{
		question: "¿Cómo puedo buscar empleos en JobPortalX?",
		answer: "Para buscar empleos en JobPortalX, sigue estos pasos: ",
		steps: [
			"Inicia sesión en tu cuenta de JobPortalX.",
			"Haz clic en la opción Vacantes en tu Home.",
			"Ingresa los criterios de búsqueda, como Fecha de publicación, Experiencia, Modalidad.",
			"Haz clic en Buscar y se mostrarán los resultados de empleos que coincidan con tus criterios.",
			"Explora las opciones de empleo y haz clic en aquellos que te interesen para obtener más detalles y postularte si deseas.",
		],
	},
	{
		question: "¿Cómo puedo publicar una oferta de empleo en JobPortalX?",
		answer: "Para publicar una oferta de empleo en JobPortalX, sigue estos pasos: ",
		steps: [
		"Inicia sesión en tu cuenta de JobPortalX.",
		"Haz clic en la opción Publicar vacante en tu Home.",
		"Completa el formulario de publicación de empleo con detalles como título del trabajo, descripción, modalidad, jornada, experiencia.",
		"Revisa la información y haz clic en Publicar para que tu oferta de empleo esté disponible para los candidatos.",
		],
	},
	{
		question: "¿Cómo puedo eliminar mi cuenta de JobPortalX?",
		answer: "Si deseas eliminar tu cuenta de JobPortalX, comunicate con @jobportalxcompany y te ayudaremos",
	},
];

function FAQ() {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggle = (index) => {
		if (activeIndex === index) {
			setActiveIndex(null);
		} else {
			setActiveIndex(index);
		}
	};

	return (
		<div className={style.container}>
		<NavBar/>	
			<div className={style.title}>
				<h2 className={style.titulito}>Preguntas frecuentes</h2>
			</div>
			<div className={style.Preguntas}>
				<div>
					{faqData.map((faq, index) => (
						<div
							key={index}
							className={`${style.card} ${
								activeIndex === index ? style.active : ""
							}`}
							onClick={() => handleToggle(index)}
						>
							<h2>{faq.question}</h2>
							{activeIndex === index && (
								<div>
									<p>{faq.answer}</p>
									{faq.steps && (
										<ol>
											{faq.steps.map(
												(step, stepIndex) => (
													<li key={stepIndex}>
														{step}
													</li>
												)
											)}
										</ol>
									)}
								</div>
							)}
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default FAQ;
