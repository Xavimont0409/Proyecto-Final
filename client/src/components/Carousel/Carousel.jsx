import Carousel from 'react-bootstrap/Carousel';
import empleo1 from "../../assets/img/empleo1.jpg"
import empleo2 from "../../assets/img/empleo2.jpg"
import empleo3 from "../../assets/img/empleo3.jpg"



function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
        //   className="d-block w-100"
          src={empleo1}
          alt="First slide"
          style={{height: "400px", width: "300px"}}

        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        //   className="d-block w-100"
          src={empleo2}
          alt="Second slide"
          style={{height: "400px", width: "300px"}}
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        //   className="d-block w-100"
          src={empleo3}
          alt="Third slide"
          style={{height: "400px", width: "350px"}}

        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;