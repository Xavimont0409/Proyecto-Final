import style from "./EmpleoDetail.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { Container, Row, Col } from "react-bootstrap";
import CardEmpleoDetail from "../../components/CardEmpleoDetail/CardEmpleoDetail";
import NavBar from "../../components/NavBar/NavBarUnlog";
import CardEmpresaDetail from "../../components/CardEmpresaDetail/CardEmpresaDetail";
import MiniCardEmpleosRel from "../../components/MiniCardEmpleosRel/MiniCardEmpleosRel";



const EmpleoDetail = () => {


    return(
    <div className={style.mainContainer}>
        <NavBar/>
        <div className={style.mainContainer2}>
            
            <div className={style.containerEmpleosRel}>
            <MiniCardEmpleosRel/>
            <MiniCardEmpleosRel/>
            <MiniCardEmpleosRel/>
            <MiniCardEmpleosRel/>
            <MiniCardEmpleosRel/>
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
                <CardEmpleoDetail/>
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