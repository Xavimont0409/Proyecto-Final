import style from "./EmpleoDetail.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardEmpleoDetail from "../../components/CardEmpleoDetail/CardEmpleoDetail";
import NavBar from "../../components/NavBar/NavBar";
import CardEmpresaDetail from "../../components/CardEmpresaDetail/CardEmpresaDetail";
import MiniCardEmpleosRel from "../../components/MiniCardEmpleosRel/MiniCardEmpleosRel";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import Loading from "../../components/Loading/Loading";
import { getVacantDetail } from "../../Redux/Actions/actionsFunction/axtionsVacants";


const EmpleoDetail = ({ setValidateState, setCurrentUserStore2 }) => {


  const {detailId} = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const empleoSelected = useSelector(state => state.VacantDetail);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVacantDetail(detailId));
        
  }, [dispatch, detailId]);
      
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);
    

  if (isLoading) {
    return <Loading/>;
  };
  
  const companyId = empleoSelected.CompanyId;


  return(
        <div className={style.mainContainer}>
          <NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />
        <div className={style.mainContainer2}>
          <div className={style.containerEmpleosRel}>
            <MiniCardEmpleosRel idEmpleoSelected={empleoSelected.id} title={empleoSelected.title}/>   
          </div>
          <div className={style.mainContainer3}>
          <Tabs
          defaultActiveKey="DETALLE DEL EMPLEO"
          id="justify-tab-example"
          className="mb-3"
          justify
          >
            <Tab eventKey="DETALLE DEL EMPLEO" title="DETALLE DEL EMPLEO">
              <div className={style.containerDetail}>
                <CardEmpleoDetail 
                id={empleoSelected.id}
                CompanyId={empleoSelected.CompanyId}
                title={empleoSelected.title}
                description={empleoSelected.description}
                createdAt={empleoSelected.createdAt}
                Workday={empleoSelected.Workday.name}
                Seniority={empleoSelected.Seniority.name}
                WorkMethod={empleoSelected.WorkMethod.name}
                />
              </div>
            </Tab>
            <Tab eventKey="DETALLE DE LA EMPRESA" title="DETALLE DE LA EMPRESA">
              <div className={style.containerDetail}>
                <CardEmpresaDetail companyId={companyId}
                />
              </div>
            </Tab>
          </Tabs>
          </div>
        </div>
    </div>
    );
};

export default EmpleoDetail;