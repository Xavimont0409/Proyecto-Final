import Carousel from 'react-bootstrap/Carousel';
import CardCarousel from '../CardCarousel/CardCarousel';
import style from "./Carousel.module.css"
import empleo1 from "../../assets/img/empleo1.jpg"
import empleo2 from "../../assets/img/empleo2.jpg"
import empleo3 from "../../assets/img/empleo3.jpg"



function UncontrolledExample() {
  return (
    <Carousel data-bs-interval="1000"
    ride="carousel" >
      <Carousel.Item>
        <div className={style.container}>

          <img
            //   className="d-block w-100"
            src='https://www.bumeran.com.pe/company/static/media/aviso-gratis-desktop.fa0af790.svg'
            alt="First slide"
            style={{ height: "500px", width: "400px" }}
          />
          <CardCarousel tittle='Publica tu Vacante Ya!'
            text='Encuentra el talento que necesitas, publica hasta 3 avisos gratis al mes y atrae a los mejores candidatos para tu empresa'
            textButton='Publicar vacante' />

        </div>

        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}

      </Carousel.Item>
      <Carousel.Item>
        <div className={style.container}>
          <img
            //   className="d-block w-100"
            src='https://www.bumeran.com.pe/company/static/media/busqueda-en-base-desktop-tropicalized.61e5410a.svg'
            alt="Second slide"
            style={{ height: "500px", width: "400px" }}
          />

          <CardCarousel tittle='Encuentra tu candidato ideal!'
            text='Encuentra el perfil que estas buscando, consultando y filtrando con nuestra Búsqueda en base. Recomendado para encontrar perfiles específicos o cubrir vacantes de forma rápida.'
            textButton='Ver candidatos' />

          {/* <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption> */}

        </div>

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


        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;