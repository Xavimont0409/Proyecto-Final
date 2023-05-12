import style from './CardsProfilesCompany.module.css';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { BsLinkedin } from "react-icons/bs";
import { Link } from "react-router-dom";

const CardProfileCompany = ({ /*image,*/ business_name, country, email }) => {
    return (
        <div className={style.mainContainer} >
            {/* <div className={style.containerImgEmpresa}>
                <img className={style.img} variant="top" src={image} />
            </div> */}
            <Card.Body >
                <Card.Title className={style.title}>{business_name}</Card.Title>
            </Card.Body>
            <ListGroup className={style.infoContainer}>
                <ListGroup.Item className={style.item}>{country} </ListGroup.Item>
                <ListGroup.Item className={style.item}>{email} </ListGroup.Item>
            </ListGroup>
            {/* <Card.Body>
                <Link to={linkedin}>
                    <BsLinkedin className={style.linkedin} />
                </Link>
            </Card.Body> */}
        </div>
    )
};

export default CardProfileCompany;