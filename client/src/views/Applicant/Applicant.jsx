import NavBar from '../../components/NavBar/NavBar';
import React from 'react';
import styles from "./Applicant.module.css";
import { Carousel, Card, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import img1 from "../../assets/img/empleo1.jpg";
import img2 from "../../assets/img/empleo2.jpg";
import img3 from "../../assets/img/empleo3.jpg";
import CardPlan from "../../components/CardPlan/CardPlan";

export default function Applicant() {
  return (
    <>
    
      <NavBar />

      <div className={styles.container}>

      <Carousel>
        {/* Slide 1 */}
        <Carousel.Item>
          <img
            className={styles.slide}
            src={img1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Acme Technologies</h3>
            <p>Click para más detalle</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Slide 2 */}
        <Carousel.Item>
          <img
            className={styles.slide}
            src={img2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Green Energy Solutions</h3>
            <p>Click para más detalle</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* Slide 3 */}
        <Carousel.Item>
          <img
            className={styles.slide}
            src={img3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Stellar Consulting</h3>
            <p>Click para más detalle</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      
        <Button variant="secondary" className="mt-3">
          <Link to="/empleos" style={{ color: "white", textDecoration: "none" }}>
            Ver más
          </Link>
        </Button>

      <div className={styles.SuggestedJob}>
        <h4>Sugerencias de vacantes</h4>
        <div className={styles.Vacancies}>
          <Card className={styles.job}>
            <Card.Body>
              <Card.Title>Desarrollador de software</Card.Title>
              <Card.Text>Responsable de diseñar, desarrollar y mantener soluciones de software innovadoras para impulsar la transformación digital de los clientes.</Card.Text>
              <Button variant="primary">Conoce mas</Button>
            </Card.Body>
          </Card>

          <Card className={styles.job}>
            <Card.Body>
              <Card.Title>Gerente de proyectos</Card.Title>
              <Card.Text>Responsable de planificar, ejecutar y supervisar proyectos para garantizar su éxito y cumplimiento de los objetivos establecidos.</Card.Text>
              <Button variant="primary">Conoce mas</Button>
            </Card.Body>
          </Card>

          <Card className={styles.job}>
            <Card.Body>
              <Card.Title>Técnico de instalaciones solares</Card.Title>
              <Card.Text>Encargado de instalar y mantener sistemas de energía solar en residencias o empresas.</Card.Text>
              <Button variant="primary">Conoce mas</Button>
            </Card.Body>
          </Card>

            <Card className={styles.job}>
          <Card.Body>
              <Card.Title>Analista de impacto ambiental</Card.Title>
              <Card.Text>Responsable de evaluar el impacto ambiental de proyectos y proponer medidas para minimizar su huella ambiental.</Card.Text>
              <Button variant="primary">Conoce mas</Button>
            </Card.Body>
          </Card>

        <Card className={styles.job}>
            <Card.Body>
              <Card.Title>Consultor estratégico</Card.Title>
              <Card.Text>Encargado de brindar asesoramiento estratégico a las empresas clientes para mejorar su rendimiento y alcanzar sus objetivos de negocio.</Card.Text>
              <Button variant="primary">Conoce mas</Button>
            </Card.Body>
          </Card>

        <Card className={styles.job}>
            <Card.Body>
              <Card.Title>Analista de datos</Card.Title>
              <Card.Text>Responsable de recopilar, analizar y presentar datos relevantes para ayudar en la toma de decisiones informadas.</Card.Text>
              <Button variant="primary">Conoce mas</Button>
            </Card.Body>
          </Card>

          {/* Add more job cards here */}
        </div>
        <div className={styles.containerCardPlan}>
          <CardPlan 
                        tittle='Plan Super Destacado'
                        text ='Aumenta la visibilidad de tu perfil profesional y recibe aviso de nuevas propuestas '
                        price = '5'
                        id = '4'/ >
        </div>
       
        <Button variant="secondary" className="mt-3">
          <Link to="/empleos" style={{ color: "white", textDecoration: "none" }}>
            Todas las vacantes
          </Link>
        </Button>
        <br />
        <br />

      </div>
      </div>
    </>
  );
}
