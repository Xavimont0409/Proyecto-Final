import Loading from "../../components/Loading/Loading"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import style from "./MiPerfil.module.css"
import NavBar from "../../components/NavBar/NavBar"
import { BsFillEnvelopeAtFill, BsFillTelephoneFill, BsGlobeAmericas, BsLinkedin } from 'react-icons/bs'
import { PDFViewer, PDFDownloadLink} from "@react-pdf/renderer"
import DocuPDF from "./DocuPDF"
import ListItem from "../../components/ListItemExperience/ListItemExperience";
import ListItemStudy from "../../components/ListItemStudy/ListItemStudy";
import { getUserDetail } from "../../Redux/Actions/actionsFunction/actionsUsers";
import { useNavigate } from "react-router-dom";


const MiPerfil = ({ setValidateState, setCurrentUserStore2 }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [showPDF, setShowPDF] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(true);

  const currentUser = JSON.parse(localStorage.getItem("currentUser2"))

  const userDetail = useSelector(state => state.UserDetail);


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
    dispatch(getUserDetail(currentUser.id))

  }, [currentUser.id, dispatch]);

  

  useEffect(() => {
    if (userDetail.Cv === null) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
      setIsLoading2(false);
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
  }, [navigate, userDetail.Cv]);



  useEffect(() => {
    setTimeout(() => {
      setIsLoading2(false);
    }, 2000);
  }, []);


  console.log(userDetail);


  const handleClick = () => {
    setShowPDF(!showPDF);
  };


  if(isLoading2){

    return <div><Loading /></div>
  }

  if (!isLoading) {
    return <div className={style.container}>
      <NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} ></NavBar>
      <div style={{ 'margin': '10vh auto' }}>
        <p style={{ 'margin': '10vh auto' }}>No tienes Cv registrada <button onClick={() => navigate('/registro-cv')} > Registar CV</button></p>

      </div>
    </div>
  } else {
    return (
      <>
        <NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} ></NavBar>
        <div className={style.container}>

          <h1>Mi Perfil</h1>

          <div id="pdf-content" className={style.container2}>

              <div className={style.container1}>


                <div>
                  <img className={style.image} src={perfil.photo} alt="Profile" />
                </div>

                <div>
                  <h1 style={{ whiteSpace: 'nowrap' }}>{perfil.name} {perfil.apellido}</h1>

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

                {!userDetail.Cv
                    ? <p>No tienes formacion registrada <button onClick={() => navigate('/registro-estudio')}>Registar</button> </p>
                    : userDetail.Cv.Formations?.map(study => {
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
                <h4 style={{ 'text-align': 'left' }}>Mis estudios</h4>

                <div className={style.containerListStudy}>


                {!userDetail.Cv
                    ? <p>No tienes experiencia registrada <button onClick={() => navigate('/registro-experiencia')}>Registar</button> </p>
                    : userDetail.Cv.Experiences?.map(exp => {
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

                <PDFDownloadLink document={<DocuPDF perfil={perfil} CvDetail={userDetail.Cv}></DocuPDF>} fileName={`Cv ${perfil.name} ${perfil.apellido}`}>
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
