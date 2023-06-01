import Loading from "../../components/Loading/Loading"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import style from "./DetailProfile.module.css"
import NavBar from "../../components/NavBar/NavBar"
import { BsFillEnvelopeAtFill, BsFillTelephoneFill, BsGlobeAmericas, BsLinkedin } from 'react-icons/bs'
import ListItem from "../../components/ListItemExperience/ListItemExperience";
import ListItemStudy from "../../components/ListItemStudy/ListItemStudy";
import { getUserDetail } from "../../Redux/Actions/actionsFunction/actionsUsers";
import { Link, useNavigate, useParams } from "react-router-dom";


const DetailProfile = ({ setValidateState, setCurrentUserStore2 }) => {

  const id = useParams().id;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  


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
    Experiences:[],
    Formations:[],
    
  });


  useEffect(() => {
    dispatch(getUserDetail(id))

  }, [id, dispatch]);

  

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
        Experiences:userDetail.Cv?.Experiences,
        Formations:userDetail.Cv?.Formations
      }));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navigate, userDetail.Cv]);



  useEffect(() => {
    setTimeout(() => {
      setIsLoading2(true);
    }, 2000);
  }, []);


  if(!isLoading2){
    return <div><Loading /></div>
  }

  if (!isLoading) {
    return (<div className={style.container}>
      <NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} ></NavBar>
      <div style={{ 'margin': '10vh auto' }}>
        <p style={{ 'margin': '10vh auto' }}>No tienes Cv registrada <button onClick={() => navigate('/registro-cv')} > Registar CV</button></p>
      </div>
    </div>)
  } else {
    return (
      <>
        <NavBar setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} ></NavBar>
        <div className={style.container}>

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
                        <Link to={perfil.linkedin}>
                        <p style={{ whiteSpace: 'nowrap', 'marginBottom': '3px' }} >{perfil.linkedin.slice(12,35)}...</p>
                        </Link>
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
              <h4 style={{ 'text-align': 'left' }}>Experiencias profesionales</h4>
              <div className={style.containerList}>

                {perfil.Experiences?.length === 0
                  ? <div>El aspirante no tiene experiencia registrada</div>
                  :perfil.Experiences?.map(exp => {
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
              <h4 style={{ 'text-align': 'left' }}>Estudios</h4>

              <div className={style.containerListStudy}>


                {perfil.Formations?.length === 0
                  ? <div>El aspirante no tiene formación registrada</div>
                  : perfil.Formations?.map(exp => {
                    return (
                      <ListItemStudy 
                        title={exp.title}
                        study_level={exp.study_level}
                        institute={exp.institute}
                        state={exp.state}>
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
            </div>
          </div>
        </>
      )
    }

}

export default DetailProfile;
