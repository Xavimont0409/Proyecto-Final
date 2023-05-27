import Loading from "../../components/Loading/Loading"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import style from "./MiPerfil.module.css"
import NavBar from "../../components/NavBar/NavBar"
import { BsFillEnvelopeAtFill, BsFillTelephoneFill, BsGlobeAmericas, BsLinkedin } from 'react-icons/bs'
import { PDFViewer, PDFDownloadLink} from "@react-pdf/renderer"
import DocuPDF from "./DocuPDF"
import { getCvById } from "../../Redux/Actions/actionsFunction/actionsCv";
import ListItem from "../../components/ListItemExperience/ListItemExperience";
import ListItemStudy from "../../components/ListItemStudy/ListItemStudy";
import { getUserDetail } from "../../Redux/Actions/actionsFunction/actionsUsers";


const MiPerfil = ({ setValidateState, setCurrentUserStore2 }) => {

  const [showPDF, setShowPDF] = useState(false);
  const handleClick = () => {
    setShowPDF(!showPDF);
  };
  const dispatch = useDispatch();

  const userDetail = JSON.parse(localStorage.getItem("currentUser2"))
  const validacion = JSON.parse(localStorage.getItem("state"));

  const CvDetail = useSelector(state => state.CvDetail);

  const [perfil, setPerfil] = useState({
    photo: '',
    name: '',
    email: '',
    celular: '',
    profile: '',
    profesion: '',
    descripcion: '',
    apellido: '',
    pais: '',
    linkedin: '',
    skills: '',


  });


  useEffect(() => {
    dispatch(getCvById(userDetail.Cv.id))
    dispatch(getUserDetail(userDetail.id))
  }, [dispatch, userDetail.Cv.id, userDetail.id]);


  // console.log(aplicantDetail)
  console.log(CvDetail)

  useEffect(() => {
    if (userDetail) {
      setPerfil(prevCv => ({
        ...prevCv,
        photo: userDetail.Cv?.photo,
        name: userDetail.name,
        email: userDetail.email,
        celular: userDetail.cellphone,
        profile: userDetail.profile,
        profesion: userDetail.Cv?.profession,
        descripcion: userDetail.Cv?.personal_description,
        apellido: userDetail.lastName,
        pais: userDetail.Cv?.country,
        linkedin: userDetail.Cv?.linkedin,
        skills: userDetail.Cv?.skill,
      }));
    }
    else {
      return <div><Loading /></div>
    }
  }, []);


  const contentRef = useRef(null);

  const generatePDF = () => {

    if(userDetail && CvDetail){

      const element = document.getElementById('pdf-content');
      
      //html2pdf().from(element).save('documento.pdf');
    }else {
      return (<Loading></Loading>)
    }
  };



  if (validacion) {

    if (!userDetail || !CvDetail) {
      return <div><Loading /></div>
    } else {
      return (
        // isAuthenticated && (
        <>
          <NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} ></NavBar>
          <div  className={style.container}>


            <h1>Mi Perfil</h1>

            <div id="pdf-content" className={style.container2}>

              <div className={style.container1}>


                <div>
                  <img className={style.image} src={perfil.photo} alt="Profile" />
                </div>



                <div>
                  <h1>{perfil.name} {perfil.apellido}</h1>

                  <div className={style.container6}>

                    <div className={style.container4}>

                      <div className={style.container3}>
                        <BsFillEnvelopeAtFill></BsFillEnvelopeAtFill>
                        <p style={{ 'marginBottom': '3px' }}>{perfil.email}</p>
                      </div>

                      <div className={style.container3}>
                        <BsLinkedin></BsLinkedin>
                        <p style={{ whiteSpace: 'nowrap', 'marginBottom': '3px' }} >{perfil.linkedin}</p>
                      </div>

                    </div>


                    <div className={style.container4}>




                      <div className={style.container3}>
                        <BsFillTelephoneFill></BsFillTelephoneFill>
                        <p style={{ 'marginBottom': '3px' }}>{perfil.celular}</p>
                      </div>


                      <div className={style.container3}>
                        <BsGlobeAmericas></BsGlobeAmericas>
                        <p style={{ whiteSpace: 'nowrap', 'marginBottom': '3px' }}>{perfil.pais}</p>
                      </div>

                    </div>

                  </div>



                </div>

              </div>

              <div className={style.container5}>
                <h4 style={{ 'text-align': 'left' }}>{perfil.profesion}</h4>
                <p style={{ 'text-align': 'justify' }}>{perfil.descripcion}</p>
              </div>

              <div className={style.container5}>
                <h4 style={{ 'text-align': 'left' }}>Mis experiencias profesionales</h4>
                <div className={style.containerList}>

                  {CvDetail.Experiences?.map(exp => {
                    return (
                      <ListItem charge={exp.charge}
                        company={exp.company}
                        startDate={exp.start_date}
                        endDate={exp.still_working ? 'Actualmente' : exp.end_date}>
                      </ListItem>
                    )
                  })
                 }
                </div>
              </div>

              <div className={style.container5}>
                <h4 style={{ 'text-align': 'left' }}>Mis estudios</h4>

                <div className={style.containerListStudy}>

                  {CvDetail.Formations?.map(study => {
                    return (
                      <ListItemStudy study_level={study.study_level}
                        title={study.title}
                        institute={study.institute}
                        state={study.state}>
                      </ListItemStudy>
                    )
                  })
                  } 

                </div>

              </div>

              <div className={style.container5}>
                <h4 style={{ 'text-align': 'left' }}>Skills</h4>
                <p>{perfil.skills}</p>
              </div>

              <div className={style.container3}>

                <button
                  style={{ backgroundColor: 'gray' }}
                  onClick={handleClick}>{showPDF ? 'Ocultar PDF' : 'Ver CV en PDF'}</button>

                {showPDF && (
                  <PDFViewer width="1000" height="600">
                    <DocuPDF perfil={perfil}
                    CvDetail={CvDetail}>

                    </DocuPDF>
                  </PDFViewer>
                )}


                <PDFDownloadLink document={<DocuPDF perfil={perfil} CvDetail={CvDetail}></DocuPDF>} fileName={`Cv ${perfil.name} ${perfil.apellido}`}>
                  <button style={{ 'backgroundColor': 'gray' }}>Descargar CV en PDF</button>
                </PDFDownloadLink>



              </div>
            </div>
          </div>
        </>
      )
    }
  }
}

export default MiPerfil;
