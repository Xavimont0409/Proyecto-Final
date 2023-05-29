import { useNavigate } from "react-router-dom";
import styles from "../Success/Success.module.css";
import { FcHighPriority } from "react-icons/fc";

const Failure = ({ currentUserStore }) => {
	const navigate = useNavigate();
	const currentDate = new Date().toLocaleDateString();
	const userType2 = JSON.parse(localStorage.getItem("currentUser2"))


	const handleReturnHome = () => {
		if (userType2.profile === "Applicant") {
			navigate("/applicant");
		} else if (userType2.profile === "Company") {
			navigate("/empresa");
		} else {
			navigate("/");
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.ticket}>
				<div className={styles.icon}>
				<FcHighPriority/>
				</div>
				<h1 className={styles.title}>¡Algo Falló!</h1>
				<div className={styles.content}>
					<p>Ocurrió un problema, intentar de nuevo</p>
					<p>Fecha: {currentDate}</p>
				</div>

				<br />
				<div className={styles.actions}>
					<button
						className={styles.homeButton}
						onClick={handleReturnHome}
					>
						Volver a la página de inicio
					</button>
				</div>
			</div>
		</div>
	);
};

export default Failure;
