import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Route, Routes } from 'react-router-dom';
import { DetailProduct, EmpleoDetail, Empleos, Landing, LandingEmpresa, FormCv, FormEmpresa, FormVacante, Profiles, ProfilesCompany, PerfilCompany, MiPerfil, LandingApplicant, Registro, FormRegisterEmpresa, FormRegistroUsuario, Operation, Success, FormRegistroExperincia, FormRegistroEstudio, Vacantes, MyApplications} from './views';
import { Error404, ProtectedRoute, ServerMaintenance, TermsAndConditions, Footer, Loading } from './components';
import axios from 'axios';
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage/useLocalStorage';
import NewRegistroCompany from './views/NewRegistro/newRegistroCompany';
import NewRegistroApplicant from './views/NewRegistro/newResgistroApplicant';
import LoginCompany from './components/InicioDeSesion/LoginCompany'
import LoginApplicant from './components/InicioDeSesion/LoginApplicant'
import Ratings from './views/Ratings/Ratings';


axios.defaults.baseURL = 'http://localhost:3001'
//axios.defaults.baseURL = "https://proyecto-final-production-9e7e.up.railway.app/"


function App() {
  const currentUser = useSelector(state => state.dataEmail[0]);
  const [currentUserStore, setCurrentUserStore] = useLocalStorage('currentUser', '');
  const [ currentUserStore2 , setCurrentUserStore2] = useLocalStorage('currentUser2', '');
  const [ validateState, setValidateState ] = useLocalStorage('state', '')
  const [isLoading, setIsLoading] = useState(true);
  const userType = JSON.parse(localStorage.getItem("currentUser"))
  const userType2 = JSON.parse(localStorage.getItem("currentUser2"))
  const validate = JSON.parse(localStorage.getItem("state"))

  useEffect(() => {
    if (validateState === true && Object.keys(userType).length > 1) {
      setCurrentUserStore2(currentUser)
      return setCurrentUserStore('')
    }
    if(validateState === true && Object.keys(userType2).length > 1) setValidateState(true)
    if(validateState === false) {
      setCurrentUserStore("");
      setCurrentUserStore2("")
      setValidateState(false)
    }
  }, [currentUser, setCurrentUserStore, userType, setCurrentUserStore2, setValidateState, userType2, validateState ]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  };
  

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing setValidateState={setValidateState} setCurrentUserStore2= {setCurrentUserStore2}/>} />
        <Route path="/empleos" element={<Empleos setCurrentUserStore={setCurrentUserStore} />} />

        <Route path="/registro" element={<Registro currentUserStore2={currentUserStore2} currentUserStore={currentUserStore} />}/>
        <Route path='/newRegistroApplicant' element={<NewRegistroApplicant setCurrentUserStore2={setCurrentUserStore2}  setValidateState={setValidateState} setCurrentUserStore={setCurrentUserStore} />} />
        <Route path='/newRegistroCompany' element={<NewRegistroCompany setCurrentUserStore2={setCurrentUserStore2}  setValidateState={setValidateState} setCurrentUserStore={setCurrentUserStore} />} />
        <Route path='/loginCompany' element={<LoginCompany setValidateState={setValidateState} setCurrentUserStore={setCurrentUserStore} />} />
        <Route path='/loginApplicant' element={<LoginApplicant setValidateState={setValidateState} setCurrentUserStore={setCurrentUserStore} />} />
        <Route path='/ratings' element={<Ratings/> } />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions setCurrentUserStore={setCurrentUserStore} />} />
        <Route path="/ServerDevelop" element={<ServerMaintenance />} />
        <Route path="/product/:id" element={<DetailProduct setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
        
        <Route element={<ProtectedRoute isAutenticate={validate} />/*Todos*/}>
          <Route path="/empleoDetail/:detailId" element={<EmpleoDetail setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          <Route path='/profiles-company' element={<ProfilesCompany setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          <Route path='/profiles' element={<Profiles setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          <Route path="/MiPerfil" element={<MiPerfil setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          <Route path="/operation" element={<Operation setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          <Route path="/success" element={<Success />} />
        </Route>
                
        {/* (userLocalStorage.profile === "Company" || userLocalStorage.profile === "Admin") */}
        <Route element={<ProtectedRoute isAutenticate={validate && (userType2?.profile === 'Company' || userType2?.profile === 'Admin' )} />/*Empresa*/}>
          <Route path='/profiles-company' element={<ProfilesCompany setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          <Route path="/registro-vacante" element={<FormVacante setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          <Route path="/empresa" element={<LandingEmpresa setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          <Route path="/registro-empresa" element={<FormEmpresa setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          <Route path="/registroini-empresa" element={<FormRegisterEmpresa />} />
          <Route path="/vacantes" element={<Vacantes />} />
          <Route path="/perfil-company" element={<PerfilCompany setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
        </Route>

        <Route element={<ProtectedRoute isAutenticate={validate && (userType2?.profile === 'Applicant' || userType2?.profile === 'Admin' )} />/*Empleado*/}>
          <Route path="/registro-cv" element={<FormCv setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          <Route path='/applicant' element={<LandingApplicant setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          <Route path="/registro-experiencia" element={<FormRegistroExperincia setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          <Route path="/registro-estudio" element={<FormRegistroEstudio setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          <Route path="/registro-usuario" element={<FormRegistroUsuario />} />
          <Route path="/postulaciones" element={<MyApplications setValidateState={setValidateState} setCurrentUserStore2={setCurrentUserStore2} />} />
          
        </Route>
      </Routes>
      {isLoading ? <></> : <Footer />}
    </div>
  );
}

export default App;
