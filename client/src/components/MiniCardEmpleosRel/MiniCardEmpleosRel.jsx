import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import style from "./MiniCardEmpleosRel.module.css";

function MiniCardEmpleosRel({id, title, SeniorityId, WorkMethodId}) {
  
const navigation = useNavigate();

  return (
    <Card className="text-center">
      <Card.Header>Vacante sugerida</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Seniority: {SeniorityId}
        </Card.Text>
        <Card.Text>
         Método: {WorkMethodId}
        </Card.Text>
        <Button className={style.btn} onClick={()=> navigation(`/empleoDetail/${id}`)} variant="outline-success">VER DETALLE</Button>{' '}
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default MiniCardEmpleosRel;
