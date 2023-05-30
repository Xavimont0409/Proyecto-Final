import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import style from "./CardEmpleoDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import { relationVacantApplicant } from "../../Redux/Actions/actionsFunction/axtionsVacants";
import { useEffect, useState } from "react";
import { getUserDetail } from "../../Redux/Actions/actionsFunction/actionsUsers";
import { getCompanyDetail } from "../../Redux/Actions/actionsFunction/actionsCompanys";

const CardEmpleoDetail = ({ id, CompanyId, title, description, createdAt, Workday, WorkMethod, Seniority }) => {
  const dispatch = useDispatch();
  const currentUserId = JSON.parse(localStorage.getItem("currentUser2")).id;
  const userVacants = useSelector((state) => state.UserDetail.Vacants);
  const vacantPostuled = userVacants?.find((vacant) => vacant.id === id);
  const [validate, setValidate] = useState(false);
  const company = useSelector((state) => state.CompanyDetail);

  const relationIds = {
    VacantId: id,
    ApplicantId: currentUserId,
  };

  useEffect(() => {
    dispatch(getUserDetail(currentUserId));
    dispatch(getCompanyDetail(CompanyId));
  }, [currentUserId, dispatch]);

  useEffect(() => {
    if (vacantPostuled) setValidate(true);
  }, [vacantPostuled, validate]);

  const handlerClick = () => {
    dispatch(relationVacantApplicant(relationIds));
    setValidate(true);
  };

  return (
    <Card className={style.mainContainer} style={{ width: "100%" }}>
      <div>
        <Card.Img className={style.logo} variant="top" src={company.photo} />
      </div>
      <Card.Body className={style.containerTitle}>
        <Card.Title>{title}</Card.Title>
        <pre style={{ whiteSpace: "pre-wrap" , height: "50vh"}}>{description}</pre>
      </Card.Body>
      <ListGroup className={style.container2}>
        <ListGroup.Item>Jornada: {Workday}</ListGroup.Item>
        <ListGroup.Item>Modalidad: {WorkMethod}</ListGroup.Item>
        <ListGroup.Item>Seniority: {Seniority}</ListGroup.Item>
      </ListGroup>

      <Card.Body>
        <Button
          onClick={handlerClick}
          className={style.btn}
          variant="outline-success"
          disabled={validate}
        >
          {validate ? "YA POSTULADO" : "POSTULARME"}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default CardEmpleoDetail;
