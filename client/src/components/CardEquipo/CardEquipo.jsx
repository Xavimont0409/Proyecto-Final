import style from './CardEquipo.module.css';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const CardsEquipo = () => {
	const arrayEquipo = [
		{
			id: 1,
			name: "Joel",
			lastname: "Dupraz",
			github: "https://github.com/JoelDUAR",
			linkedin: "https://www.linkedin.com/in/joel-dupraz-ardiles/",
			photo: "https://avatars.githubusercontent.com/u/85464395?v=4",
			role: "Desarrollador Full Stack",
		},
		{
			id: 2,
			name: "Leandro",
			lastname: "Martinez",
			github: "https://github.com/Lean0mar",
			linkedin: "https://www.linkedin.com/in/lean0mar/",
			photo: "https://avatars.githubusercontent.com/u/122496170?v=4",
			role: "Desarrollador Full Stack",
		},
		{
			id: 3,
			name: "Xavier",
			lastname: "Montero",
			github: "https://github.com/Xavimont0409",
			linkedin: "https://www.linkedin.com/in/xavier-montero-b343b8231/",
			photo: "https://avatars.githubusercontent.com/u/122754733?v=4",
			role: "Desarrollador Full Stack",
		},
		{
			id: 4,
			name: "Augusto",
			lastname: "Viggiano",
			github: "https://github.com/AugusViggia",
			linkedin: "https://www.linkedin.com/in/augusto-viggiano-195134213/",
			photo: "https://media.licdn.com/dms/image/D4D35AQH8L5X2HcaMtQ/profile-framedphoto-shrink_400_400/0/1678809187643?e=1685944800&v=beta&t=tBNpPD96jHh_QxZDzrq5GV0WNtF8cHLSGHaqwczBsx4",
			role: "Desarrollador Full Stack",
		},
		{
			id: 5,
			name: "Juan",
			lastname: "Genovese",
			github: "https://github.com/JuanGenovese",
			linkedin: "https://www.linkedin.com/in/juancruzgenovese/",
			photo: "https://media.licdn.com/dms/image/C4D03AQGJ7V3D1HlPkA/profile-displayphoto-shrink_400_400/0/1661969833585?e=1691020800&v=beta&t=8wnGtiH7Bv2ELMODecgLK1MLQQIOAT0qCH1DFZNYnoU",
			role: "Desarrollador Full Stack",
		},
		{
			id: 6,
			name: "Andrés",
			lastname: "Rojas Pérez",
			github: "https://github.com/AndresFelipeRojasPerez",
			linkedin:
				"https://www.linkedin.com/in/andr%C3%A9s-felipe-rojas-p%C3%A9rez-500491262/",
			photo: "https://avatars.githubusercontent.com/u/109153596?v=4",
			role: "Desarrollador Full Stack",
		},
		{
			id: 7,
			name: "Victor",
			lastname: "Rua Montalvo",
			github: "https://github.com/henryrua079",
			linkedin: "https://www.linkedin.com/in/victor-rua/",
			photo: "https://avatars.githubusercontent.com/u/110183477?v=4",
			role: "Desarrollador Full Stack",
		},
		{
			id: 8,
			name: "Gaspar",
			lastname: "Almaraz",
			github: "https://github.com/GasparAlmaraz",
			linkedin: "https://www.linkedin.com/in/gaspar-almaraz-b12840209/",
			photo: "https://media.licdn.com/dms/image/C4D03AQEwnnjkwBWnqA/profile-displayphoto-shrink_400_400/0/1649357851670?e=1691020800&v=beta&t=F1FpHIvEHqeozL0eNfPz62eGHlO0tmJzJ6e22Cx7e2w",
			role: "Desarrollador Full Stack",
		},
	];

	return (
		<div className={style.containerPadre}>
			<h1 className={style.firstTitle}>
				Nuestro Equipo de desarrolladores
			</h1>
			<div className={`${style.container} ${style.containerGrid}`}>
				{arrayEquipo.map((integrante) => {
					return (
						<div
							className={`${style.memberCard} ${style.largeCard}`}
							key={integrante.id}
						>
							<div className={style.memberInfo}>
								<img
									className={style.memberPhoto}
									src={integrante.photo}
									alt={`${integrante.name} ${integrante.lastname}`}
								/>
								<div className={style.memberDetails}>
									<h4>
										{integrante.name} {integrante.lastname}
									</h4>
									<p>{integrante.role}</p>
									<p>
										<a
											href={integrante.linkedin}
											target='_blank'
											rel='noopener noreferrer'
										>
											<BsLinkedin
												className={style.Links}
											/>
										</a>
										<a
											href={integrante.github}
											target='_blank'
											rel='noopener noreferrer'
										>
											<BsGithub className={style.Links} />
										</a>
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}


export default CardsEquipo;