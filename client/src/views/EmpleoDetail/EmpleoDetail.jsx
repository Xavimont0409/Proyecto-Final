import style from "./EmpleoDetail.module.css";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import CardEmpleoDetail from "../../components/CardEmpleoDetail/CardEmpleoDetail";



const EmpleoDetail = () => {



    return(
    <div className={style.mainContainer}>
        <h1>ACÁ VA LA NAVBAR</h1>
        <div className={style.mainContainer2}>
            <div className={style.containerEmpleosRel}>
                Acá van las card de empleos relacionados
            </div>
            <div className={style.mainContainer3}>
            <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
            >
             <Tab eventKey="home" title="Home">
             <div className={style.containerDetail}>
                <CardEmpleoDetail/>
             </div>
            </Tab>
            <Tab eventKey="profile" title="Profile">
             <div className={style.containerDetail}>ACÁ VA LA CARD DE DETALLE DE LA EMPRESA</div>
            </Tab>
            </Tabs>
            </div>
        </div>

    </div>

    );
};

export default EmpleoDetail;