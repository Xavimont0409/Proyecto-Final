import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MiniCardEmpleosRel({id, title, SeniorityId}) {
  
  return (
    <Card className="text-center">
      <Card.Header>Vacante sugerida</Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Seniority: {SeniorityId}
        </Card.Text>
        <Card.Text>
         Salario: Salario
        </Card.Text>
        <Button variant="outline-success">POSTULARME</Button>{' '}
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default MiniCardEmpleosRel;