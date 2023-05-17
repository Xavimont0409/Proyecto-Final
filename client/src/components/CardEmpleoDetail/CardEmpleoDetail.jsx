import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import style from "./CardEmpleoDetail.module.css";



const CardEmpleoDetail = ({id, idEmpresa, logo, title, description, createdAt, updatedAt, JourneyId, SeniorityId, WorkMethodId}) => {
  
  return (
    <Card style={{ width: '100%' }}>
      <div>
      <Card.Img className={style.logo} variant="top" src={logo}/>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Jornada: {JourneyId}</ListGroup.Item>
        <ListGroup.Item>Modalidad: {WorkMethodId}</ListGroup.Item>
        <ListGroup.Item>Seniority: {SeniorityId}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <Button className={style.btn} variant="outline-success">POSTULARME</Button>{' '}
      </Card.Body>
    </Card>
  );
}

export default CardEmpleoDetail;