import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import style from "./CardEmpleoDetail.module.css";



const CardEmpleoDetail = ({id, CompanyId, title, description, createdAt, Workday, WorkMethod}) => {
  
  return (
    <Card style={{ width: '100%' }}>
      <div>
      <Card.Img className={style.logo} variant="top" src="https://2.bp.blogspot.com/-8nygkHc09a4/XELAYyOEjZI/AAAAAAAAGLg/kiGoQYw5Xtccv4PPFZA_9SXANdV4CaxFACLcBGAs/s1600/globant_logo.jpg"/>
      </div>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Jornada: {Workday}</ListGroup.Item>
        <ListGroup.Item>Modalidad: {WorkMethod}</ListGroup.Item>
        {/* <ListGroup.Item>Seniority: {SeniorityId}</ListGroup.Item> */}
      </ListGroup>
      <Card.Body>
      <Button className={style.btn} variant="outline-success">POSTULARME</Button>{' '}
      </Card.Body>
    </Card>
  );
}

export default CardEmpleoDetail;