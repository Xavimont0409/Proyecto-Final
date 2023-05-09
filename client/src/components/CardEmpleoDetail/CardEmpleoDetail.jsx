import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const CardEmpleoDetail = () => {
  return (
    <Card style={{ width: '100%' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
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
        <Card.Link href="#">POSTULARME</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardEmpleoDetail;