import style from "./LandignEmpresa.module.css";
import UncontrolledExample from "../../components/Carousel/Carousel";
import NavBar from '../../components/NavBar/NavBar';
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
                tittle='Plan Básico'
                text ='Publica vacantes semanales con un límite de tiempo'
                price = '30'
                id = '1'/>
                <CardPlan tittle='Plan Destacado'
                text ='Publica más vacante por semana con duración mayor'
                price = '50'
                id = '2'/>
                <CardPlan tittle='Plan Premium'
                text ='Publica vacantes ilimitadas y sin fecha límite'
                price = '90'
                id = '3'/>

            </div>

            <div className={style.containerPerfiles}>
                <h2 className={style.subtitle}>Estos Perfiles te pueden interesar</h2>
                <CarouselPerfiles/>
            </div>

        </div>
    )
}


export default LandingEmpresa;