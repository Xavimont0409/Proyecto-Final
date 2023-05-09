import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import style from "./CardEmpleoDetail.module.css";

const CardEmpleoDetail = () => {
  return (
    <Card style={{ width: '100%' }}>
      <div className={style.containerImgEmpresa}>
      <Card.Img variant="top" src="https://2.bp.blogspot.com/-8nygkHc09a4/XELAYyOEjZI/AAAAAAAAGLg/kiGoQYw5Xtccv4PPFZA_9SXANdV4CaxFACLcBGAs/s1600/globant_logo.jpg"/>
      </div>
      <Card.Body>
        <Card.Title>NOMBRE DE LA PUBLICACIÓN</Card.Title>
        <Card.Text>
          Descripción
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Jornada laboral</ListGroup.Item>
        <ListGroup.Item>Salario</ListGroup.Item>
        <ListGroup.Item>Modalidad: presencial o remoto</ListGroup.Item>
        <ListGroup.Item>Experiencia</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button className={style.btn} variant="outline-success">POSTULARME</Button>{' '}
      </Card.Body>
    </Card>
  );
}

export default CardEmpleoDetail;