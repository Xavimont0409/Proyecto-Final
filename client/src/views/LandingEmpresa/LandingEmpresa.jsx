import style from "./LandignEmpresa.module.css"
import UncontrolledExample from "../../components/Carousel/Carousel"
import NavBar from "../../components/NavBar/NavBarUnlog";
import CardPlan from "../../components/CardPlan/CardPlan";

const LandingEmpresa = () => {
    return (
        <div className={style.container}>
            <div>

                <NavBar></NavBar>
                <UncontrolledExample></UncontrolledExample>
            </div>

            <div className={style.planes}>
                <CardPlan tittle='Plan Basico'
                text ='Publica 1 vacante por semana con duracion de una semana'
                price = '3'/>
                <CardPlan tittle='Plan Intermedio'
                text ='Publica 3 vacante por semana con duración de 2 semanas'
                price = '7'/>
                <CardPlan tittle='Plan Premium'
                text ='Publica vacantes ilimitadas y no vencen'
                price = '10'/>

            </div>

        </div>
    )
}


export default LandingEmpresa;