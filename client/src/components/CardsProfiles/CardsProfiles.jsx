import style from './CardsProfiles.module.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";


const CardProfile = ({id, photo, name, lastName, profession, personal_description, skills, dni, phone, email, linkedin}) => {
    return (
        <div className={style.mainContainer} >
        <div className={style.containerImgEmpresa}>
        <img className={style.img} variant="top" src={photo}/>
        </div>
        <Card.Body >
          <Card.Title className={style.title}>{name} {lastName}</Card.Title>
          <Card.Text className={style.text}>{profession}</Card.Text>
        </Card.Body>
        <ListGroup className={style.infoContainer}>
          <ListGroup.Item className={style.item}>{personal_description} </ListGroup.Item>
          <ListGroup.Item className={style.item}>Skills: {skills}</ListGroup.Item>
          <ListGroup.Item className={style.item}>DNI : {dni}</ListGroup.Item>
          <ListGroup.Item className={style.item}>Teléfono: {phone}</ListGroup.Item>
          <ListGroup.Item className={style.item}>Email: {email}</ListGroup.Item>
        </ListGroup>
        <Card.Body >
          <Card.Title className={style.title2}>Experiencia</Card.Title>
          
          <ListGroup className={style.infoContainer2}>
          <ListGroup.Item className={style.item}>Cargo: Cocinero</ListGroup.Item>
          <ListGroup.Item className={style.item}>Seniority: junior</ListGroup.Item>
        </ListGroup>
        </Card.Body>

        <Card.Body>
          <Link to={linkedin}>
          <BsLinkedin className={style.linkedin}/>
          </Link>
          <Link to={`/detailProfile/${id}`}>
            <FcSearch className={style.lupa} /> 
            </Link>
          </Card.Body>
      </div>
    )
};

export default CardProfile;
