import Carousel from 'react-bootstrap/Carousel';
import CardCarousel from '../CardCarousel/CardCarousel';
import style from "./Carousel.module.css";

function UncontrolledExample() {
  return (
    <Carousel
      data-bs-interval="1000"
      ride="carousel" >
      <Carousel.Item>
        <div className={style.container}>

          <img
            className={style.image}
            src='https://www.bumeran.com.pe/company/static/media/aviso-gratis-desktop.fa0af790.svg'
            alt="First slide"
          />
          <CardCarousel tittle='Publica tu Vacante Ya!'
            text='Encuentra el talento que necesitas, publica hasta 3 avisos gratis al mes y atrae a los mejores candidatos para tu empresa'
            textButton='Publicar vacante'
            route='/registro-vacante' />
        </div>

        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className={style.container}>
          <img
            className={style.image}
            src='https://www.bumeran.com.pe/company/static/media/busqueda-en-base-desktop-tropicalized.61e5410a.svg'
            alt="Second slide"
          />
          <CardCarousel tittle='Encuentra tu candidato ideal!'
            text='Encuentra el perfil que estas buscando, consultando y filtrando con nuestra Búsqueda en base. Recomendado para encontrar perfiles específicos o cubrir vacantes de forma rápida.'
            textButton='Ver candidatos' 
            route='/profiles'/>

          <Carousel.Caption>
          </Carousel.Caption>
        </div>
      </Carousel.Item>
      
      <Carousel.Item>
        <div className={style.container}>
          <img
            className={style.image}
            src='https://www.bumeran.com.pe/company/static/media/aviso-talento-desktop-tropicalized.b8ef6b32.svg'
            alt="Third slide"
          />

          <CardCarousel tittle='Aviso Empresas!'
            text='Encuentra empresas que pueden interesarte en nuestra base de datos, revisa sus datos mas relevantes y posiblemente puedas hacer acuerdos comerciales'
            textButton='Conoce otras empresas' 
            route='/profiles-company'/>
          <Carousel.Caption>

          </Carousel.Caption>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default UncontrolledExample;