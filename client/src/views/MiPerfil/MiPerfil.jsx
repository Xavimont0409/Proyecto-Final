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
import { useNavigate } from "react-router-dom";


const MiPerfil = ({ setValidateState, setCurrentUserStore2 }) => {

  const userDetail = JSON.parse(localStorage.getItem("currentUser2"))

  const [showPDF, setShowPDF] = useState(false);

  const handleClick = () => {
    setShowPDF(!showPDF);
  };

  const [dataReg, setDataReg] = useState(false)

  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const userDetail2 = useSelector(state => state.UserDetail) 
  const CvDetail = useSelector(state => state.CvDetail);
 

  useEffect(() => {
    dispatch(getUserDetail(userDetail.id))
}, [dispatch, userDetail.id]);


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
    if (userDetail2.Cv) {
      setPerfil(prevCv => ({
        ...prevCv,
        photo: userDetail2.Cv?.photo,
        name: userDetail2.name,
        email: userDetail2.email,
        celular: userDetail2.cellphone,
        profile: userDetail2.profile,
        profesion: userDetail2.Cv?.profession,
        descripcion: userDetail2.Cv?.personal_description,
        apellido: userDetail2.lastName,
        pais: userDetail2.Cv?.country,
        linkedin: userDetail2.Cv?.linkedin,
        skills: userDetail2.Cv?.skill,
      }));
    }
    else {
      return <div><Loading /></div>
    }
  }, [dispatch, userDetail2]);



  // useEffect(() => {
  //   const fetchCvById = async () => {
  //     try {
  //       if (Object.keys(userDetail2.Cv).length > 0) {
  //         await dispatch(getCvById(userDetail2.Cv?.id));
  //       } else {
  //         alert('No tienes CV registrado');
  //         navigate('/registro-cv');
  //       }
  //     } catch (error) {
  //       console.error('Error al obtener el CV:', error);
  //     }
  //   };
  
  //   fetchCvById();
  // }, [dispatch, navigate, userDetail2.Cv, userDetail2.Cv?.id]);


  

    if (!userDetail2 || !CvDetail) {
      return <div><Loading /></div>
    } else {
      return (
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

                  {/* { !dataReg
                  ? <p>No tienes experiencia registrada <button onClick={()=>navigate('/registro-experiencia')}>Registar Experiencia</button> </p>
                  : */}
                  
                  {/* {CvDetail.Experiences?.map(exp => {
                    return (
                      <ListItem charge={exp.charge}
                        company={exp.company}
                        startDate={exp.start_date}
                        endDate={exp.still_working ? 'Actualmente' : exp.end_date}>
                      </ListItem>
                    )
                  })
                 } */}
                </div>
              </div>

              <div className={style.container5}>
                <h4 style={{ 'text-align': 'left' }}>Mis estudios</h4>

                <div className={style.containerListStudy}>

                  {/* {CvDetail.Formations?.map(study => {
                    return (
                      <ListItemStudy study_level={study.study_level}
                        title={study.title}
                        institute={study.institute}
                        state={study.state}>
                      </ListItemStudy>
                    )
                  })
                  }  */}

                </div>

              </div>

              <div className={style.container5}>
                <h4 style={{ 'text-align': 'left' }}>Skills</h4>
                <p>{perfil.skills}</p>
              </div>

              <div className={style.container3}>

                {/* <button
                  style={{ backgroundColor: 'gray' }}
                  onClick={handleClick}>{showPDF ? 'Ocultar PDF' : 'Ver CV en PDF'}</button>

                {showPDF && (
                  <div>
                    <PDFViewer width="1000" height="600">
                      <DocuPDF perfil={perfil} CvDetail={CvDetail} />
                    </PDFViewer>
                  </div>
                )} */}


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

export default MiPerfil;
