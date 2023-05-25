import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { DetailProduct, EmpleoDetail, Empleos, Landing, LandingEmpresa, FormCv, FormEmpresa, FormVacante, Profiles, ProfilesCompany, MiPerfil, LandingApplicant, Registro, FormRegisterEmpresa, FormRegistroUsuario, Operation, Success, FormRegistroExperincia, FormRegistroEstudio, Vacantes} from './views';
import { Error404, ProtectedRoute, ServerMaintenance, TermsAndConditions, Footer, Loading } from './components';
import axios from 'axios';
import { useAuth0 } from '@auth0/auth0-react';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage/useLocalStorage';
//import { FaBullseye } from 'react-icons/fa';
import { login } from './Redux/Actions/actionsFunction/actionsLogin'




axios.defaults.baseURL = 'http://localhost:3001'
// axios.defaults.baseURL = "https://proyecto-final-production-9e7e.up.railway.app/"


function App() {
  //const dispatch = useDispatch();
  const currentUser = useSelector(state => state.dataEmail[0]);
  //const confirmacion = useSelector(state => state.login)
  const dispatch = useDispatch()
  const [currentUserStore, setCurrentUserStore] = useLocalStorage('currentUser', '');
  const { isAuthenticated } = useAuth0();




  useEffect(() => {
    if (currentUser) {
      setCurrentUserStore(currentUser);
      if (currentUserStore) dispatch(login(true))
    }
    return () => {
      localStorage.removeItem("redirectTo");
    };
  }, [currentUser, currentUserStore, dispatch, setCurrentUserStore]);

  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <Loading />;
  };


  const userLocalStorage = JSON.parse(localStorage.getItem("currentUser"))




  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing currentUserStore={currentUserStore} setCurrentUserStore={setCurrentUserStore} />} />
        <Route path="/empleos" element={<Empleos setCurrentUserStore={setCurrentUserStore} />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/TermsAndConditions" element={<TermsAndConditions setCurrentUserStore={setCurrentUserStore} />} />
        <Route path="/ServerDevelop" element={<ServerMaintenance />} />
        <Route path="/product/:id" element={<DetailProduct currentUserStore={currentUserStore} setCurrentUserStore={setCurrentUserStore} />} />
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />/*Todos*/}>
          <Route path="/empleoDetail/:detailId" element={<EmpleoDetail currentUserStore={currentUserStore} setCurrentUserStore={setCurrentUserStore} />} />

          <Route path='/profiles' element={<Profiles setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/MiPerfil" element={<MiPerfil setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/operation" element={<Operation setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/success" element={<Success />} />
        </Route>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated && (userLocalStorage.profile === "Company" || userLocalStorage.profile === "Admin")} userType={userLocalStorage.profile} />/*Empresa*/}>
          <Route path='/profiles-company' element={<ProfilesCompany setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/registro-vacante" element={<FormVacante setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/empresa" element={<LandingEmpresa setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/registro-empresa" element={<FormEmpresa setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/registroini-empresa" element={<FormRegisterEmpresa />} />
          <Route path="/vacantes" element={<Vacantes />} />
        </Route>
        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated && (userLocalStorage.profile === "Applicant" || userLocalStorage.profile === "Admin")} userType={userLocalStorage.profile} />/*Empleado*/}>
          <Route path="/registro-cv" element={<FormCv setCurrentUserStore={setCurrentUserStore} />} />
          <Route path='/applicant' element={<LandingApplicant setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/registro-experiencia" element={<FormRegistroExperincia setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/registro-estudio" element={<FormRegistroEstudio setCurrentUserStore={setCurrentUserStore} />} />
          <Route path="/registro-usuario" element={<FormRegistroUsuario />} />
        </Route>
      </Routes>
      {isLoading ? <></> : <Footer />}
    </div>
  );
}

export default App;
