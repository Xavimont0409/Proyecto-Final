import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import style from "./CardEmpresaDetail.module.css";

const CardEmpresaDetail = () => {
  return (
    <Card style={{ width: '100%' }}>
      <div className={style.containerImgEmpresa}>
      <Card.Img variant="top" src="https://2.bp.blogspot.com/-8nygkHc09a4/XELAYyOEjZI/AAAAAAAAGLg/kiGoQYw5Xtccv4PPFZA_9SXANdV4CaxFACLcBGAs/s1600/globant_logo.jpg"/>
      </div>
      <Card.Body>
        <Card.Title>NOMBRE DE LA EMPRESA</Card.Title>
        <Card.Text>
          Resumen de la empresa
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
        <Card.Link href="#">Sitio web de la empresa</Card.Link>
        </ListGroup.Item>
        <ListGroup.Item>Correo de la empresa</ListGroup.Item>
        <ListGroup.Item>Sector de trabajo</ListGroup.Item>
        <ListGroup.Item>Tamaño</ListGroup.Item>
        <ListGroup.Item>Sede principal</ListGroup.Item>
        <ListGroup.Item>Fundación</ListGroup.Item>
        <ListGroup.Item>Ubicación</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardEmpresaDetail;