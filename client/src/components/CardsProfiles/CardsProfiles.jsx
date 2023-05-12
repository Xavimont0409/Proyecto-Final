import style from './CardsProfiles.module.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardProfile = ({id, image, name, profession, description, skills, dni, phone, email, seniority, linkedin}) => {
    return (
        <div className={style.mainContainer} >
        <div className={style.containerImgEmpresa}>
        <img className={style.img} variant="top" src={image}/>
        </div>
        <Card.Body >
          <Card.Title className={style.title}>{name}</Card.Title>
          <Card.Text className={style.text}>{profession}</Card.Text>
        </Card.Body>
        <ListGroup className={style.infoContainer}>
          <ListGroup.Item className={style.item}>{description} </ListGroup.Item>
          <ListGroup.Item className={style.item}>Skills: {skills?.map(skill => { return <div className={style.skills}>{skill}</div> })}</ListGroup.Item>
          <ListGroup.Item className={style.item}>DNI : {dni}</ListGroup.Item>
          <ListGroup.Item className={style.item}>Teléfono: {phone}</ListGroup.Item>
          <ListGroup.Item className={style.item}>Email: {email}</ListGroup.Item>
          <ListGroup.Item className={style.item}>Seniority: {seniority}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to={linkedin}>
          <BsLinkedin className={style.linkedin}/>
          </Link>
          </Card.Body>
      </div>
    )
};

export default CardProfile;
