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
import { getAllCompanys } from "../../Redux/Actions/actionsFunction/actionsCompanys";



const EmpleoDetail = () => {

    

    const {detailId} = useParams();

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getVacantDetail(detailId))
        dispatch(getAllCompanys())
    },[dispatch])

    const empleoSelected = useSelector(state => state.VacantDetail[0]);
    const empresas = useSelector(state => state.Company);
    console.log(empleoSelected);
    const empleos = [
        {
          id: 1,
          idEmpresa: 3,
          title: "DEVELOPER TRAINE",
          description: "buen sueldo, mal trato, peor paga",
          createdAt: "2023-05-09T22:34:43.806Z",
          updatedAt: "2023-05-09T22:34:43.806Z",
          JourneyId: "Nocturna",
          SeniorityId: "Traine",
          WorkMethodId: "Presencial",
        },
        {
          id: 2,
          idEmpresa: 1,
          title: "DEVELOPER JUNIOR",
          description: "buen sueldo, mal trato, peor paga",
          createdAt: "2023-05-09T22:34:43.806Z",
          updatedAt: "2023-05-09T22:34:43.806Z",
          JourneyId: "Nocturna",
          SeniorityId: "Junior",
          WorkMethodId: "Presencial",
        },
        {
          id: 3,
          idEmpresa: 1,
          title: "DEVELOPER SEMI-SENIOR",
          description: "buen sueldo, mal trato, peor paga",
          createdAt: "2023-05-09T22:34:43.806Z",
          updatedAt: "2023-05-09T22:34:43.806Z",
          JourneyId: "Diurna",
          SeniorityId: "Semi-Senior",
          WorkMethodId: "Remoto",
        },
        {
          id: 4,
          idEmpresa: 3,
          title: "DEVELOPER SENIOR",
          description: "buen sueldo, mal trato, peor paga",
          createdAt: "2023-05-09T22:34:43.806Z",
          updatedAt: "2023-05-09T22:34:43.806Z",
          JourneyId: "Diurna",
          SeniorityId: "Senior",
          WorkMethodId: "Remoto",
        },
        {
          id: 5,
          idEmpresa: 4,
          title: "FULL STACK WEB DEVELOPER",
          description: "buen sueldo, mal trato, peor paga",
          createdAt: "2023-05-09T22:34:43.806Z",
          updatedAt: "2023-05-09T22:34:43.806Z",
          JourneyId: "Diurna",
          SeniorityId: "Junior",
          WorkMethodId: "Remoto",
        },
        {
          id: 6,
          idEmpresa: 2,
          title: "Administrador de empresas Junior",
          description: "buen sueldo, mal trato, peor paga",
          createdAt: "2023-05-09T22:34:43.806Z",
          updatedAt: "2023-05-09T22:34:43.806Z",
          JourneyId: "Diurna",
          SeniorityId: "Junior",
          WorkMethodId: "Presencial",
        },
        {
          id: 7,
          idEmpresa: 5,
          title: "Gerente General",
          description: "buen sueldo, mal trato, peor paga",
          createdAt: "2023-05-09T22:34:43.806Z",
          updatedAt: "2023-05-09T22:34:43.806Z",
          JourneyId: "Diurna",
          SeniorityId: "Senior",
          WorkMethodId: "Remoto",
        },
        {
          id: 8,
          idEmpresa: 2,
          title: "Administrador de empresas",
          description: "buen sueldo, mal trato, peor paga",
          createdAt: "2023-05-09T22:34:43.806Z",
          updatedAt: "2023-05-09T22:34:43.806Z",
          JourneyId: "Nocturna",
          SeniorityId: "Semi-Senior",
          WorkMethodId: "Presencial",
        },
        {
          id: 9,
          idEmpresa: 5,
          title: "Gerente General",
          description: "buen sueldo, mal trato, peor paga",
          createdAt: "2023-05-09T22:34:43.806Z",
          updatedAt: "2023-05-09T22:34:43.806Z",
          JourneyId: "Diurna",
          SeniorityId: "Semi-Senior",
          WorkMethodId: "Presencial",
        },
        {
          id: 10,
          idEmpresa: 2,
          title: "Gerente de Sucursal",
          description: "buen sueldo, mal trato, peor paga",
          createdAt: "2023-05-09T22:34:43.806Z",
          updatedAt: "2023-05-09T22:34:43.806Z",
          JourneyId: "Diurna",
          SeniorityId: "Semi-Senior",
          WorkMethodId: "Remoto",
        },
        {
          id: 11,
          idEmpresa: 5,
          title: "Gerente de punto",
          description: "buen sueldo, mal trato, peor paga",
          createdAt: "2023-05-09T22:34:43.806Z",
          updatedAt: "2023-05-09T22:34:43.806Z",
          JourneyId: "Diurna",
          SeniorityId: "Traine",
          WorkMethodId: "Presencial",
        },
        {
          id: 12,
          idEmpresa: 2,
          title: "Gerente de punto",
          description: "buen sueldo, mal trato, peor paga",
          createdAt: "2023-05-09T22:34:43.806Z",
          updatedAt: "2023-05-09T22:34:43.806Z",
          JourneyId: "Diurna",
          SeniorityId: "Junior",
          WorkMethodId: "Presencial",
        },
        {
          id: 13,
          idEmpresa: 5,
          title: "Gerente Regional",
          description: "buen sueldo, mal trato, peor paga",
          createdAt: "2023-05-09T22:34:43.806Z",
          updatedAt: "2023-05-09T22:34:43.806Z",
          JourneyId: "Diurna",
          SeniorityId: "Senior",
          WorkMethodId: "Remoto",
        },
      ];

    const empresas2 = [
        {
            id: 1,
            logo: "https://2.bp.blogspot.com/-8nygkHc09a4/XELAYyOEjZI/AAAAAAAAGLg/kiGoQYw5Xtccv4PPFZA_9SXANdV4CaxFACLcBGAs/s1600/globant_logo.jpg",
            name: "Globant",
            business_name: "Globant",
            cuit: 1234759,
            country: "Argentina",
            city: "Buenos Aires",
            headOffice: "Luxemburgo",
            phone: 3156282792,
            email: "hi@globant.com",
            website: "https://www.globant.com/es",
            worksector: "Tecnológico",
            about: "Utilizamos las últimas tecnologías en el campo digital y cognitivo para transformar las organizaciones en todos los aspectos.",
        },

        {
            id: 2,
            logo: "https://tentulogo.com/wp-content/uploads/2017/06/cocacola-logo.jpg",
            name: "The Coca Cola Company",
            business_name: "Coca Cola",
            cuit: 8892932039,
            country: "Colombia",
            city: "Bogotá",
            headOffice: "Atlanta",
            phone: 78182919,
            email: "contactocolombia@coca-cola.com",
            website: "https://www.coca-cola.com.co/",
            worksector: "Productivo",
            about: "Nuestro compromiso es refrescar al mundo y hacer la diferencia. Un conjunto de acciones enfocadas a lograr Un Mundo Sin Residuos"
        },
        {
            id: 3,
            logo: "https://th.bing.com/th/id/OIP.9jQDkbZXwBTDwa8vPW9IowHaEK?pid=ImgDet&rs=1",
            name: "MercadoLibre Colombia LTDA",
            business_name: "Mercado Libre",
            cuit: 90229208,
            country: "Colombia",
            city: "Bogotá",
            headOffice: "Montevideo",
            phone: 99103883,
            email: "mercado@mercadolibre.com",
            website: "https://www.mercadolibre.com.co/",
            worksector: "Tecnológico",
            about: "Somos la empresa de tecnología líder en comercio electrónico y soluciones fintech de América Latina. Nuestro propósito es democratizar el comercio y los servicios financieros para transformar la vida de millones de personas en la región.",
        },
        {
            id: 4,
            logo: "https://th.bing.com/th/id/OIP.9jQDkbZXwBTDwa8vPW9IowHaEK?pid=ImgDet&rs=1",
            name: "MercadoLibre S.R.L.",
            business_name: "Mercado Libre",
            cuit: 8938392839,
            country: "Argentina",
            city: "Buenos Aires",
            headOffice: "Montevideo",
            phone: 783376272,
            email: "mercado@mercadolibre.com",
            website: "https://www.mercadolibre.com.ar/",
            worksector: "Tecnológico",
            about: "Somos la empresa de tecnología líder en comercio electrónico y soluciones fintech de América Latina. Nuestro propósito es democratizar el comercio y los servicios financieros para transformar la vida de millones de personas en la región.",
        },
        {
            id: 5,
            logo: "https://3.bp.blogspot.com/-3CbJoaXLuro/WLy6mQDpNII/AAAAAAAAClQ/GOyDFuEsTJwfEl4SUc8mMgUn48dWLP-eACLcB/w1200-h630-p-k-no-nu/Ramo.jpg",
            name: "Productos Ramo S.A.S",
            business_name: "Ramo",
            cuit: 1227782,
            country: "Colombia",
            city: "Manizales",
            headOffice: "USA",
            phone: 31627099926,
            email: "productosramo@mail.com",
            website: "https://www.ramo.com.co/",
            worksector: "Productivo",
            about: "Desde hace 60 años hemos hecho parte de la vida de los colombianos, contribuyendo a crear momentos felices, celebraciones y millones de sonrisas.",
        },
    ] 



    const [isLoading, setIsLoading] = useState(true);

    // const empleoSelected = empleos.find((empl) => empl.id === +detailId);
    // const wordKeysRaw = empleoSelected.title.split(' ');
    // const wordKeys = wordKeysRaw.filter((wrd) => wrd.length > 3);
    // const empleosRelSelected = empleos.filter((emple) => {
        //     if(emple.id !== empleoSelected.id ){
            //     return wordKeys.some((word) => emple.title.includes(word) ) 
            //     }
            // });
            
            useEffect(() => {
                setTimeout(() => {
                    setIsLoading(false);
                }, 2000);
            }, []);
            
            if (isLoading) {
                return <Loading/>;
            };
            
            const empresaSelected = empresas.find((empr) => empr.id === empleoSelected.CompanyId);
            return(
                <div className={style.mainContainer}>
        <NavBar/>
        <div className={style.mainContainer2}>
            
            {/* <div className={style.containerEmpleosRel}>
              {empleosRelSelected.map((empleo)=> {
                return <MiniCardEmpleosRel 
                id = {empleo.id}
                title = {empleo.title}
                SeniorityId = {empleo.SeniorityId}
                WorkMethodId = {empleo.WorkMethodId}
                />
              })}
            </div> */}

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
                // logo={empresaSelected.logo}
                title={empleoSelected.title}
                description={empleoSelected.description}
                createdAt={empleoSelected.createdAt}
                // updatedAt={empleoSelected.updatedAt}
                Workday={empleoSelected.Workday.name}
                // SeniorityId={empleoSelected.SeniorityId}
                WorkMethod={empleoSelected.WorkMethod.name}
                />
             </div>
            </Tab>
            <Tab eventKey="DETALLE DE LA EMPRESA" title="DETALLE DE LA EMPRESA">
             <div className={style.containerDetail}>
                <CardEmpresaDetail 
                id={empresaSelected.id}
                logo={empresaSelected.logo}
                name={empresaSelected.name}
                business_name={empresaSelected.business_name}
                cuit={empresaSelected.cuit}
                country={empresaSelected.country}
                city={empresaSelected.city}
                headOffice={empresaSelected.headOffice}
                phone={empresaSelected.phone}
                email={empresaSelected.email}
                website={empresaSelected.website}
                worksector={empresaSelected.worksector}
                about={empresaSelected.about}
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