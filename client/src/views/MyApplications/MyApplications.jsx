import style from './MyApplications.module.css';
import { getAllCompanys } from '../../Redux/Actions/actionsFunction/actionsCompanys';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import NavBar from '../../components/NavBar/NavBar'
import { getUserDetail } from '../../Redux/Actions/actionsFunction/actionsUsers';
import { deleteVacant, getAllVacants } from '../../Redux/Actions/actionsFunction/axtionsVacants';
import { BsFillTrashFill } from 'react-icons/bs'
import Swal from 'sweetalert2';

const MyApplications = ({ setValidateState, setCurrentUserStore2 }) => {
    const userType = JSON.parse(localStorage.getItem("currentUser2"));
    const userDetail = useSelector(state=> state.UserDetail);
    const empresas = useSelector(state => state.Company)
    const vacantes = useSelector(state => state.Vacant)
    const dispatch = useDispatch();
    const {confirm} = window;

  const handlerClick = (id, title) => {

    Swal.fire({
      title: "Consulta",
      text: `¿Esta seguro que desea cancelar su postulacion a la vacante ${title}?`,
      icon: 'question',
      showCancelButton: true,

      preConfirm: () => {
        return dispatch(deleteVacant(id))
          .then(response => {
            if (!response.ok) {
              throw new Error(response.statusText)
            }
            return response.name + " fue eliminada"
          })
          .catch(error => {
            Swal.showValidationMessage(
              `Request failed: ${error}`
            )
          })
      },
    })
  }


    useEffect(()=>{
        dispatch(getUserDetail(userType.id))
        dispatch(getAllCompanys())
        dispatch(getAllVacants())
    }, [dispatch, userType.id])


    return (
        <div className={style.container}>
            <div className={style.containerNav}>
                <NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />
            </div>

                  <h1 className={style.title}>Mis Postulaciones</h1>
    
    <Table className={style.table}>
      <thead className={style.tHead}>
        <tr>
          <th>Empresa</th>
          <th>Título</th>
          <th>Descripción</th>
          <th>Fecha de postulación</th>
          <th>Experiencia requerida</th>
          <th>Tipo de trabajo</th>
          <th>Jornada laboral</th>
          <th>Cancelar postulación</th>
        </tr>
      </thead>
      <tbody className={style.tBody}>
        {
           userDetail.Vacants?.map((elem) => 

             <tr key={elem.id}>
               <td>{empresas.filter(emp => emp.id === elem.CompanyId)[0]?.business_name}</td>
               <td>{elem.title}</td>
               <td>{elem.description}</td>
               <td>{elem.ApplicantVacant?.createdAt.slice(0, 10)}</td>
               <td>{vacantes.filter(vac => vac.id === elem.id)[0]?.Seniority?.name}</td>
               <td>{vacantes.filter(vac => vac.id === elem.id)[0]?.WorkMethod?.name}</td>
               <td>{vacantes.filter(vac => vac.id === elem.id)[0]?.Workday?.name}</td>
               <td style={{ textAlign: 'center', margin: 'auto' }} ><button onClick={() => handlerClick(elem.id, elem.title)} ><BsFillTrashFill /></button></td>
             </tr>
           ) 
        }
        
      </tbody>
    </Table>
        </div>

    )
} 

export default MyApplications;