import { useNavigate } from "react-router-dom";
import styles from "./Success.module.css";
import { FcApproval } from "react-icons/fc";

const Success = ({ currentUserStore }) => {
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
				<FcApproval/>
				</div>
				<h1 className={styles.title}>¡Éxito! Se ha logrado.</h1>
				<div className={styles.content}>
					<p>Gracias por actualizar tú plan</p>
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

export default Success;
