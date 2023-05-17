import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import style from "./CardEmpresaDetail.module.css";
import {TbWorldWww} from "react-icons/tb";
import {TfiEmail} from "react-icons/tfi";
import {BsFillTelephoneFill} from "react-icons/bs";



const CardEmpresaDetail = ({id, logo, name, business_name, cuit, country, city, headOffice, phone, email, website, worksector, about}) => {
  return (
    <Card style={{ width: '100%' }}>
      <div>
      <Card.Img className={style.logo} variant="top" src={logo}/>
      </div>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{about}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
        <TbWorldWww className={style.icon}/>
        <Card.Link href={website}>{website}</Card.Link>
        </ListGroup.Item>
        <ListGroup.Item> <TfiEmail className={style.icon}/>{email}</ListGroup.Item>
        <ListGroup.Item> <BsFillTelephoneFill className={style.icon}/> {phone}</ListGroup.Item>
        <ListGroup.Item>Sector de trabajo: {worksector}</ListGroup.Item>
        <ListGroup.Item>País: {country}</ListGroup.Item>
        <ListGroup.Item>Ciudad: {city} </ListGroup.Item>
        <ListGroup.Item>Oficina Central: {headOffice}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardEmpresaDetail;