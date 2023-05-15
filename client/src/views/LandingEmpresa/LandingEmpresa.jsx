import style from "./LandignEmpresa.module.css";
import UncontrolledExample from "../../components/Carousel/Carousel";
import NavBar from '../../components/NavBar/NavBarLog';
import CardPlan from "../../components/CardPlan/CardPlan";
import CarouselPerfiles from "../../components/CarouselPerfiles/CarouselPerfiles";

const LandingEmpresa = () => {
    return (
        <div className={style.container}>
          
           <div className={style.containerComponents}> 
                <NavBar></NavBar>
                <UncontrolledExample/>
            </div>

            <div className={style.planes}>
                <CardPlan 
                tittle='Plan Basico'
                text ='Publica 1 vacante por semana con duracion de una semana'
                price = '3'/>
                <CardPlan tittle='Plan Intermedio'
                text ='Publica 3 vacante por semana con duración de 2 semanas'
                price = '7'/>
                <CardPlan tittle='Plan Premium'
                text ='Publica vacantes ilimitadas y no vencen'
                price = '10'/>

            </div>

            <div className={style.containerPerfiles}>
                <h2 className={style.subtitle}>Estos Perfiles te pueden interesar</h2>
                <CarouselPerfiles/>
            </div>

        </div>
    )
}


export default LandingEmpresa;