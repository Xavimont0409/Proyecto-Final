import style from './CardsProfilesCompany.module.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GiWorld } from "react-icons/gi";


const CardProfileCompany = ({ id, logo, business_name, description, job_area, name, country, cuit, email, photo, web }) => {
   


  return (
        <div className={style.mainContainer} >
        <div className={style.containerImgEmpresa}>
        <img className={style.img} variant="top" src={photo}/>
        </div>
        <Card.Body >
          <Card.Title className={style.title}>{business_name}</Card.Title>
          <Card.Text className={style.text}>{description}</Card.Text>
        </Card.Body>
        <ListGroup className={style.infoContainer}>
        <ListGroup.Item className={style.item}>Sector de trabajo: Tecnológico </ListGroup.Item>
          <ListGroup.Item className={style.item}>Sector de trabajo: {job_area} </ListGroup.Item>
          <ListGroup.Item className={style.item}>País: {country}</ListGroup.Item>
          <ListGroup.Item className={style.item}>CUIT : {cuit}</ListGroup.Item>
          <ListGroup.Item className={style.item}>Reclutador: {name}</ListGroup.Item>
        </ListGroup>
        <Card.Body className={style.containerWeb}>
          <ListGroup.Item className={style.item}>Sitio Web:</ListGroup.Item>
          <Link to={web}>
          <GiWorld className={style.linkedin}/>
          </Link>
          </Card.Body>
      </div>
    )
};

export default CardProfileCompany;

