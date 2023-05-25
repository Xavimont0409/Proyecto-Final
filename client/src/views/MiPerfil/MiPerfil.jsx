import { useAuth0 } from "@auth0/auth0-react";
import Loading from "../../components/Loading/Loading"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getEmail } from "../../Redux/Actions/actionsFunction/FiltersHome";
import { useState } from "react";
import { getUserDetail } from "../../Redux/Actions/actionsFunction/actionsUsers";
import style from "./MiPerfil.module.css"
import { useNavigate } from "react-router-dom";
import NavBarLog from "../../components/NavBar/NavBarLog"
import { BsFillEnvelopeAtFill, BsFillTelephoneFill, BsGlobeAmericas, BsLinkedin } from 'react-icons/bs'
import { PDFViewer, PDFDownloadLink, Document, Page, Text } from "@react-pdf/renderer"
import DocuPDF from "./DocuPDF"
import { getAllCv } from "../../Redux/Actions/actionsFunction/actionsCv";
// import email from "../../assets/img/email.svg"

const MiPerfil = ({ setCurrentUserStore }) => {


  const [showPDF, setShowPDF] = useState(false);

const Cvs = useSelector(state => state.Cv);


  const handleClick = () => {
    setShowPDF(true);
  };
  const navigate = useNavigate()
  const dispatch = useDispatch();

  // const currentUser = useSelector(state => state.dataEmail[0]);
  const userDetail = JSON.parse(localStorage.getItem("currentUser"))
  console.log(Cvs)

  const { user, isAuthenticated, isLoading, logout } = useAuth0();

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
   dispatch(getAllCv())
  }, [dispatch]);


  // useEffect(() => {
  //   if (currentUser) {
  //     dispatch(getUserDetail(currentUser.id))
  //   }
  // }, [dispatch, currentUser]);



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
    // else{
    //     alert('Aun no has creado tu CV')
    //     navigate('/registro-cv')
    // }
  }, [userDetail]);



  if (isAuthenticated) {
    if ( !userDetail) {
      return <div><Loading /></div>
    } else {
      return (
        // isAuthenticated && (
        <>
          <NavBarLog setCurrentUserStore={setCurrentUserStore} ></NavBarLog>
          <div className={style.container}>




            <h1>Mi Perfil</h1>

            <div className={style.container2}>

              <div className={style.container1}>


                <div>
                  <img className={style.image} src={perfil.photo} alt="Profile" />
                </div>



                <div>
                  <h1>{perfil.name} {perfil.apellido}</h1>

                  <div className={style.container4}>

                    <div className={style.container3}>
                      <BsFillEnvelopeAtFill></BsFillEnvelopeAtFill>
                      {/* <img src={email} alt="correo" /> */}
                      <p>{perfil.email}</p>
                    </div>

                    <div className={style.container3}>
                      <BsFillTelephoneFill></BsFillTelephoneFill>
                      <p>{perfil.celular}</p>
                    </div>

                  </div>


                  <div className={style.container4}>

                    <div className={style.container3}>
                      <BsLinkedin></BsLinkedin>
                      <p>{perfil.linkedin}</p>
                    </div>

                    <div className={style.container3}>
                      <BsGlobeAmericas></BsGlobeAmericas>
                      <p>{perfil.pais}</p>
                    </div>

                  </div>


                </div>

              </div>

              <div>
                <h3>{perfil.profesion}</h3>
                <p>{perfil.descripcion}</p>
              </div>

              <div>
                <h3>Mis experiencias profesionales</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta omnis, quidem neque laboriosam delectus eos rerum! Aperiam, sint itaque necessitatibus ipsum perspiciatis similique recusandae doloribus fugit. Quidem, amet vero?</p>
              </div>

              <div>
                <h3>Mis estudios</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias soluta omnis, quidem neque laboriosam delectus eos rerum! Aperiam, sint itaque necessitatibus ipsum perspiciatis similique recusandae doloribus fugit. Quidem, amet vero?</p>
              </div>

              <div>
                <h3>Skills</h3>
                <p>{perfil.skills}</p>
              </div>

              <div className={style.container3}>

                <button
                  style={{ backgroundColor: 'gray' }}
                  onClick={handleClick}>Ver CV en PDF</button>

                {showPDF && (
                  <PDFViewer width="1000" height="600">
                    <DocuPDF perfil={perfil}>

                    </DocuPDF>
                  </PDFViewer>
                )}


                <PDFDownloadLink document={<DocuPDF perfil={perfil}></DocuPDF>} fileName={`Cv ${perfil.name} ${perfil.apellido}`}>
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
