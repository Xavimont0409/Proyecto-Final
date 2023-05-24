import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanyDetail } from '../../Redux/Actions/actionsFunction/actionsCompanys';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import style from "./CardEmpresaDetail.module.css";
import { TfiEmail } from "react-icons/tfi";
import StarReview from '../StarsAndReview/starsAndReviews';
import styles from './CardEmpresaDetail.module.css';

const CardEmpresaDetail = ({ companyId }) => {
  const dispatch = useDispatch();
  const [showComments, setShowComments] = useState(false);
   const [showStarsAndUser, setShowStarsAndUser] = useState(false);
  const toggleComments = () => {
    setShowStarsAndUser(!showStarsAndUser);
    setShowComments(!showComments);
  };
  useEffect(() => {
    dispatch(getCompanyDetail(companyId));
  }, [dispatch, companyId]);

  const company = useSelector(state => state.CompanyDetail);

  return (
    <Card style={{ width: '100%' }}>
      <div>
        <Card.Img className={style.logo} variant="top" src="https://th.bing.com/th/id/R.a30e39eb5d4a9e55f49c052732ad4504?rik=LwN38PDNxREmFw&riu=http%3a%2f%2fwww.cleankontor.de%2fwp-content%2fuploads%2f2015%2f02%2fGebaeudeservice-Gebaeudereinigung-Hamburg-300x300.png&ehk=gtecgngKr%2fcTb6%2b2AN9BhhSqvB8pTESppbZbM0LMDIg%3d&risl=&pid=ImgRaw&r=0" />
      </div>
      <Card.Body>
        <Card.Title>{company?.business_name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Razón Social: {company?.name}</ListGroup.Item>
        <ListGroup.Item><TfiEmail className={style.icon} />{company?.email}</ListGroup.Item>
        <ListGroup.Item>País: {company?.country}</ListGroup.Item>
        <ListGroup.Item>CUIT: {company?.cuit}</ListGroup.Item>
        <ListGroup.Item>
        <button className={styles.commentButton} onClick={toggleComments}>
            {showComments ? 'Ocultar comentarios' : 'Mostrar comentarios'}
          </button>
          {showStarsAndUser && (
            <div>
              {company && <StarReview starsData={company?.Stars} showComments={showComments} companyId={companyId}/>}
            </div>
          )}
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default CardEmpresaDetail;
