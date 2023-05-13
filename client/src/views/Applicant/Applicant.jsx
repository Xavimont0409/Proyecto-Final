import NavBar from '../../components/NavBar/NavBar';
import React from 'react';
import styles from "./Applicant.module.css"
import { Carousel, Card, Button } from 'react-bootstrap';
import img1 from "../../assets/img/empleo1.jpg"
import img2 from "../../assets/img/empleo2.jpg"
import img3 from "../../assets/img/empleo3.jpg"
import Footer from "../../components/Footer/Footer"

export default function Applicant() {
  return (
    <>
      <NavBar />
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
            <p>Click to view details</p>
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
            <p>Click to view details</p>
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
            <p>Click to view details</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

        <Button variant="secondary" className="mt-3">
          Ver más
        </Button>

      <div className={styles.SuggestedJob}>
        <h4>Suggested Job Vacancies</h4>
        <div className={styles.Vacancies}>
          <Card className={styles.job}>
            <Card.Body>
              <Card.Title>Job 1</Card.Title>
              <Card.Text>Job description 1</Card.Text>
              <Button variant="primary">Conoce mas</Button>
            </Card.Body>
          </Card>

          <Card className={styles.job}>
            <Card.Body>
              <Card.Title>Job 2</Card.Title>
              <Card.Text>Job description 2</Card.Text>
              <Button variant="primary">Conoce mas</Button>
            </Card.Body>
          </Card>

          <Card className={styles.job}>
            <Card.Body>
              <Card.Title>Job 3</Card.Title>
              <Card.Text>Job description 2</Card.Text>
              <Button variant="primary">Conoce mas</Button>
            </Card.Body>
          </Card>

            <Card className={styles.job}>
          <Card.Body>
              <Card.Title>Job 4</Card.Title>
              <Card.Text>Job description 2</Card.Text>
              <Button variant="primary">Conoce mas</Button>
            </Card.Body>
          </Card>

        <Card className={styles.job}>
            <Card.Body>
              <Card.Title>Job 5</Card.Title>
              <Card.Text>Job description 2</Card.Text>
              <Button variant="primary">Conoce mas</Button>
            </Card.Body>
          </Card>

        <Card className={styles.job}>
            <Card.Body>
              <Card.Title>Job 6</Card.Title>
              <Card.Text>Job description 2</Card.Text>
              <Button variant="primary">Conoce mas</Button>
            </Card.Body>
          </Card>

          {/* Add more job cards here */}
        </div>

        

        <Button variant="secondary" className="mt-3">
          Todas las vacantes
        </Button>
      </div>
      <Footer/>
    </>
  );
}
