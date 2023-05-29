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
    <Card className={style.mainContainer} style={{ width: '100%' }}>
      <div>
        <Card.Img className={style.logo} variant="top" src={company?.photo} />
      </div>
      <Card.Body>
        <Card.Title>{company?.business_name}</Card.Title>
      </Card.Body>
      <ListGroup className={style.container2}>
        <ListGroup.Item>Razón Social: {company?.name}</ListGroup.Item>
        <ListGroup.Item><TfiEmail className={style.icon} />{company?.email}</ListGroup.Item>
        <ListGroup.Item>País: {company?.country}</ListGroup.Item>
        <ListGroup.Item>CUIT: {company?.cuit}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
      <button className={styles.commentButton} onClick={toggleComments}>
            {showComments ? 'Ocultar comentarios' : 'Mostrar comentarios'}
          </button>
          {showStarsAndUser && (
            <div>
              {company && <StarReview starsData={company?.Stars} showComments={showComments} companyId={companyId}/>}
            </div>
          )}
      </Card.Body>
    </Card>
  );
};

export default CardEmpresaDetail;
