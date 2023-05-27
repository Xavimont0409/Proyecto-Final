import style from "./Vacantes.module.css";
import { getCompanyDetail } from "../../Redux/Actions/actionsFunction/actionsCompanys";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "react-bootstrap/Table";
import NavBar from "../../components/NavBar/NavBar";

const Vacantes = () => {
  const userType = JSON.parse(localStorage.getItem("currentUser2"));
  const companyDetail = useSelector((state) => state.CompanyDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCompanyDetail(userType.id));
  }, []);
  return (
    <div className={style.container}>
      <div className={style.containerNav}>
        <NavBar />
      </div>

      <h1 className={style.title}>Mis Vacantes</h1>

      <Table className={style.table}>
        <thead className={style.tHead}>
          <tr>
            <th>Id</th>
            <th>Título</th>
            <th>Descripción</th>
            <th>Fecha de creación</th>
            <th>Experiencia</th>
            <th>Tipo de trabajo</th>
            <th>Jornada Laboral</th>
          </tr>
        </thead>
        <tbody className={style.tBody}>
          {companyDetail.Vacants?.map((elem) => (
            <tr key={elem.id}>
              <td>{elem.id}</td>
              <td>{elem.title}</td>
              <td>{elem.description}</td>
              <td>{elem.createdAt.slice(0, 10)}</td>
              <td>{elem.Seniority?.name}</td>
              <td>{elem.WorkMethod?.name}</td>
              <td>{elem.Workday?.name}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default Vacantes;
