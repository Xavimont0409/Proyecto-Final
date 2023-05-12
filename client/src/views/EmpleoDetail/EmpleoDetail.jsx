import style from "./EmpleoDetail.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardEmpleoDetail from "../../components/CardEmpleoDetail/CardEmpleoDetail";
import NavBar from "../../components/NavBar/NavBar";
import CardEmpresaDetail from "../../components/CardEmpresaDetail/CardEmpresaDetail";
import MiniCardEmpleosRel from "../../components/MiniCardEmpleosRel/MiniCardEmpleosRel";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import Loading from "../../components/Loading/Loading";



const EmpleoDetail = () => {

    const {detailId} = useParams();
    const empleos = useSelector(state => state.publications);
    const [isLoading, setIsLoading] = useState(true);

    const empleoSelected = empleos.find((empl) => empl.id === +detailId);
    const wordKeysRaw = empleoSelected.title.toLowerCase().split(' ');
    const wordKeys = wordKeysRaw.filter((wrd) => wrd.length > 3);
    const empleosRelSelected = empleos.filter((emple) => {
        return wordKeys.some((word) => emple.title.toLowerCase().includes(word) ) 
    });
    
    console.log(wordKeys);
    console.log(empleosRelSelected);
  
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, []);

    if (isLoading) {
        return <Loading/>;
    };
    
    return(
    <div className={style.mainContainer}>
        <NavBar/>
        <div className={style.mainContainer2}>
            
            <div className={style.containerEmpleosRel}>
              {empleosRelSelected.map((empleo)=> {
                return <MiniCardEmpleosRel 
                id = {empleo.id}
                title = {empleo.title}
                SeniorityId = {empleo.SeniorityId}
                />
              })}
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
                <CardEmpleoDetail empleoSelected={empleoSelected}/>
             </div>
            </Tab>
            <Tab eventKey="DETALLE DE LA EMPRESA" title="DETALLE DE LA EMPRESA">
             <div className={style.containerDetail}>
                <CardEmpresaDetail/>
             </div>
            </Tab>
            </Tabs>
            </div>
        </div>

    </div>

    );
};

export default EmpleoDetail;