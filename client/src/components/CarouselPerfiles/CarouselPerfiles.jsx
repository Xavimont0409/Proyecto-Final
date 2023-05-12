import Carousel from 'react-bootstrap/Carousel';
import CardCarousel from '../CardCarousel/CardCarousel';
import style from "./CarouselPerfiles.module.css";
import { Link } from 'react-router-dom';


function CarouselPerfiles() {
  return (
    <Carousel
      data-bs-interval="1000"
      ride="carousel" 
      className={style.container}
      >
      <Carousel.Item>
        <div className={style.containerCarousel}>
          <img
            className={style.img}
            src='https://www.bumeran.com.pe/company/static/media/aviso-gratis-desktop.fa0af790.svg'
            alt="First slide"
          />
        </div>

      </Carousel.Item>
      <Carousel.Item>
        <div className={style.containerCarousel}>
          <img
            className={style.img}
            src='https://www.bumeran.com.pe/company/static/media/busqueda-en-base-desktop-tropicalized.61e5410a.svg'
            alt="Second slide"
          />
      
        </div>
      </Carousel.Item>
      
      <Carousel.Item>
        <div className={style.containerCarousel}>
          <img
            className={style.img}
            src='https://www.bumeran.com.pe/company/static/media/aviso-talento-desktop-tropicalized.b8ef6b32.svg'
            alt="Third slide"
          />
        </div>
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselPerfiles;