import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MiniCardEmpleosRel() {
  return (
    <Card className="text-center">
      <Card.Header>Vacante sugerida</Card.Header>
      <Card.Body>
        <Card.Title>Nombre de la publicación</Card.Title>
        <Card.Text>
          Experiencia
        </Card.Text>
        <Card.Text>
          Salario
        </Card.Text>
        <Button variant="outline-success">POSTULARME</Button>{' '}
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
  );
}

export default MiniCardEmpleosRel;