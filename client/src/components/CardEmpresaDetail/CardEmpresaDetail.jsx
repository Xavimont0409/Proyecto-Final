import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import style from "./CardEmpresaDetail.module.css";
import {TbWorldWww} from "react-icons/tb";
import {TfiEmail} from "react-icons/tfi";
import {BsFillTelephoneFill} from "react-icons/bs";
import { useEffect } from 'react';
import { getCompanyDetail } from '../../Redux/Actions/actionsFunction/actionsCompanys';
import { useDispatch, useSelector } from 'react-redux';



const CardEmpresaDetail = ({companyId}) => {

const dispatch = useDispatch();

useEffect(()=>{
  dispatch(getCompanyDetail(companyId));
  
},[dispatch, getCompanyDetail])

  
  const company = useSelector(state => state.CompanyDetail[0]); 
  console.log(companyId);
  console.log(company);

  return (
  
    <Card style={{ width: '100%' }}>
      <div>
      <Card.Img className={style.logo} variant="top" src="https://th.bing.com/th/id/R.a30e39eb5d4a9e55f49c052732ad4504?rik=LwN38PDNxREmFw&riu=http%3a%2f%2fwww.cleankontor.de%2fwp-content%2fuploads%2f2015%2f02%2fGebaeudeservice-Gebaeudereinigung-Hamburg-300x300.png&ehk=gtecgngKr%2fcTb6%2b2AN9BhhSqvB8pTESppbZbM0LMDIg%3d&risl=&pid=ImgRaw&r=0"/>
      </div>
      <Card.Body>
        <Card.Title>{company?.name}</Card.Title>
        {/* <Card.Text>{about}</Card.Text> */}
      </Card.Body>
      <ListGroup className="list-group-flush">
        {/* <ListGroup.Item>
        <TbWorldWww className={style.icon}/>
        <Card.Link href={website}>{website}</Card.Link>
        </ListGroup.Item> */}
        <ListGroup.Item> <TfiEmail className={style.icon}/>{company?.email}</ListGroup.Item>
        {/* <ListGroup.Item> <BsFillTelephoneFill className={style.icon}/> {phone}</ListGroup.Item> */}
        {/* <ListGroup.Item>Sector de trabajo: {worksector}</ListGroup.Item> */}
        <ListGroup.Item>País: {company?.country}</ListGroup.Item>
        {/* <ListGroup.Item>Ciudad: {city} </ListGroup.Item> */}
        <ListGroup.Item>CUIT: {company?.cuit}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default CardEmpresaDetail;