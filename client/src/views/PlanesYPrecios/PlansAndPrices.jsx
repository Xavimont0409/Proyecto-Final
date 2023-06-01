import { NavBar } from "../../components";
import CardPlan from "../../components/CardPlan/CardPlan";
import style from "./PlansAndPrices.module.css";

const PlansAndPrices = ({setCurrentUserStore2, setValidateState}) => {

    const userType2 = JSON.parse(localStorage.getItem("currentUser2"));

    return (
        <div className={style.container}>
            <NavBar setCurrentUserStore2={setCurrentUserStore2} setValidateState={setValidateState}/>
            <div className={style.titlePlan}>
                <h2 className={style.title}>¡Planes y Precios!</h2>
            </div>
            <div className={style.contenedor}>
                {userType2.profile === "Company" && (
                    <div className={style.prueba}>
                        <div className={style.rightSection}>
                            <h2>Plan Básico</h2>
                        </div>
                        <div className={style.planes}>
                            <CardPlan
                                tittle="Plan Básico"
                                text="Publica vacantes semanales con un límite de tiempo"
                                price="30"
                                id="1"
                            />
                        </div>
                    </div>
                )}
                    
                {userType2.profile === "Company" && (
                    <div className={style.prueba}>
                        <div className={style.rightSection}>
                            <h2>Plan Destacado</h2>
                        </div>
                        <div className={style.planes}>
                            <CardPlan
                                tittle="Plan Destacado"
                                text="Publica más vacante por semana con duración mayor"
                                price="50"
                                id="2"
                            />
                        </div>
                    </div>
                )}

                {userType2.profile === "Company" && (
                    <div className={style.prueba}>
                        <div className={style.rightSection}>
                            <h2>Plan Premium</h2>
                        </div>
                        <div className={style.planes}>
                            <CardPlan
                                tittle="Plan Premium"
                                text="Publica vacantes ilimitadas y sin fecha límite"
                                price="90"
                                id="3"
                            />
                        </div>
                    </div>
                )}

                {userType2.profile === "Applicant" && (<div className={style.prueba}>
                    <div className={style.rightSection}>
                        <h1>Plan Super Destacado</h1>
                    </div>
                        <div className={style.planes}>
                            <CardPlan
                                tittle='Plan Super Destacado'
                                text='Aumenta la visibilidad de tu perfil profesional y recibe aviso de nuevas propuestas '
                                price='5'
                                id='4'
                            />
                    </div>
                </div>)}
            </div>
        </div>
    )
};

export default PlansAndPrices;