import Carousel from 'react-bootstrap/Carousel';
import { Col } from 'react-bootstrap';
import CardCarousel from '../CardCarousel/CardCarousel';
import style from "./CarouselLanding.module.css"
import SearchBar from '../SearchBar/SearchBar';
import CardCarouselAplicant from '../CardCarouselAplicant/CardCarouselAplicant';


function UncontrolledExample() {
  return (
    <Carousel
      data-bs-interval="1000"
      ride="carousel" >
      <Carousel.Item>
        <div className={style.container}>

          <img
            //   className="d-block w-100"
            src='https://www.bumeran.com.pe/company/static/media/aviso-gratis-desktop.fa0af790.svg'
            alt="slide1_company"
            style={{ height: "500px", width: "400px" }}
          />
          <CardCarousel tittle='Publica tu Vacante Ya!'
            text='Encuentra el talento que necesitas, publica hasta 3 avisos gratis al mes y atrae a los mejores candidatos para tu empresa'
            textButton='Publicar vacante' />

        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>




      <Carousel.Item>
        <div className={style.container}>
          <img
            src='https://www.teletrabajo.gov.co/814/articles-238320_foto_marquesina.png'
            alt="slide2_aplicant"
            style={{ height: "500px", width: "550px" }}
          />
         <CardCarouselAplicant tittle='Las mejores empresas buscan tu perfil'
         text='Mas de mil empresas de todos los sectores buscan profesionales, crea tu CV y aplica a vacantes facilmente'></CardCarouselAplicant>
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>




      
      <Carousel.Item>
        <div className={style.container}>
          <img
            //   className="d-block w-100"
            src='https://www.bumeran.com.pe/company/static/media/busqueda-en-base-desktop-tropicalized.61e5410a.svg'
            alt="slide3_company"
            style={{ height: "500px", width: "400px" }}
          />

          <CardCarousel tittle='Encuentra tu candidato ideal!'
            text='Encuentra el perfil que estas buscando, consultando y filtrando con nuestra Búsqueda en base. Recomendado para encontrar perfiles específicos o cubrir vacantes de forma rápida.'
            textButton='Ver candidatos' />

          <Carousel.Caption>
          </Carousel.Caption>

        </div>

      </Carousel.Item>



      <Carousel.Item>
        <div className={style.container}>
          <img
            src='https://imgbum.jobscdn.com/images/marketing/contratados-pa-pe-ec-desktop.webp'
            alt="slide4_aplicant"
            style={{ height: "500px", width: "500px" }}
          />
         <CardCarouselAplicant tittle='Busca empleos segun tus necesidades'
         text='Puedes buscar empleos y filtrar los que mejor se acomoden a tus necesidades'></CardCarouselAplicant>
        </div>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>


      


      <Carousel.Item>
        <div className={style.container}>
          <img
            //   className="d-block w-100"
            src='https://www.bumeran.com.pe/company/static/media/aviso-talento-desktop-tropicalized.b8ef6b32.svg'
            alt="Third slide"
            style={{ height: "500px", width: "400px" }}

          />

          <CardCarousel tittle='Aviso Talento!'
            text='Producto exclusivo para consultoras de RRHH.
          Publica gratis y paga solamente por los perfiles que más te interesen'
            textButton='Conoce mas' />


          <Carousel.Caption>

          </Carousel.Caption>
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default UncontrolledExample;